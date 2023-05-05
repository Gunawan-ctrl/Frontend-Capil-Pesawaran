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
		totalPenyakitA:{
			type: Number,
			default: 0
		},
		totalPenyakitB: {
			type: Number,
			default: 0
		},
		totalPenyakitC:{
			type: Number,
			default: 0
		},
		totalPenyakitD: {
			type: Number,
			default: 0
		},
	},
	data() {
		return {
			dataDoughnat: {
        labels: ['Penyakit A', 'Penyakit B', 'Penyakit C', 'Penyakit D'],
        datasets: [
          {
            backgroundColor: ['#3A1078', '#4E31AA', '#2F58CD', '#3795BD'],
            data: [40, 20, 80, 10]
            // data: [this.totalPenyakitA, this.totalPenyakitB, this.totalPenyakitC, this.totalPenyakitD]
          }
        ]
      },
		}
	}
})

</script>