import { boot } from 'quasar/wrappers'

const formatPrice = (value) => {
  const val = (value / 1).toFixed(0).replace('.', '.')
  return 'Rp. ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',-'
}

const mctToTime = (mct) => {
  const jam = Math.floor(mct / 3600)
  mct %= 3600
  const menit = Math.floor(mct / 60)
  return `${jam < 10 ? `0${jam}` : jam}:${menit < 10 ? `0${menit}` : menit}`
}

const listMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'Desember']

const parseDate = (date) => {
  let respon
  if (date === '' || date === null || date === undefined) {
    respon = {
      date: '-',
      dateLocal: '-',
      fullDate: '-',
      timeStap: '-'
    }
  } else {
    const newDate = new Date(date)
    const month = '' + (newDate.getMonth() + 1)
    // let listMonth = listMonth
    const tgl = '' + (newDate.getDate())
    const year = newDate.getFullYear()
    const full = tgl + ' ' + listMonth[month - 1] + ' ' + year
    respon = {
      date: [year, month < 10 ? 0 + '' + (month) : (month), tgl < 10 ? 0 + '' + tgl : tgl].join('/') + '_' + newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds(),
      dateLocal: [year, month < 10 ? 0 + '' + (month) : (month), tgl < 10 ? 0 + '' + tgl : tgl].join('/'),
      fullDate: full,
      timeStap: `${full} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
    }
  }
  return respon
}

export default boot(async ({ app }) => {
  app.config.globalProperties.$formatPrice = formatPrice
  app.config.globalProperties.$mctToTime = mctToTime
  app.config.globalProperties.$parseDate = parseDate
})
