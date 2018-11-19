Page({
  data: {
    subway: '',
  },
  onLoad({ subway }) {
    wx.showLoading({
      title: '正在加载...',
    })
    this.setData({
      subway,
    })
    if (subway) {
      wx.setNavigationBarTitle({
        title: `${subway}号线`
      })
    }
  },
  loadHandler() {
    wx.hideLoading()
  },
  errorHandler() {
    wx.hideLoading();
    wx.showModal({
      title: '加载出错',
      confirmText: '返回首页',
      showCancel: false,
      success: () => {
        this.navToHome()
      }
    })
    throw Error(`图片加载失败${this.data.subway}`)
  },
  navToHome() {
    wx.reLaunch({
      url: '/page/index/index'
    })
  },
  onShareAppMessage: function() {
    return {
      title: `这是地铁${this.data.subway}号线的洗手间一览`,
      path: `/page/detail/index?subway=${this.data.subway}`,
    }
  }
})

