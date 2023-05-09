<template>
	<q-card>
    <q-card-section>
      <div class="text-subtitle2 text-indigo-10">Chart Data Line</div>
      <div class="text-caption text-grey">Data Line Teraktreditasi</div>
      <Line :data="chartLine" :height="138" />
    </q-card-section>
  </q-card>

</template>

<script>
import { Line } from 'vue-chartjs'

export default ({
	components: {
		// eslint-disable-next-line vue/no-reserved-component-names
		Line,
	},
	data() {
		return {
			chartLine: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: ['Data One'],
            backgroundColor: '#0003C2',
            data: [40, 39, 10, 40, 39, 80, 40],
          }
        ]
      },
		}
	}
})

</script>