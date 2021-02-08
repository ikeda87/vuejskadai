new Vue({
  el: '#app',
  data: {
    name: 'A田太郎',
    course: 'Webエンジニアコース',
    acceptancePeriod: '2020年11月期',
    defaultLastId: 3,
    students: [
      { id: 1, name: '山田次郎', course: '機械学習コース', acceptancePeriod: '2019年09月期' },
      { id: 2, name: '山田花子', course: 'Webエンジニアコース', acceptancePeriod: '2020年11月期' },
      { id: 3, name: '山田一郎', course: '機械学習コース', acceptancePeriod: '2021年01月期' }
    ]
  },
})
