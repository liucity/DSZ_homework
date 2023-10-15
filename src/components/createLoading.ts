import { createApp, defineComponent, h, reactive, toRefs } from "vue"

export interface LoadingOptions {
  show: boolean;
  background: string;
  message: string;
}

export function createLoading () {
  const data = reactive({
    show: false,
    background: 'rgba(0, 0, 0, 0.7)',
    message: ''
  })

  const loadingComp = defineComponent({
    setup() {
      const renderSpinnerItem = () => {
        return h('div', { class: 'spinner-item' })
      }
      const renderSpinner = () => {
        return h(
          'div',
          { class: 'spinner' },
          new Array(4).fill(null).map(() => renderSpinnerItem())
        )
      }
      const spinner = renderSpinner();
      const renderMessage = () => h('div', {
        class: 'loading-message display-center'
      }, [spinner, data.message])

      return () => {
        return h(
          'div',
          { 
            class: "loading-box display-center",
            style: { 'background-color': data.background }
          },
          [renderMessage()]
        )
      }
    }
  })
  
  const instance = createApp(loadingComp);
  const root = document.createElement('div');

  document.body.appendChild(root);
  instance.mount(root);
  
  return {
    ...toRefs(data),
    instance,
    unmount() {
      instance.unmount();
      document.body.removeChild(root);
    }  
  }
}