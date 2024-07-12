const year2022 = [
  {
    color: 'cyan',
    year: '2022.01.01',
    title: '東京大神宮',
    description: '初詣',
  },
  {
    color: 'green',
    year: '2022.01.29',
    title: '陶芸教室',
  },
  {
    color: 'pink',
    year: '2022.04.22',
    title: 'ひたちなか海浜公園',
  },
  {
    color: 'amber',
    year: '2022.05.07',
    title: '初めてのTokyoTower　RED',
  },
  {
    color: 'orange',
    year: '2022.05.22',
    title: 'Rakuten Stay at 河口湖'
  },
  {
    color: 'orange',
    year: '2022.06.11',
    title: '鎌倉紫陽花'
  },
  {
    color: 'orange',
    year: '2022.06.18',
    title: 'うんこ博士'
  },
  {
    color: 'orange',
    year: '2022.07.12',
    title: '沖縄'
  },
  {
    color: 'orange',
    year: '2022.09.18',
    title: '伊勢神宮'
  },
  {
    color: 'orange',
    year: '2022.10.27',
    title: 'DisneyLand'
  },
  {
    color: 'orange',
    year: '2022.11.19',
    title: '高尾山'
  },
  {
    color: 'orange',
    year: '2022.12.04',
    title: 'Maroon5　LIVE'
  },
]

const year2023 = [
  {
    color: 'cyan',
    year: '2023.01.15',
    title: '大分温泉',
  },
  {
    color: 'green',
    year: '2023.02.05',
    title: '札幌&小樽',
  },
  {
    color: 'green',
    year: '2023.02.18',
    title: '日常Cafe',
  },
  {
    color: 'green',
    year: '2023.05.14',
    title: '金沢',
  },
  {
    color: 'green',
    year: '2023.07.21',
    title: '青森',
  },
  {
    color: 'green',
    year: '2023.10.10',
    title: '鹿児島',
  },
  {
    color: 'green',
    year: '2023.11.06',
    title: 'Coldplay LIVE',
  },
  {
    color: 'green',
    year: '2023.12.04',
    title: '旗の台から暮らし',
  },
]

const year2024 = [
  {
    color: 'cyan',
    year: '2024.01.31',
    title: 'Ed Sheeran LIVE',
  },
  {
    color: 'green',
    year: '2024.07.03',
    title: '府中花火大会',
  },
  {
    color: 'green',
    year: '2024.07.06',
    title: '横瀬ホタル',
  },
  {
    color: 'green',
    year: 'Now',
  },
]

const daysTo2022 = Math.floor((new Date().getTime() - new Date('2022/01/01').getTime()) / (1000 * 60 * 60 * 24));

const topPage = [
  'Hello！サイです',
  `一緒にいてもう ^1000 ${daysTo2022}日です`,
  '君の笑顔は、私の一日を明るくします',
  `これからも一緒に過ごす日々を楽しみにしています`,
  '君と過ごす時間は、いつも特別です',
  `君との毎日は、私の宝物です`,
  '君がいるだけで、私の世界は輝いて見えます',
  `これからも君を幸せにするために、全力を尽くします`,
  '君と一緒にいることが、私の幸せです',
  `君と過ごす未来を想像すると、ワクワクします`,
  'Please click the button here'
]

export { year2022, year2023, year2024, topPage, daysTo2022 }