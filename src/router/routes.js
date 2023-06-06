const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "export",
        name: "export",
        component: () => import("pages/ExportPage.vue"),
      },
      {
        path: "import",
        name: "import",
        component: () => import("pages/ImportPage.vue"),
      },
      {
        path: "tambah-pengguna",
        name: "tambahPengguna",
        component: () => import("pages/PenggunaPage.vue"),
      },
      {
        path: "bantuan",
        name: "bantuan",
        component: () => import("pages/BantuanPage.vue"),
      },
      {
        path: "penyakit",
        name: "penyakit",
        component: () => import("pages/PenyakitPage.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("pages/ProfilPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/login",
    name: "login",
    component: () => import("pages/acces/LoginPage.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
