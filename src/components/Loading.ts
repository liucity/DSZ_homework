import { LoadingOptions, createLoading } from './createLoading';

let _instance: any;
function createInstance() {
  const { show, background, message, unmount } = createLoading();
  
  const wrapper = {
    open(options?: LoadingOptions){
      if(options) {
        if(options.background != undefined) background.value = options.background;
        if(options.message != undefined) message.value = options.message;
      }
      show.value = true;
      return wrapper;
    },
    close(immediate = true){
      if(immediate) {
        unmount();
        _instance = undefined;
      } else {
        show.value = false;
      }
      return wrapper;
    }
  }

  return wrapper;
}

function getInstance() {
  if (!_instance) {
    _instance = createInstance();
  }

  return _instance;
}

export default {
  open(options?: Partial<LoadingOptions>) {
    const instance = getInstance();
  
    return instance.open(options);
  },
  close(immediate = true){
    if(!_instance) return;
    const instance = getInstance();
  
    return instance.close(immediate);
  }
};