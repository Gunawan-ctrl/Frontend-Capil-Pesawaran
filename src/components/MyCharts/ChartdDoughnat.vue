<template>
	<q-card>
    <q-card-section>
      <div class="text-subtitle2 text-indigo-10">Penderita Penyakit</div>
      <div class="text-caption text-grey">Data penderita penyakit</div>
      <Doughnut :data="dataDoughnat" />
    </q-card-section>
  </q-card>

</template>

<script>
import { Doughnut } from 'vue-chartjs'

export default ({
	components: {
		Doughnut,
	},
	props: {
    label : {
      type: Array,
      default: null
    },
		jumlah:{
			type: Array,
			default: null
		},
    color:{
			type: Array,
			default: null
		},
	},
	data() {
		return {
			dataDoughnat: {
        labels: this.label,
        datasets: [
          {
            backgroundColor: this.color,
            data: this.jumlah
          }
        ]
      },
		}
	},
})

</script>