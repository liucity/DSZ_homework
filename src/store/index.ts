import { defineStore } from 'pinia'
import { getToken, setToken } from 'utils/request';

export const useGlobalStore = defineStore('global', {
  state: () => {
    return { 
      loadingCount: 0,
      userToken: getToken() as string | undefined
    }
  },
  getters: {
    isLoading: (state) => !!state.loadingCount,
    isLogin: (state) => !!state.userToken
  },
  actions: {
    loading(isLoading: boolean) {
      this.loadingCount = this.loadingCount + (isLoading ? 1 : -1);
    },
    setToken(token?: string) {
      setToken(token);
      this.userToken = token;
    }
  },
})