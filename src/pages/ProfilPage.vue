<template>
  <q-page>
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-item>
          <q-item-section avatar>
            <lottie style="width: 70px" :options="defaultOptions" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-weight-bold">Bantuan</q-item-label>
            <q-item-label caption>Halaman statistik data bantuan Kabupaten Pesawaran</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <div class="row q-px-md q-gutter-md">
      <div class="row col fit">
        <q-card class="my-card" flat bordered>
          <q-img
            src="https://img.freepik.com/free-photo/aerial-view-businessman-using-computer-laptop_53876-20492.jpg?w=1060&t=st=1680668098~exp=1680668698~hmac=7a563ab39e74df08fe774133e981ab164c5500bb2f8d624121ef356cc2f9aa89"
            style="height: 180px"
          >
            <div class="absolute-top text-subtitle2 row">
              <q-avatar rounded align="center">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
              <div class="text-h5 q-mt-sm q-mb-xs q-ml-lg">Gunawan</div>
            </div>
          </q-img>

          <q-card-section>
            <div class="text-overline text-orange-9">gunawan@gmail.com</div>
            <div class="text-caption text-grey">
              Pengguna layanan Disdukcapil Pesawaran,
              memiliki batasan fitur terhadap hak akses yang dimiliki, gunakan
              layanan dengan bijak demi terjaganya keberlangsungan sistem.
              Sebelum menggunakan layanan, dianjurkan untuk membaca manual book
              terkait hak akses yang dimiliki.
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="row col fit">
        <q-card class="my-card col" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="col q-pa-lg">
              <div class="col">
                <div class="col-2 q-table__title">Perbaharui data diri</div>
                <p class="text-caption">
                  Form ini dapat anda gunakan untuk mengubah indentitas anda di
                  dalam sistem.
                </p>
              </div>
              <q-form @submit="onSubmit" @reset="onReset">
                <div class="row q-gutter-sm">
                  <div class="col">
                    <q-input
                      outlined
                      v-model="id_pengguna"
                      label="ID Pengguna"
                      lazy-rules
                      dense
                      readonly
                      :rules="[
                        (val) =>
                          (val && val.length > 0) || 'Please type something',
                      ]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="qr_code" class="text-blue-13" />
                      </template>
                    </q-input>
                  </div>
                </div>
                <div class="row q-gutter-sm">
                  <div class="col">
                    <q-input
                      outlined
                      v-model="namaLengkap"
                      label="Nama Lengkap"
                      lazy-rules
                      dense
                      :rules="[
                        (val) =>
                          (val && val.length > 0) ||
                          'Lengkapi data nama lengkap anda',
                      ]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="badge" class="text-blue-13" />
                      </template>
                    </q-input>
                  </div>
                </div>

                <div class="row q-gutter-sm">
                  <div class="col">
                    <q-input
                      outlined
                      v-model="userName"
                      label="Username"
                      lazy-rules
                      dense
                      :rules="[
                        (val) =>
                          (val && val.length > 0) ||
                          'Lengkapi data username anda',
                      ]"
                    >
                      <template v-slot:prepend>
                        <q-icon
                          name="admin_panel_settings"
                          class="text-blue-13"
                        />
                      </template>
                    </q-input>
                  </div>
                  <div class="col">
                    <q-input
                      outlined
                      v-model="password"
                      label="Password"
                      lazy-rules
                      dense
                      :rules="[
                        (val) =>
                          (val && val.length > 0) ||
                          'Lengkapi data password anda',
                      ]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="lock_open" class="text-blue-13" />
                      </template>
                    </q-input>
                  </div>
                </div>

                <div class="row q-gutter-sm">
                  <div class="col">
                    <q-btn
                      outline
                      label="Submit"
                      type="submit"
                      color="blue-13"
                      style="width: 110px"
                    />
                    <q-btn
                      outline
                      label="Reset"
                      type="reset"
                      color="red"
                      class="q-ml-sm"
                      style="width: 110px"
                    />
                  </div>
                </div>
              </q-form>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import Lottie from "./../components/lottie.vue"
import * as animationData from "./../../public/images/lottie/profile.json"
export default {
  name: "ProfilePage",
  components: {
    lottie: Lottie,
  },
  data() {
    return {
      id_pengguna: 123,
      namaLengkap: null,
      userName: null,
      email: null,
      no_telpon: null,
      password: null,
      profile: false,
      expanded: false,
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    onReset() {
      id_pengguna = null,
      namaLengkap = null,
      userName = null,
      password = null
    },
    getUser() {},
    onSubmit() {},
  },
};
</script>