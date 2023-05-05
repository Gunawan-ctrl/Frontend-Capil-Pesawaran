<template>
	<q-card :bordered="false" class="dashboard-bar-chart">
		<q-card-section>
			<div class="text-subtitle2 text-indigo-10">Data AKTE</div>
			<div class="text-caption text-grey">Informasi data yang mempunyai akte kelahiran</div>
			<Bar :data="chartAkte" :height="140" />
		</q-card-section>
	</q-card>

</template>

<script>
import { Bar } from 'vue-chartjs'

export default ({
	components: {
		Bar,
	},
	props: {
		totalAkteYa:{
			type: Number,
			default: 0
		},
		totalAkteTidak: {
			type: Number,
			default: 0
		},
		totalEktpYa:{
			type: Number,
			default: 0
		},
		totalEktpTidak: {
			type: Number,
			default: 0
		},
	},
	data() {
		return {
			chartAkte: {
        labels: ['Mempunyai Akte', 'Tidak mempunyai Akte', 'Mempunyai ektp', 'Tidak mempunyai ektp'],
        datasets: [
          {
            // label: 'Data Akte',
            backgroundColor: ['#304FFE', '#ef6445', '#304FFE', '#ef6445'],
						borderRadius: 6,
            // data: [90, 50],
            data: [this.totalAkteYa, this.totalAkteTidak, this.totalEktpYa, this.totalEktpTidak],
						maxBarThickness: 30,
          }
        ]
      },
		}
	}
})

</script>