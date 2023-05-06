import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'

// 重置样式
import 'normalize.css'
import './assets/css/index.less'

// 引入页面权限
import './premission'

const app = createApp(App)

app.use(globalRegister)
app.use(store)
app.use(router)
app.mount('#app')
