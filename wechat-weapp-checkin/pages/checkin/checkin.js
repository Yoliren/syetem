
var app = getApp()
Page({
  data:{
    modalHidden:true,
    message:'22',
    userInfo:{}
  },
 checkin:function(e) {
    var that = this
    wx.getLocation({
      success: function(res) {
        app.getUserInfo(function (userInfo) {
          that.setData({
          modalHidden: false,
          message: userInfo.nickName + ' ,签到成功.' + ' 经度：' + res.latitude + '  ,纬度：' + res.longitude + ' ,精确度：' + res.accuracy ,
          }),
            wx.request({
            url: 'https://lanhai.saltedfisher.cn/index.php', //你的后台地址
              data: {
                z: userInfo.nickName,
                x: res.latitude,
                y: res.longitude,
                w: res.accuracy,
              },
              header: {
                'content-type': 'application/json'
              },
              success: function () {
                console.log('OK')
              },
              fail: function () {
                console.log("NO")
              }
            })
        })
      }
    })
 },
modalChange: function(e) {
    this.setData({
      modalHidden: true
    })
  },
  wait: function (a) {
    var that = this
    wx.getLocation({
      success: function (res) {
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },
 today: function(b) {
   wx.navigateTo({
     url: '../logs/logs'
   })
 },
 warn: function (b) {
   wx.navigateTo({
     url: '../import/import'
   })
 }
})