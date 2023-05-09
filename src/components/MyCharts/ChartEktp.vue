<template>
	<q-card :bordered="false" class="dashboard-bar-chart">
		<q-card-section>
			<div class="text-subtitle2 text-indigo-10">Data EKTP</div>
			<div class="text-caption text-grey">Informasi data yang mempunyai ektp</div>
			<Bar :data="chartEktp" :height="300" />
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
		label : {
      type: Array,
      default: null
    },
		jumlahKtp:{
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
			chartEktp: {
        labels: this.label,
        datasets: [
          {
            label: 'Data Ektp',
            backgroundColor: this.color,
						borderRadius: 6,
            data: this.jumlahKtp,
						maxBarThickness: 30,
          }
        ]
      },
		}
	}
})

</script>