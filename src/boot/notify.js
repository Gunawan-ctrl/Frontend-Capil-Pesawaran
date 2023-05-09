import { boot } from "quasar/wrappers";
import { Notify } from "quasar";

const notif = (message, jenis) => {
  return Notify.create({
    message: message,
    color: jenis,
    timeout: 2000,
    actions: [{ icon: "close", color: "white" }],
  });
};
export default boot(async ({ app }) => {
  app.config.globalProperties.$successNotif = (msg) => {
    notif(msg, "positive");
  };
  app.config.globalProperties.$commonErrorNotif = () => {
    notif("Terjadi Kesalahan Mohon Periksa Koneksi Internet Anda", "negative");
  };
  app.config.globalProperties.$errorNotif = (msg) => {
    notif(msg, "negative");
  };
});
export { notif };
