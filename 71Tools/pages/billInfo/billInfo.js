const app = getApp()
Page({
  data: {

    userInfo: {},

  },
  onLoad: function (options) {
    
    var that = this;
    that.setData({

      userInfo: app.globalData.userInfo

    })
    console.log(that.data.userInfo)
  }
})