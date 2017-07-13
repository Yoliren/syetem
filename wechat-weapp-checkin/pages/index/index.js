//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎进入',
    userInfo: {}
  },
  //事件处理函数
  checkin:function() {
    wx.navigateTo({
         url: '../checkin/checkin'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
