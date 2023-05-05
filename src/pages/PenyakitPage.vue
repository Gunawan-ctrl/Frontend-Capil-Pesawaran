<template>
  <q-page>
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-item>
          <q-item-section avatar>
            <lottie style="width: 48px" :options="defaultOptions" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-weight-bold">Penyakit</q-item-label>
            <q-item-label caption>Halaman statistik data penyakit Kabupaten Pesawaran</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>

      <div class="row q-gutter-sm q-mt-sm">
        <q-card class="bg-indigo-14 flex flex-center text-indigo-10">
          <q-card-section>
            <q-avatar rounded size="40px">
              <img src="images/icons/authenticity.png" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <q-item-label class="text-white text-weight-bold">
              <vue3-autocounter ref='counter' :startAmount='0' :endAmount='`${this.penduduk}`' :duration='1' separator='.'
                :autoinit='true' />
            </q-item-label>
            <q-item-label caption class="text-white">Total Penduduk Pesawaran</q-item-label>
          </q-card-section>
        </q-card>

        <q-card class="bg-indigo-14 flex flex-center text-indigo-10">
          <q-card-section>
            <q-avatar rounded size="40px">
              <img src="images/icons/male.png" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <q-item-label class="text-white text-weight-bold">
              <vue3-autocounter ref='counter' :startAmount='0' :endAmount='`${this.penduduk_pria}`' :duration='1'
                separator='.' :autoinit='true' />
            </q-item-label>
            <q-item-label caption class="text-white">Total Penduduk Pria</q-item-label>
          </q-card-section>
        </q-card>

        <q-card class="bg-indigo-14 flex flex-center text-indigo-10">
          <q-card-section>
            <q-avatar rounded size="40px">
              <img src="images/icons/female.png" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <q-item-label class="text-white text-weight-bold">
              <vue3-autocounter ref='counter' :startAmount='0' :endAmount='`${this.penduduk_wanita}`' :duration='1'
                separator='.' :autoinit='true' />
            </q-item-label>
            <q-item-label caption class="text-white">Total Penduduk Wanita</q-item-label>
          </q-card-section>
        </q-card>
      </div>

      <q-card class="my-card q-mt-md">
        <q-table :rows="rows" :columns="columns" :pagination="pagination" :filter="filter">
          <template v-slot:top>
            <div class="col">
              <q-item-section>
                <q-item-label class="text-weight-bold">Penyakit</q-item-label>
                <q-item-label caption>Halaman statistik data penyakit Kabupaten Pesawaran</q-item-label>
              </q-item-section>
            </div>

            <q-space />

            <q-btn flat color="indigo-10" icon="search" dense rounded @click="visibles = !visibles" size="md"
              class="q-mr-sm" />
            <q-slide-transition>
              <div v-show="visibles">
                <q-input outlined debounce="300" placeholder="Pencarian" style="width: 300px" color="indigo-10"
                  v-model="filter" dense />
              </div>
            </q-slide-transition>
          </template>
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th v-for="col in props.cols" :key="col.name" :props="props" class="text-indigo-10">
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="NOMOR_KK" :props="props">
                {{ props.row.NOMOR_KK }}
              </q-td>
              <q-td key="NIK" :props="props">
                {{ props.row.NIK }}
              </q-td>
              <q-td key="NAMA_LENGKAP" :props="props" class="text-uppercase">
                {{ props.row.NAMA_LENGKAP.substring(0, 20).concat('...') }}
                <q-tooltip>{{ props.row.NAMA_LENGKAP }}</q-tooltip>
              </q-td>
              <q-td key="KECAMATAN" :props="props" class="text-uppercase">
                {{ props.row.KECAMATAN }}
                <q-tooltip>{{ props.row.KECAMATAN }}</q-tooltip>
              </q-td>
              <q-td key="DESA" :props="props" class="text-uppercase">
                {{ props.row.DESA }}
              </q-td>
              <q-td key="JENIS_KELAMIN" :props="props" class="text-uppercase">
                {{ props.row.JENIS_KELAMIN }}
              </q-td>
              <q-td key="ACTION" :props="props">
                <div class="justify-center q-gutter-x-xs">
                  <q-btn dense icon="visibility" flat size="sm" color="indigo-10" @click="this.confirm(props.row)">
                    <q-tooltip>DETAIL</q-tooltip>
                  </q-btn>
                </div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card>

      <q-dialog v-model="confirmDialog" position="bottom">
        <q-card style="width: 700px; max-width: 80vw;">
          <q-card-section class="bg-indigo-14 text-white">
            <div class="text-h6">DETAIL DATA PENDUDUK</div>
            <div class="text-subtitle2">NOMOR KARTU KELUARGA <q-badge color="white"
                class="q-ml-sm q-pl-md q-pr-md text-indigo-14 text-subtitle2">{{ this.kk_penduduk }}</q-badge></div>
          </q-card-section>
          <q-card-section>
            <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="left"
              narrow-indicator>
              <q-tab name="penduduk" label="PENDUDUK" />
              <q-tab name="keluarga" label="KELUARGA" />
              <q-tab name="informasi" label="INFORMASI PRIBADI" />
              <q-tab name="lokasi" label="LOKASI RUMAH" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="penduduk" class="col">
                <div class="row">
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Nama Lengkap</q-item-label>
                      <q-item-label class="text-weight-bold">{{ this.namaLengkap_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>NIK</q-item-label>
                      <q-item-label class="text-weight-bold">{{ this.NIK_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div class="row">
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Kecamatan</q-item-label>
                      <q-item-label caption class="text-weight-bold">{{ this.kecamatan_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Desa</q-item-label>
                      <q-item-label caption class="text-weight-bold">{{ this.desa_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Dusun</q-item-label>
                      <q-item-label caption class="text-weight-bold">{{ this.dusun_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>RT</q-item-label>
                      <q-item-label caption class="text-weight-bold">{{ this.rt_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div class="row">
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Jenis Kelamin</q-item-label>
                      <q-item-label caption class="text-weight-bold">{{ this.jenis_kelamin_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Tgl Lahir</q-item-label>
                      <q-item-label caption class="text-weight-bold">{{ this.tgl_lahir_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Hubungan Keluarga</q-item-label>
                      <q-item-label caption class="text-weight-bold">{{ this.hubungan_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Status Pernikahan</q-item-label>
                      <q-item-label caption class="text-weight-bold">{{ this.status_pernikahan_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
              </q-tab-panel>

              <q-tab-panel name="keluarga" class="col">
                <div class="row">
                  <q-item class="col-1">
                    <q-item-section>
                      <q-img src="images/icons/family.png" style="width: 30px;" />
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Nama Lengkap</q-item-label>
                      <q-item-label class="text-weight-bold">{{ namaLengkap_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>NIK</q-item-label>
                      <q-item-label class="text-weight-bold">{{ this.NIK_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div class="row">
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Jenis Kelamin</q-item-label>
                      <q-item-label caption class="text-weight-bold">{{ this.jenis_kelamin_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Tgl Lahir</q-item-label>
                      <q-item-label caption class="text-weight-bold">{{ this.tgl_lahir_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Hubungan</q-item-label>
                      <q-item-label caption class="text-weight-bold">{{ this.hubungan_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Kecamatan</q-item-label>
                      <q-item-label caption class="text-weight-bold">{{ this.kecamatan_penduduk }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <q-separator />
              </q-tab-panel>

              <q-tab-panel name="informasi" class="col">
                <div class="row">
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Pengguna HP</q-item-label>
                      <q-item-label caption class="text-weight-bold">
                        <q-chip v-if="this.hp_penduduk === 'Ya'">
                          <q-avatar>
                            <q-icon size="xs" color="blue" name="verified" />
                          </q-avatar>
                          YA
                        </q-chip>
                        <q-chip v-else>
                          <q-avatar>
                            <q-icon size="xs" color="red" name="do_disturb" />
                          </q-avatar>
                          TIDAK
                        </q-chip>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Pemilik E-KTP</q-item-label>
                      <q-item-label caption class="text-weight-bold">
                        <q-chip v-if="this.ektp_penduduk === 'Ya'">
                          <q-avatar>
                            <q-icon size="xs" color="blue" name="verified" />
                          </q-avatar>
                          YA
                        </q-chip>
                        <q-chip v-else>
                          <q-avatar>
                            <q-icon size="xs" color="red" name="do_disturb" />
                          </q-avatar>
                          TIDAK
                        </q-chip>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Pimilik Akte</q-item-label>
                      <q-item-label caption class="text-weight-bold">
                        <q-chip v-if="this.akte_penduduk === 'Ya'">
                          <q-avatar>
                            <q-icon size="xs" color="blue" name="verified" />
                          </q-avatar>
                          YA
                        </q-chip>
                        <q-chip v-else>
                          <q-avatar>
                            <q-icon size="xs" color="red" name="do_disturb" />
                          </q-avatar>
                          TIDAK
                        </q-chip>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                  </q-item>
                  <q-item class="col">
                  </q-item>
                </div>
                <q-separator />
                <div class="row">
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Jenis Bantuan</q-item-label>
                      <q-item-label caption class="text-weight-bold">
                        <q-chip>
                          <q-avatar>
                            <q-icon size="xs" color="blue" name="handshake" />
                          </q-avatar>
                          {{ this.bantuan_penduduk }}
                        </q-chip>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Penyakit</q-item-label>
                      <q-item-label caption class="text-weight-bold">
                        <q-chip>
                          <q-avatar>
                            <q-icon size="xs" color="red" name="coronavirus" />
                          </q-avatar>
                          {{ this.penyakit_penduduk }}
                        </q-chip>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                  </q-item>
                  <q-item class="col">
                  </q-item>
                  <q-item class="col">
                  </q-item>
                </div>
                <q-separator />
                <div class="row">
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Penghasilan</q-item-label>
                      <q-item-label caption class="text-weight-bold">Rp. 420.000 s.d s/d Rp. 1.000.000</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Sumber Penerangan</q-item-label>
                      <q-item-label caption class="text-weight-bold">Listrik PLN dengan Meteran</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div class="row">
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Sumber Air Minum</q-item-label>
                      <q-item-label caption class="text-weight-bold">Sumur Terlindung</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Bahan Bakar Masak</q-item-label>
                      <q-item-label caption class="text-weight-bold">Gas Elpiji 3 Kg</q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <q-separator />
                <div class="row">
                  <q-item class="col">
                    <q-item-section>
                      <q-item-label caption>Fasilitas BAB</q-item-label>
                      <q-item-label caption class="text-weight-bold">Leher Angsa</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="col">
                  </q-item>
                </div>
              </q-tab-panel>

              <q-tab-panel name="lokasi" class="col">
                <q-card class="my-card" flat bordered>
                  <q-item>
                    <q-item-section avatar>
                      <q-icon name="scatter_plot" color="grey-9" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label class="text-weight-bold">Geospatial data penduduk</q-item-label>
                      <q-item-label caption>
                        Data sebaran penduduk Kabupaten Pesawaran.
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-card class="my-card" flat bordered>
                    <l-map :zoom="map.zoom" :center="map.center" :max-zoom="map.maxZoom" :min-zoom="map.minZoom"
                      style="height: 350px; width: 100%" v-if="map.loaded">
                      <l-tile-layer :url="map.tileLayer" :attribution="map.attribution" />
                      <l-marker v-for="(d, i) in maps" :key="i"
                        :lat-lng="[Number(d.location_latitude), Number(d.location_longitude)]">
                        <l-popup>
                          <q-card class="my-card" flat style="margin: -13px;">
                            <q-item>
                              <q-item-section avatar>
                                <q-avatar>
                                  <img src="images/icons/driver.png">
                                </q-avatar>
                              </q-item-section>

                              <q-item-section>
                                <q-item-label>{{ d.names }}</q-item-label>
                                <q-item-label caption class="text-weight-bold">
                                  {{ d.plats }}
                                </q-item-label>
                              </q-item-section>
                            </q-item>

                            <q-separator />

                            <q-card-section horizontal>
                              <q-card-section class="fit">
                                <q-icon name="phone" size="20px" color="blue-7" /> . {{ d.phones }}
                                <q-icon name="alt_route" size="20px" color="blue-7" /> . {{ d.trayeks }}
                              </q-card-section>

                              <q-separator vertical />

                              <q-card-section class="fit">
                                <q-icon name="local_shipping" size="20px" color="blue-7" /> . {{ d.types }}<br>
                                <q-icon name="turn_sharp_right" size="20px" color="blue-7" /> . {{ d.kilometerss }} Km<br>
                              </q-card-section>
                            </q-card-section>
                          </q-card>
                        </l-popup>
                        <l-icon :icon-size="[48, 48]" :icon-anchor="[16, 32]" :popup-anchor="[0, -32]"
                          :icon-url="d.icons" />
                      </l-marker>
                    </l-map>
                  </q-card>
                </q-card>
              </q-tab-panel>
            </q-tab-panels>
          </q-card-section>
        </q-card>
      </q-dialog>

      <div class="row items-start q-gutter-md q-mt-sm">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-subtitle2 text-indigo-10">Penderita Penyakit</div>
            <div class="text-caption text-grey">Data penderita penyakit</div>
            <Doughnut :data="dataDoughnat" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import Lottie from "./../components/lottie.vue"
import * as animationData from "./../../public/images/lottie/penyakit.json"

import { Bar, Doughnut, Line } from 'vue-chartjs'
import { Chart as ChartJS, PointElement, LineElement, Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(ArcElement, PointElement, LineElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import { LMap, LIcon, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import Vue3autocounter from 'vue3-autocounter'

import { pria, wanita } from '../helper/jenisKelamin'

export default {
  name: "PenyakitPage",
  components: {
    'vue3-autocounter': Vue3autocounter,
    lottie: Lottie,
    // Bar,
    Doughnut,
    // eslint-disable-next-line vue/no-reserved-component-names
    // Line,
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      penduduk: 0,
      penduduk_pria: 0,
      penduduk_wanita: 0,
      pria: pria,
      wanita: wanita,
      map: {
        loaded: false,
        tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: 'contributors <a href="">PSTI UBL</a>',
        center: L.latLng([-5.3754526, 105.2438549]),
        zoom: 12,
        minZoom: 7,
        maxZoom: 18,
        markerLatLng: [47.313220, -1.319482],
        icons: ''
      },
      maps: [],
      zoom: 2,

      confirmDialog: false,
      tab: 'penduduk',
      keluarga: [],
      kk_penduduk: null,
      namaLengkap_penduduk: null,
      NIK_penduduk: null,
      kecamatan_penduduk: null,
      desa_penduduk: null,
      dusun_penduduk: null,
      rt_penduduk: null,
      jenis_kelamin_penduduk: null,
      tgl_lahir_penduduk: null,
      hubungan_penduduk: null,
      status_pernikahan_penduduk: null,
      hp_penduduk: null,
      akte_penduduk: null,
      ektp_penduduk: null,
      bantuan_penduduk: null,
      penyakit_penduduk: null,
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
      columns: [
        { name: "NOMOR_KK", label: "NOMOR KK", align: "left", field: "NOMOR_KK", sortable: true },
        { name: "NIK", align: "left", label: "NIK", field: "NIK" },
        { name: "NAMA_LENGKAP", align: "left", label: "NAMA LENGKAP", field: "NAMA_LENGKAP" },
        { name: "KECAMATAN", align: "left", label: "KECAMATAN", field: "KECAMATAN" },
        { name: "DESA", align: "left", label: "DESA", field: "DESA" },
        { name: "JENIS_KELAMIN", align: "left", label: "JENIS KELAMIN", field: "JENIS_KELAMIN" },
        { name: "ACTION", align: "center", label: "", field: "ACTION" }
      ],
      pagination: {
        sortBy: 'desc',
        descending: false,
        rowsPerPage: 8
      },
      filter: '',
      rows: [],
      visibles: false,
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12]
          }
        ]
      },
      dataDoughnat: {
        labels: ['', '', '', ''],
        datasets: [
          {
            backgroundColor: ['#3A1078', '#4E31AA', '#2F58CD', '#3795BD'],
            data: [40, 20, 80, 10]
          }
        ]
      },
      dataLine: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      },
    }
  },
  mounted() {
    this.getCountPenduduk()
  },
  created() {
    this.getPenduduk()
    // this.getCountPendudukByPria()
    // this.getCountPendudukByWanita()
    this.map.loaded = true
  },
  methods: {
    async getCountPenduduk() {
      this.$axios.get('bantuan/getCountPenduduk')
        .finally()
        .then((res) => {
          if (!this.$parseResponse(res.data)) {
            const data = res.data.data
            var pria = 0
            var wanita = 0
            data.map(function (datas) {
              if (datas._id === "Laki-Laki") {
                pria = datas.myCount
              } else {
                wanita = datas.myCount
              }
            })
            this.penduduk_pria = Number(pria)
            this.penduduk_wanita = Number(wanita)
            this.penduduk = pria + wanita
          }
        })
        .catch((err) => console.log(err))
    },
    getPenduduk: async function () {
      await this.$axios.get('/bantuan/')
        .finally()
        .then((response) => {
          if (!this.$parseResponse(response.data)) {
            this.rows = response.data.data
          }
        })
        .catch((err) => console.log(err))
    },
    confirm(data) {
      this.confirmDialog = true
      this.kk_penduduk = data.NOMOR_KK
      this.namaLengkap_penduduk =data.NAMA_LENGKAP
      this.NIK_penduduk = data.NIK
      this.kecamatan_penduduk = data.KECAMATAN
      this.desa_penduduk = data.DESA
      this.dusun_penduduk = data.DUSUN
      this.rt_penduduk = data.RT
      this.jenis_kelamin_penduduk = data.JENIS_KELAMIN
      this.tgl_lahir_penduduk = data.TANGGAL_LAHIR
      this.hubungan_penduduk = data.HUBUNGAN_KEPALA_KELUARGA
      this.status_pernikahan_penduduk = data.STATUS_PERNIKAHAN
      this.hp_penduduk = data.HP
      this.ektp_penduduk = data.EKTP
      this.akte_penduduk = data.AKTE
      // this.$axios.get(`bantuan/getById/${this.kk_penduduk}`)
      //   .then((res) => {
      //     if (res.data.status) {
      //       this.kk_penduduk = res.data.data.NOMOR_KK
      //       this.namaLengkap_penduduk = res.data.data.NAMA_LENGKAP
      //       this.NIK_penduduk = res.data.data.NIK
      //       this.jenis_kelamin_penduduk = res.data.data.JENIS_KELAMIN
      //       this.tgl_lahir_penduduk = res.data.data.TANGGAL_LAHIR
      //       this.hubungan_penduduk = res.data.data.HUBUNGAN_KEPALA_KELUARGA
      //       this.kecamatan_penduduk = res.data.data.KECAMATAN
      //     }
      //   })
        // this.$axios.get(`/penduduk/getAllById/${this.kk_penduduk}`)
        //   .then((res) => {
        //     if (res.data.status) {
        //       console.log(res);
        //       res.data.data.forEach((dataX) => {
        //         dataX.names = dataX.NAMA_LENGKAP
        //         dataX.niks = dataX.NIK
        //         dataX.jenis_kelamins = dataX.JENIS_KELAMIN
        //         dataX.tgl_lahirs = dataX.TANGGAL_LAHIR
        //         dataX.hubungans = dataX.HUBUNGAN_KEPALA_KELUARGA
        //         this.keluarga.push(dataX)
        //       })
        //     }
        //   })
      //   this.$axios.get(`/bantuan/getById/${NOMOR_KK}`)
      //     .then((res) => {
      //       if (res.data.status) {
      //         this.bantuan_penduduk = res.data.data.BANTUAN
      //       }
      //     }),
      //   this.$axios.get(`/penyakit/getById/${NOMOR_KK}`)
      //     .then((res) => {
      //       if (res.data.status) {
      //         this.penyakit_penduduk = res.data.data.PENYAKIT
      //       }
      //     })
    },

  }
}
</script>