// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 初始值  所有页面所有要被绑定的变量都要在这里初始化
    title: "《金刚川》志愿军没有退路"
  },

  /**
   * 生命周期函数--监听页面加载
   * 钩子函数 hook  function   
   * 程序运行就会监听此方法内的变化
   */
  onLoad: function (options) {

    // setData接受的是一个javascript对象
    // setData会将要修改或者增加的数据 放入data:{}中
    // 有创建和更新的作用
    this.setData({
      title:"2021"
    })

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