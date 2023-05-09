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
          <q-card class="bg-indigo-6 flex text-indigo-10">
            <q-card-section>
              <img src="images/icons/export.png" style="width: 40px;">
            </q-card-section>
            <q-card-section>
              <q-item-label class="text-white text-h6 text-weight-bold">EXPORT</q-item-label>
              <q-item-label caption class="text-white">Download data dari database</q-item-label>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row q-gutter-sm q-mt-sm">
        <div class="col-8">
          <q-card class="my-card text-indigo-10 text-subtitle2">
            <q-form @submit="getDataBydate()">
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
                <q-btn outline color="indigo-10" label="Export Data" type="submit" />
              </q-card-section>
            </q-form>
          </q-card>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
import Lottie from './../components/lottie.vue'
import * as animationData from './../../public/images/lottie/people.json'
import { exportFile } from 'quasar'

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
      data: null,
      kk_penduduk: null,
      NIK_penduduk: null,
      namaLengkap_penduduk: null,
      kecamatan_penduduk: null,
      desa_penduduk: null,
      visibleExport: true,
      visibleImport: true
    }
  },
  methods: {
    getDataBydate() {
      this.$axios.get("penduduk/exportCsv", {
        start: this.start,
        end: this.end
      }).then(async(res) => {
        if (res.data.status) {
          this.data = res.data.data
          this.exportToCSV(this.data)
        }
      })
    },
    exportToCSV (data) {
      const content = ['Nomor KK; NIK; Nama Lengkap; Kecamatan; Desa; Jenis Kalamin;']
        .concat(
          data.map((row) => {
            return `${row.NOMOR_KK};${row.NIK};${row.NAMA_LENGKAP};${row.KECAMATAN};${row.DESA};${row.JENIS_KELAMIN};`
          })
        )
        .join('\r\n')
      const status = exportFile('Data Penduduk.csv', content, 'text/csv')
      if (status !== true) {
        this.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
    },


  },

}

</script>
