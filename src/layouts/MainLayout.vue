<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-indigo-10">
      <q-toolbar class="q-pt-sm">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-space />

        <div class="row q-gutter-md">
          <q-btn-dropdown
          flat
          size="md"
          icon="account_circle"
          label="Administrator"
        >
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-sm">Settings</div>
              <q-btn
                color="primary"
                outline
                label="Profile"
                :to="{ name: 'profile' }"
                size="sm"
                v-close-popup
              />
            </div>

            <q-separator vertical inset class="q-mx-lg" />

            <div class="column items-center">
              <q-avatar size="72px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs text-weight-bold">
                Gunawan
              </div>

              <q-btn
                outline
                color="primary"
                label="Logout"
                @click="logout()"
                push
                size="sm"
                v-close-popup
              />
            </div>
          </div>
        </q-btn-dropdown>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
    >
      <q-card class="my-card q-ma-sm flex text-indigo-10 text-subtitle2" style="height:130px; background-image: url('images/banner/background.jpg'); background-repeat: no-repeat; background-size: cover;">
        <q-item>
          <q-item-section avatar>
            <img src="images/icons/icons_capil.svg" style="width: 40px;">
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-white">DISDUKCAPIL</q-item-label>
            <q-badge color="white" class="q-mt-xs" style="width: 100px;">
              <q-item-label caption class="text-indigo-10">Administrator</q-item-label>
            </q-badge>
          </q-item-section>
        </q-item>
      </q-card>

      <q-card class="my-card q-mx-sm q-mt-md" style="height:auto">
        <q-list>
          <q-item
            active-class="tab-active"
            exact
            class="navigation-item text-indigo-10"
            clickable
            :to="{ name: 'dashboard' }"
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="space_dashboard" />
            </q-item-section>
            <q-item-section>
              Dashboard
            </q-item-section>
          </q-item>

          <q-separator />

          <q-expansion-item
            class="navigation-item text-indigo-10"
            icon="settings"
            label="Pengaturan"
          >
            <q-item
              active-class="tab-active"
              class="navigation-item text-indigo-10"
              exact
              clickable
              :to="{ name: 'export' }"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="file_download" />
              </q-item-section>
              <q-item-section>
                Export Data
              </q-item-section>
            </q-item>
            <q-item
              active-class="tab-active"
              class="navigation-item text-indigo-10"
              exact
              :to="{ name: 'import' }"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="file_upload" />
              </q-item-section>
              <q-item-section>
                Import Data
              </q-item-section>
            </q-item>
            <q-item
              active-class="tab-active"
              class="navigation-item text-indigo-10"
              exact
              :to="{ name: 'tambahPengguna' }"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-icon name="insert_chart_outlined" />
              </q-item-section>
              <q-item-section>
                Tambah Pengguna
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-item
            active-class="tab-active"
            class="navigation-item text-indigo-10"
            exact
            :to="{ name: 'bantuan' }"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>
            <q-item-section>
              Bantuan
            </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            class="navigation-item text-indigo-10"
            exact
            :to="{ name: 'penyakit' }"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="coronavirus" />
            </q-item-section>
            <q-item-section>
              Penyakit
            </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            class="navigation-item text-indigo-10"
            exact
            :to="{ name: 'profile' }"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="manage_accounts" />
            </q-item-section>
            <q-item-section>
              Profile
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>

      <q-card class="my-card q-ma-sm q-mt-md flex text-indigo-10 text-subtitle2" style="height:70px; background-repeat: no-repeat; background-size: cover;">
        <q-item>
          <q-item-section avatar>
            <img src="images/icons/icons_pswr.png" style="width: 30px;">
          </q-item-section>

          <q-item-section>
            <q-item-label>PESAWARAN</q-item-label>
            <q-item-label caption class="text-indigo-10">© Copyright 2023</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout() {
      this.$router.push({ name: "login" });
    },
  },
}
</script>
