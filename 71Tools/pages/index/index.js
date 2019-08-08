//index.js
//获取应用实例
const app = getApp()
var util1 = require('../../utils/util1.js');
var util2 = require('../../utils/util2.js');

Page({
  data: {
    date1: util1.formatTime(new Date()),
    date2: util2.formatTime(new Date()),
    billList: [{
      id: '12121',
      labelCn: '测试',
      price: '测试价格',
      category: '测试'
    }, {
      id: '110',
      labelCn: '测试2',
      price: '测试价格2',
      category: '测试2'
    }, {
      id: '1120',
      labelCn: '测试3',
      price: '测试价格3',
      category: '测试3'
    }]
  },
  bindDateChange1: function(e) {
    console.log(e.detail.value < this.data.date2);
    if (e.detail.value < this.data.date2){
      this.setData({
        date1: e.detail.value
      })
      //每次变动时间重新刷新账单流水列表
    }
  },
  bindDateChange2: function (e) {
    console.log(e.detail.value > this.data.date1);
    if (e.detail.value > this.data.date1){
      this.setData({
        date2: e.detail.value
      })
    }
  //每次变动时间重新刷新账单流水列表
  },
  
  delBill: function(e){
    var index = e.currentTarget.dataset.index;
    var that = this
    var arr = that.data.billList;
    wx.showModal({
      title: '确认删除',
      content: '即将删除内容为[' + arr[index].labelCn + '],金额为[' + arr[index].price+']的数据',
      confirmText: "确认",
      cancelText: "再想想",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击确认,准备删除记录')
          
          arr.splice(index, 1);
          that.setData({
            billList: arr
          })
        } else {
          console.log('用户点击取消,再想想')
        }
      }
    });
  },

  changeBill: function (e) {
    var id = e.currentTarget.id;
    console.log('选择修改id为['+id+']的数据')
    wx.navigateTo({
      url: '../billInfo/billInfo?id=' + id,
    })
  }
})
