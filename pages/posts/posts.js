// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "《金刚川》志愿军没有退路"
  },

  /**
   * 生命周期函数--监听页面加载
   * 钩子函数 hook  function   
   * 程序运行就会监听此方法内的变化
   */
  onLoad: function (options) {
    console.log("袁修飞");

    // DOM优先  获取属性id以后才可以改变标签的值和显示
    // a = "金剛川";
    // var d = document.getElementById('html属性id');
    // d.innerHTML = a;

    //数据优先 ->数据绑定  可以随意在页面任何一个地方显示{{d}}  数据驱动


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