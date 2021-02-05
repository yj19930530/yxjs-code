<template>
  <view class="login-container fl-ccc">
    <image class="login-back-top" src="../static/login-top.png"></image>
    <image class="login-logo" src="../static/logo.png"></image>
    <button
      class="login-btn-style fl-cen fz-17 fc-fff"
      open-type="getUserInfo"
      @getuserinfo="getUserData"
    >
      微信授权登录
    </button>
    <view class="fl-ccc login-top-content">
      <text class="fz-12 fc-999">登录即代表您同意我们的服务协议和隐私协议</text>
      <image class="login-back-bottom" src="../static/login-bottom.png"></image>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getUserData(data) {
      if (!data.detail.userInfo) return;
      // const _this = this;
      const userInfo = data.detail.userInfo;
      uni.getProvider({
        service: "oauth",
        success: function (res) {
          if (~res.provider.indexOf("weixin")) {
            uni.login({
              provider: "weixin",
              success: function (loginData) {
                console.log(loginData.code);
                console.log(userInfo);
                uni.switchTab({
                  url: "/pages/page/home",
                });
              },
            });
          }
        },
      });
    },
  },
};
</script>
<style>
page {
  background-color: #fff;
}
</style>
<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-logo {
  margin-top: -100px;
  width: 330rpx;
  height: 344rpx;
}
.login-btn-style {
  margin-top: 140rpx;
  width: 682rpx;
  height: 96rpx;
  background-color: #4bbcfbff;
  border: none;
  border-radius: 20rpx;
}
.login-top-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.login-back-top {
  position: absolute;
  top: 0;
  right: 0;
  width: 420rpx;
  height: 222rpx;
}
.login-back-bottom {
  width: 100%;
  height: 182rpx;
}
</style>