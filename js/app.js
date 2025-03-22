import router from './router.js'

const App = {
  template: `<router-view></router-view>`,
  mounted() {
    const redirectPath = sessionStorage.getItem('redirect-path')
    if (redirectPath) {
      sessionStorage.removeItem('redirect-path')
      this.$router.replace(redirectPath)
    }
  }
}

Vue.createApp(App).use(router).mount('#app')
