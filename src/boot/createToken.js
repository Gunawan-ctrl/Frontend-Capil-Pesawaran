import { boot } from 'quasar/wrappers'
import createToken from './tokenfunc'
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.config.globalProperties.$createToken = createToken
})

export { createToken }
