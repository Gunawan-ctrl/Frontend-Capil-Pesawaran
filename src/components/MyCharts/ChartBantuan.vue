<template>
	<q-card :bordered="false" class="dashboard-bar-chart">
		<q-card-section>
			<div class="text-subtitle2 text-indigo-10">Data Bantuan</div>
			<div class="text-caption text-grey">Informasi data Bantuan</div>
			<Doughnut :data="chartBantuan" :height="300" />
		</q-card-section>
	</q-card>

</template>

<script>
import { Doughnut } from 'vue-chartjs'

export default ({
	components: {
		Doughnut
	},
	props: {
		label : {
      type: Array,
      default: null
    },
		jumlahBantuan:{
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
			chartBantuan: {
        labels: this.label,
        datasets: [
          {
            label: 'Data Bantuan',
            backgroundColor: this.color,
						borderRadius: 6,
            data: this.jumlahBantuan,
						maxBarThickness: 30,
          }
        ]
      },
		}
	}
})

</script>