import { boot } from "quasar/wrappers";
import { QSpinnerTail, QSpinnerGears, Loading } from "quasar";
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
const loading = {
  show: function () {
    Loading.show();
  },
  hide: function () {
    Loading.hide();
  },
};
export default boot(async ({ app }) => {
  app.config.globalProperties.$ol = {
    spinner: QSpinnerTail,
  }
  app.config.globalProperties.$loading = loading
});
