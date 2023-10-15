import { AxiosError } from 'axios';
import router from 'router/index';
import { error } from 'utils/log';
import { setToken } from '.';

const handleErrorCodeMap: Record<number, (err: AxiosError) => boolean> = {
  401: (err) => {
    alert(err.message)

    setToken()
    router.push('Login');

    return true
  }
};

function handleError (err: AxiosError) {
  var handled = handleErrorCodeMap[err.response?.status || 0]?.(err);

  if(!handled) {
    error(err);
  }
};

export default handleError;
