<template>
  <q-layout>
    <q-page-container>
      <q-page class="row items-center justify-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '100%' } : { width: '75%' }"
        >
          <div class="row q-col-gutter-md items-center">
            <div
              class="col-md-6"
              v-if="$q.screen.lg || $q.screen.xl || $q.screen.md"
            >
              <div>
                <lottie :options="defaultOptions" />
              </div>
            </div>
            <div class="row col-xs-12 col-md-6 justify-center">
              <div class="text-center q-mb-lg">
                <div class="text-h6 q-pt-md text-indigo-10 text-weight-bold">
                  DISDUKCAPIL APPS
                </div>
                <div class="text-caption text-grey-7">
                  Silahkan masukan email dan password yang terdaftar
                </div>
                <div
                  class="text-subtitle2 q-mt-lg text-left"
                  style="font-size: 20px"
                >
                  Sign In
                </div>
                <q-form
                  @submit="onSubmit"
                  @reset="onReset"
                  class="q-gutter-md q-mt-md"
                >
                  <q-input
                    dense
                    v-model="form.email"
                    label="Email"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Lengkapin data email nya',
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon size="20px" name="alternate_email" />
                    </template>
                  </q-input>

                  <q-input
                    dense
                    label="Password"
                    v-model="form.password"
                    :type="isPwd ? 'password' : 'text'"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Lengkapin data password nya',
                    ]"
                    counter
                  >
                    <template v-slot:prepend>
                      <q-icon size="20px" name="gpp_good" />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>

                  <div class="text-subtitle2 q-mt-lg" align="right">
                    <q-btn
                      flat
                      unelevated
                      class="q-mr-md"
                      label="Reset"
                      type="reset"
                      color="grey"
                    />
                    <q-btn
                      label="Sign In"
                      type="submit"
                      color="indigo-10"
                      style="width: 150px"
                    />
                  </div>
                </q-form>
              </div>
            </div>
          </div>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import Lottie from "../../components/lottie.vue";
import * as animationData from "../../assets/sign.json";
export default {
  name: "LoginPage",
  components: { Lottie },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
      isPwd: true,
      visible: false,
      form: {
        email: "admin@gmail.com",
        password: 1234,
        role: null,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "dashboard" });
      this.$successNotif("selamat berhasil login", "positive");
    },
    onReset() {
      this.form.email = null;
      this.form.password = null;
    },
  },
};
</script>