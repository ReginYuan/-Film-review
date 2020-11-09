// pages/post-detail/post-detail.js
// es6导入方式
import {
  postList
} from '../../data/data';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData: {}, //保存文章数据
    _pid: null, //文章id
    collected: false, //文章状态
    _postsCollected: {} //所有文章状态缓存
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 根据传过来的pid查询文章数据    
    const postData = postList[options.pid];
    // 保存文章id
    this.data._pid = options.pid;
    // 获取文章收藏状态
    const postsCollected = wx.getStorageSync('posts_collected');
    // 存储文章状态缓存
    this.data._postsCollected = postsCollected;
    // 解析文章状态
    let collected = postsCollected[this.data._pid];

    // 判断文章是否被收藏
    if (collected === undefined) {
      // 如果undefined  说明文章从未被收藏过
      collected = false
    }
    this.setData({
      postData,
      collected
    })
  },
  // 分享功能
  onShare(event) {
    wx.showActionSheet({
      itemList: ['分享到QQ','分享到微信','分享到朋友圈'],
    })
  },
  // 图片收藏的功能
  onCollect(event) {
    //假设文章未收藏
    //那篇文章被收藏
    // 数据结构要支持多篇文章是否被收藏
    let postsCollected = this.data._postsCollected;
    // 存储文章id并赋值
    postsCollected[this.data._pid] = !this.data.collected;

    this.setData({
      // 设置文章收藏标签的切换
      collected: !this.data.collected
    })
    // 同步缓存缓存
    wx.setStorageSync("posts_collected", postsCollected);
    // 轻提示
    wx.showToast({
      title: this.data.collected ? "收藏成功" : '取消收藏',
      duration: 1000
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