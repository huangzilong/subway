Page({
  data: {
    subways: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16],
  },
  onShareAppMessage: function() {
    return {
      title: '发现了一个很实用的小公举',
      path: '/page/index/index'
    }
  }
})

