import { boot } from 'quasar/wrappers'
import { notif } from './showNotif'

export default boot(async ({ app }) => {
  app.config.globalProperties.$parseResponse = (res) => {
    if (res.status) {
      return false
    } else {
      if (res.code === 401) {
        notif(res.message, 'negative')
        return true
      } else {
        notif(res.message, 'negative')
        return true
      }
    }
  }
})
