import { boot } from 'quasar/wrappers'
import { LocalStorage } from 'quasar'
const parseProfile = () => {
  return LocalStorage.getItem('data')
}

export default boot(async ({ app }) => {
  // something to do
  app.config.globalProperties.$getProfile = parseProfile
})

export { parseProfile }
