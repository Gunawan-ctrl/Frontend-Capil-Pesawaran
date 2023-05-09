import { boot } from "quasar/wrappers";
import { QSpinnerTail, QSpinnerGears, Loading } from "quasar";

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
