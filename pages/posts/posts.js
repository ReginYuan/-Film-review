// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 初始值  所有页面所有要被绑定的变量都要在这里初始化
    title: "《金刚川》志愿军没有退路",
    flag:true
  },

  /**
   * 生命周期函数--监听页面加载
   * 钩子函数 hook  function   
   * 程序运行就会监听此方法内的变化
   */
  onLoad: function (options) {

    //要传输的数据 
    var content = {
      authorImgsSrc: '/images/avatar/1.png',
      date: 'Nov 20 2020',
      title: "《金刚川》志愿军没有退路",
      jianjieimgsrc: "/images/jingangchuan.png",
      jianjiecontent: "以三个视点讲述一个故事：工兵桥修好又被炸毁再度修好……一个屹立不倒、令敌人费解的战争奇迹",
      dataNum:{
        collection:92,
        reading: 182,
      },
       
  
      detail: "",
      dateTime: '24小时前',
      headImgSrc: '',
      author: '',
      avatar: "",
      postId: 3,
      a:2,
      b:3
    }
    this.setData(content);
    this.setData({
      sum:content.a+content.b
    });

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