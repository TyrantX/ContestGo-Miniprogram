//获取应用实例
const app = getApp();
const username = app.globalData.username;

Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentTab: 0,
    username: username,
  },
  //事件处理函数
  changeTab(e) {
    const that = this;
    that.setData({
      currentTab: e.detail.current
    })
  },
  checkCurrentTab(e) {
    const that = this;
    if (that.data.checkCurrentTab == e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  teamRecruit(e) {
    wx.navigateTo({
      url: '../teamRecruit/teamRecruit',
    })
  },
  teamInfo(e) {
    wx.navigateTo({
      url: '../teamInfo/teamInfo',
    })
  }
})