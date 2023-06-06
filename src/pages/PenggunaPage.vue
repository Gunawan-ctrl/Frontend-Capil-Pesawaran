<template>
  <q-page>
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-item>
          <q-item-section avatar>
            <lottie style="width: 70px" :options="defaultOptions" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-weight-bold"
              >Tambah Pengguna</q-item-label
            >
            <q-item-label caption
              >Halaman tambah pengguna Instansi Kabupaten
              Pesawaran</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-card>
      <div class="row q-gutter-sm q-mt-sm q-pr-sm">
        <div class="col-md-5 col-xs-12">
          <q-card class="bg-cyan-6 flex text-indigo-10" v-model="visibleImport">
            <q-card-section>
              <img src="images/icons/import.png" style="width: 40px" />
            </q-card-section>
            <q-card-section>
              <q-item-label class="text-white text-h6 text-weight-bold"
                >TAMBAH PENGGUNA</q-item-label
              >
              <q-item-label caption class="text-white"
                >Masukan data pengguna instansi ke database</q-item-label
              >
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row q-gutter-sm q-mt-sm q-pr-sm">
        <div class="col-md-12 col-xs-12">
          <q-card class="text-indigo-10 text-subtitle2">
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold"
                  >TAMBAH DATA</q-item-label
                >
                <q-item-label caption
                  >Silahkan tambah data Pengguna Instansi anda dengan
                  benar</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-separator />
            <q-form @submit="inputPengguna()">
              <q-card-section horizontal>
                <q-card-section class="q-gutter-md fit">
                  <q-input
                    outlined
                    dense
                    color="indigo-10"
                    v-model="nama_instansi"
                    label="Instansi"
                  />
                  <q-input
                    outlined
                    dense
                    color="indigo-10"
                    v-model="logo_instansi"
                    label="Logo Instansi"
                  />
                  <q-input
                    outlined
                    dense
                    color="indigo-10"
                    v-model="email"
                    label="Email"
                  />
                </q-card-section>

                <q-separator vertical />

                <q-card-section class="q-gutter-md fit">
                  <q-input
                    type="number"
                    dense
                    outlined
                    v-model="noTelpon"
                    label="No Telepon"
                  />
                  <q-input
                    class="text-capitalize"
                    dense
                    outlined
                    v-model="alamat"
                    label="Alamat"
                  />
                  <q-input
                    type="number"
                    class="text-capitalize"
                    dense
                    outlined
                    v-model="app_code"
                    label="App Code"
                  />
                </q-card-section>
              </q-card-section>

              <q-separator />
              <q-card-actions>
                <q-btn
                  type="submit"
                  flat
                  color="indigo-10"
                  label="Simpan Data"
                />
              </q-card-actions>
            </q-form>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Lottie from "./../components/lottie.vue";
import * as animationData from "./../../public/images/lottie/people.json";

export default {
  name: "PenggunaPage",
  components: {
    lottie: Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
      file: null,
      start: null,
      end: null,
      visibleExport: true,
      visibleImport: true,
    };
  },
};
</script>
