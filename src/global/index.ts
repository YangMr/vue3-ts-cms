import { App } from 'vue'
import registerElement from './register-element'
import registerIcon from './register-icon'
import registerProperties from '@/global/register-properties'

export const globalRegister = {
  install(app: App) {
    app.use(registerElement)
    app.use(registerIcon)
    app.use(registerProperties)
  }
}
