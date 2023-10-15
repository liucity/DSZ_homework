<template>
  <div class="display-center" style="flex-direction: column;">
    <div>Log In</div>
    <button class="btn" @click="onLogin">Login</button>
  </div>
</template>

<script setup lang="ts">
import { auth } from 'apis/index';
import { getToken } from 'utils/request';
import router from 'router/index';

const onLogin = async () => {
  await auth({
    email: 'test_account@dsz.com.au',
    password: 'asdf_123456'
  })

  router.replace('new-arrivals')
}

if(getToken()) {
  router.replace('new-arrivals')
}

</script>

<style scoped lang="less">
.btn {
  margin-top: 100px;    
  background-color: #591c97;
  padding: 1rem 0.7rem;
  line-height: 18px;
  height: 45px;
  border-radius: 2rem;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  font-weight: bold;
  color: #FFF;
}
</style>
