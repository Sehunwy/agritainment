//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movies:
      [{ url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }],
    tags: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    materials: [1, 1, 1, 1],
  },
  move_to_explore: function() {
    wx.navigateTo({
      url: '../explore/explore'
    })
  },
  watchAll: function() {
    wx.navigateTo({
      url: '../show/show'
    })

  }
})