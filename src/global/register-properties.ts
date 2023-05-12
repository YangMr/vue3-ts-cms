import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'

export default function registerProperties(app: App) {
  // 定义全局的方法
  app.config.globalProperties.$filter = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
