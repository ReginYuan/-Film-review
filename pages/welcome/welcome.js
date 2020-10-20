// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  onTap: function () {
    console.log('事件触发执行回调函数');
    // navigateTo 父页面跳向子页面 但保留父页面
    //navigateTo 页面栈 只支持10个父子级页面
    // wx.navigateTo({
    //   url: '/pages/posts/posts',
    // })

    //平级跳转 跳转以后会销毁上一个页面
    wx.redirectTo({
      url: '/pages/posts/posts',
    })

  },


  onViewTap: function () {
    console.log("on  tap  View");
  },

  onTextTap: function () {
    console.log("on  tap  Text");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})