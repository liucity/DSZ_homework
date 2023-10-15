import { AxiosResponse } from 'axios';
import { useGlobalStore } from 'store/index'
import Loading from 'components/Loading'

export function handleResponse<T>(rep: AxiosResponse<T>): Promise<T> {
  if(rep.status === 200) {
    return Promise.resolve(rep.data)
  }

  return Promise.reject(rep);
}

export const handleLoading = async <T>(
  request: Promise<T>,
  loadingMsg = 'processing...',
  isShowLoading = true,
) => {
  let loading: any;
  const global = useGlobalStore();
  const showLoading = () => {
    global.loading(true);
    loading = isShowLoading && Loading.open({
      message: loadingMsg,
      background: 'rgba(0, 0, 0, 0.7)'
    });
  };

  const hideLoading = () => {
    global.loading(false);

    if(!global.isLoading)
      loading?.close();
  };

  showLoading();
  try {
    const data = await request;
    hideLoading();
    return data;
  } catch (e) {
    console.error(e);
    hideLoading();
    return Promise.reject(e);
  }
};