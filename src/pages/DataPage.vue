<template>
  <q-page>
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-item>
          <q-item-section avatar>
            <lottie style='width: 70px;' :options="defaultOptions"/>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-weight-bold">Data Penduduk</q-item-label>
            <q-item-label caption>Halaman import export data penduduk Kabupaten Pesawaran</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
      <div class="row q-gutter-sm q-mt-sm">
        <div class="col-4 col-xs-12 col-sm-4">
          <q-card class="bg-indigo-6 flex text-indigo-10" v-model="visibleExport">
            <q-card-section>
              <img src="images/icons/export.png" style="width: 40px;">
            </q-card-section>
            <q-card-section>
              <q-item-label class="text-white text-h6 text-weight-bold">EXPORT</q-item-label>
              <q-item-label caption class="text-white">Download data dari database</q-item-label>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-4 col-xs-12 col-sm-4">
          <q-card class="bg-cyan-6 flex text-indigo-10" v-model="visibleImport">
            <q-card-section>
              <img src="images/icons/import.png" style="width: 40px;">
            </q-card-section>
            <q-card-section>
              <q-item-label class="text-white text-h6 text-weight-bold">IMPORT</q-item-label>
              <q-item-label caption class="text-white">Masukan data ke database</q-item-label>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <q-slide-transition>
        <div class="row q-gutter-lg q-mt-xs" v-show="visibleImport">
          <div class="col-8">
            <q-card class="my-card text-indigo-10 text-subtitle2">
              <q-card-section>
                <q-item-label class="text-weight-bold">IMPORT DATA</q-item-label>
                <q-item-label caption>Silahkan upload file anda dengan format .csv</q-item-label>
              </q-card-section>
              <q-card-section style="width: 450px;">
                <q-file
                  clearable
                  clear-icon="close"
                  outlined
                  dense
                  color="indigo-10"
                  v-model="file"
                  label="Select file"
                />
              </q-card-section>
              <q-card-section style="width: 450px;">
                <q-btn outline color="indigo-10" label="Import Data" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-slide-transition>

      <q-slide-transition>
        <div class="row q-gutter-lg q-mt-xs" v-show="visibleExport">
          <div class="col-8">
            <q-card class="my-card text-indigo-10 text-subtitle2">
              <q-card-section>
                <q-item-label class="text-weight-bold">EXPORT DATA</q-item-label>
                <q-item-label caption>Silahkan tentukan range waktu yang di inginkan</q-item-label>
              </q-card-section>
              <q-card-section class="row q-gutter-sm">
                <q-input
                  class="col-5"
                  clearable
                  clear-icon="close"
                  outlined
                  dense
                  color="indigo-10"
                  type="date"
                  v-model="start"
                  label="Dari Tanggal"
                />
                <q-input
                  class="col-5"
                  clearable
                  clear-icon="close"
                  outlined
                  dense
                  color="indigo-10"
                  type="date"
                  v-model="end"
                  label="Sampai Tanggal"
                />
              </q-card-section>
              <q-card-section style="width: 450px;">
                <q-btn outline color="indigo-10" label="Export Data" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-slide-transition>
    </div>
  </q-page>
</template>

<script>
import Lottie from './../components/lottie.vue'
import * as animationData from './../../public/images/lottie/people.json'

export default {
  name: 'IndexPage',
  components: {
    lottie: Lottie
  },
  data () {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
      file: null,
      start: null,
      end: null,
      visibleExport: true,
      visibleImport: true
    }
  }
}

</script>
