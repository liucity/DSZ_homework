import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
    }),
  ],
    
  resolve: {
    alias: {
      // vue: 'vue/dist/vue.esm-bundler.js',
      "assets": path.resolve(__dirname, "src/assets"),
      "apis": path.resolve(__dirname, "src/apis"),
      "utils": path.resolve(__dirname, "src/utils"),
      "components": path.resolve(__dirname, "src/components"),
      "router": path.resolve(__dirname, "src/router"),
      "views": path.resolve(__dirname, "src/views"),
      "store": path.resolve(__dirname, "src/store")
    },
  },

  server:{
    host:'0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://services.dev.dropshipzone.com.au',
        changeOrigin: true,
        secure: false
      }
    },
    open: true
  }  
})
