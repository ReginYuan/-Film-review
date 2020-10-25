// pages/posts/posts.js
// node.js 只能使用相对路径
// var  postData=require('../../data/data');

// es6导入方式
import {
  postList
} from '../../data/data';



Page({

  /**
   * 页面的初始数据
   */
  data: {


  },

  /**
   * 生命周期函数--监听页面加载
   * 钩子函数 hook  function   
   * 程序运行就会监听此方法内的变化
   */
  async onLoad(options) {

    this.setData({
      // 将数组包装成js对象
      postList
    });


  },

  // 点击进入页面详情功能
  onGoToDetail(event) {
    // event事件对象
    // 页面与页面数据通信


    // 获取点击事件对象数据的id
    const pid = event.currentTarget.dataset.postId;
  
    wx.navigateTo({
      // 跳转页面并传递页面id
      url: '/pages/post-detail/post-detail?pid=' + pid,
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
   * 条件触发
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