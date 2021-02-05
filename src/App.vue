<script>
export default {
  globalData: {
    navHeight: 0, // 导航高度
    navTop: 0, // 胶囊按钮与顶部的距离
    windowHeight: 0, // 视口高度
    pingWidth: 0, // 屏幕宽度
    pingHeight: 0, // 屏幕高度
    model: "",
  },
  onLaunch: function () {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    const { windowWidth, windowHeight } = uni.getSystemInfoSync();
    this.globalData.pingWidth = windowWidth;
    this.globalData.pingHeight = windowHeight;
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.model = res.model;
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.height, //胶囊按钮与顶部的距离
          navHeight =
            statusBarHeight +
            menuButtonObject.height +
            (menuButtonObject.top - statusBarHeight) * 2; //导航高度
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
      },
      fail(err) {
        console.log(err);
      },
    });
  },
  onShow: function () {},
  onHide: function () {},
};
</script>

<style>
/*每个页面公共css */
@import "./styles/common.css";
@import "./styles/iconfont/iconfont.css";
page {
  height: 100%;
  color: #333333ff;
  background-color: #f8f8f8;
}
</style>
