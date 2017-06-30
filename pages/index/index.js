//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '点击这里显示Toast',
    userInfo: {},
    opacity: 0,
    message: ''
  },
  /**
  * 显示Toast
  * message， 显示你要提示的内容
 **/
  drawToast(message) {
    var that = this
    this.setData({
      opacity: 0.7,
      message: message,
    })
    setTimeout(function () {
      that.setData({
        opacity: 0,
      })
    }, 1000)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindToast(){
    this.drawToast('这里显示你要提示的内容')
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
