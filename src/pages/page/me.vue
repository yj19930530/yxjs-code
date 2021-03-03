<template>
  <div class="mine-container">
    <div class="top-user-info">
      <image class="mine-bg" src="../../static/me/mineBg.png"></image>
      <div class="user-info-center">
        <div class="mine-title" :style="[{ height: navHeight + 'px' }]">
          <text class="fz-17 fc-fff mr-b-10">个人中心</text>
        </div>
        <div class="fl-al mr-t-40">
          <image class="user-img" src="../../static/me/user.png"></image>
          <div class="right-user-name">
            <div class="fl-al">
              <text class="fz-17 fc-fff" v-if="isUser">198 2728 3736</text>
              <text class="fz-17 fc-fff" v-if="!isUser">登录</text>
              <div class="fz-10 flow-box fl-cen fc-fff mr-l-10" v-if="isUser">
                流量计费
              </div>
            </div>
            <text class="fz-14 fc-fff" v-if="isUser">一级消费商</text>
            <text class="fz-14 fc-fff" v-if="!isUser">登录获取更多信息</text>
          </div>
        </div>
        <div
          class="reward-box"
          :style="[{ top: navHeight + 'px' }]"
          v-if="isUser"
        >
          <image class="reward-style" src="../../static/me/reward.png"></image>
          <text class="fz-12 fc-fff">分享赚赏金</text>
          <button class="contact-btn" open-type="share">a</button>
        </div>
      </div>
    </div>
    <!-- 钱包 -->
    <div class="wallet-content" v-if="isUser">
      <image class="wallet-bg-img" src="../../static/me/moneyBg.png"></image>
      <div class="wallet-center">
        <div class="wallet-center-more fl-sb" @tap="toWallet">
          <div class="fl-al mr-l-38">
            <text class="fz-14 fc-fff">我的钱包</text>
            <image class="look-img" src="../../static/me/look.png"></image>
          </div>
          <div class="fl-al">
            <text class="fz-12 fc-fff">查看</text>
            <image class="more-style" src="../../static/home/more2.png"></image>
          </div>
        </div>
        <div class="fl-cen">
          <div class="money-info-box fl-ccc">
            <text class="fc-fff fz-28 fw-bold">200000.00</text>
            <text class="fz-14 fc-fff mr-t-8">充值余额（元）</text>
          </div>
          <div class="division-style"></div>
          <div class="money-info-box fl-ccc">
            <text class="fc-fff fz-28 fw-bold">900.00</text>
            <text class="fz-14 fc-fff mr-t-8">我的收益（元）</text>
          </div>
        </div>
      </div>
    </div>
    <!-- 订单 -->
    <div
      class="mine-order-content"
      :class="[isUser ? 'mine-order-margin' : 'mine-order-margin']"
    >
      <div class="fl-sb order-title-top">
        <text class="fz-14 mr-l-40">我的订单</text>
        <div class="fl-al mr-r-40">
          <text class="fz-12 fc-666">查看全部订单</text>
          <image
            class="order-more-img"
            src="../../static/home/more.png"
          ></image>
        </div>
      </div>
      <div class="fl-sb mr-t-40">
        <div class="fl-ccc mr-l-40" @tap="toMinePage('order')">
          <image class="order-row-icon" src="../../static/me/wait.png"></image>
          <text class="fz-12 fc-666 mr-t-20">待付款</text>
        </div>
        <div class="fl-ccc">
          <image class="order-row-icon" src="../../static/me/send.png"></image>
          <text class="fz-12 fc-666 mr-t-20">派单中</text>
        </div>
        <div class="fl-ccc">
          <image
            class="order-row-icon"
            src="../../static/me/install.png"
          ></image>
          <text class="fz-12 fc-666 mr-t-20">待安装</text>
        </div>
        <div class="fl-ccc mr-r-40">
          <image
            class="order-row-icon"
            src="../../static/me/finish.png"
          ></image>
          <text class="fz-12 fc-666 mr-t-20">已完成</text>
        </div>
      </div>
    </div>
    <!-- 功能 -->
    <div class="mine-func-list mr-t-30">
      <div class="func-item-box fl-sb" @tap="toMinePage('address')">
        <div class="fl-al">
          <image
            class="func-address-style"
            src="../../static/me/address.png"
          ></image>
          <text class="fz-14 mr-l-10">收货地址</text>
        </div>
        <image class="func-more" src="../../static/home/more.png"></image>
      </div>
      <div class="func-item-box fl-sb" @tap="toMinePage('code')">
        <div class="fl-al">
          <image class="func-code-style" src="../../static/me/code.png"></image>
          <text class="fz-14 mr-l-10">我的收款码</text>
        </div>
        <image class="func-more" src="../../static/home/more.png"></image>
      </div>
      <div class="func-item-box fl-sb" @tap="toMinePage('device')">
        <div class="fl-al">
          <image
            class="func-device-style"
            src="../../static/me/device.png"
          ></image>
          <text class="fz-14 mr-l-10">我的设备</text>
        </div>
        <image class="func-more" src="../../static/home/more.png"></image>
      </div>
      <div class="func-item-box fl-sb">
        <button class="contact-btn" open-type="contact">a</button>
        <div class="fl-al">
          <image
            class="func-server-style"
            src="../../static/me/server.png"
          ></image>
          <text class="fz-14 mr-l-10">客服中心</text>
        </div>
        <image class="func-more" src="../../static/home/more.png"></image>
      </div>
      <div class="func-item-box fl-sb">
        <button class="contact-btn" open-type="share">a</button>
        <div class="fl-al">
          <image
            class="func-share-style"
            src="../../static/me/share.png"
          ></image>
          <text class="fz-14 mr-l-10">分享</text>
        </div>
        <image class="func-more" src="../../static/home/more.png"></image>
      </div>
      <div class="func-item-box fl-sb" @tap="toMinePage('set')">
        <div class="fl-al">
          <image
            class="func-setting-style"
            src="../../static/me/setting.png"
          ></image>
          <text class="fz-14 mr-l-10">设置</text>
        </div>
        <image class="func-more" src="../../static/home/more.png"></image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUser: true,
    };
  },
  computed: {
    navHeight() {
      return getApp().globalData.navHeight;
    }, // 头部胶囊高度
  },
  methods: {
    toWallet() {
      uni.navigateTo({
        url: "/subPackages/mine/myWallet",
      });
    },
    toMinePage(type) {
      switch (type) {
        case "code": {
          uni.navigateTo({
            url: "/subPackages/mine/myCode",
          });
          break;
        }
        case "device": {
          uni.navigateTo({
            url: "/subPackages/mine/myDevice",
          });
          break;
        }
        case "set": {
          uni.navigateTo({
            url: "/subPackages/mine/setting",
          });
          break;
        }
        case "address": {
          uni.navigateTo({
            url: "/subPackages/shop/address",
          });
          break;
        }
        case "order": {
          uni.navigateTo({
            url: "/subPackages/mine/orderCenter",
          });
          break;
        }
        default: {
          break;
        }
      }
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
.mine-bg {
  width: 100%;
  height: 402rpx;
}
.top-user-info {
  z-index: -9;
  position: relative;
  width: 100%;
  height: 402rpx;
}
.user-info-center {
  position: relative;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 402rpx;
}
.mine-title {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
}
.user-img {
  margin-left: 64rpx;
  width: 116rpx;
  height: 116rpx;
}
.right-user-name {
  margin-left: 34rpx;
}
.flow-box {
  position: relative;
  margin-left: 6rpx;
  width: 80rpx;
  height: 28rpx;
  background-color: #f38304ff;
  border-radius: 4rpx;
}
.reward-style {
  margin-left: 18rpx;
  margin-right: 2rpx;
  width: 26rpx;
  height: 28rpx;
}
.reward-box {
  margin-top: 10rpx;
  position: absolute;
  right: 0;
  width: 198rpx;
  height: 44rpx;
  display: flex;
  align-items: center;
  border-radius: 22rpx 0 0 22rpx;
  background-color: rgba(255, 255, 255, 0.2);
}
.wallet-content {
  margin: -82rpx auto 0;
  position: relative;
  width: 710rpx;
  height: 266rpx;
}
.wallet-bg-img {
  width: 100%;
  height: 100%;
}
.wallet-center {
  position: absolute;
  left: 0;
  top: 0;
  width: 710rpx;
  height: 266rpx;
}
.more-style {
  margin-left: 8rpx;
  margin-right: 32rpx;
  width: 20rpx;
  height: 20rpx;
}
.look-img {
  margin-left: 12rpx;
  width: 33rpx;
  height: 32rpx;
}
.wallet-center-more {
  width: 100%;
  height: 81rpx;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.money-info-box {
  width: 354rpx;
  height: 182rpx;
}
.division-style {
  width: 2rpx;
  height: 44rpx;
  background-color: #fff;
}
.mine-order-margin {
  margin: 30rpx auto 0;
}
.mine-order-margin2 {
  margin: -82rpx auto 0;
}
.mine-order-content {
  margin: -82rpx auto 0;
  width: 710rpx;
  height: 274rpx;
  background-color: #fff;
  border-radius: 20rpx;
  box-shadow: 0 18rpx 44rpx 0 rgba(227, 227, 227, 0.5);
}
.mine-order-content2 {
  margin: 30rpx auto 0;
  width: 710rpx;
  height: 274rpx;
  background-color: #fff;
  border-radius: 20rpx;
  box-shadow: 0 18rpx 44rpx 0 rgba(227, 227, 227, 0.5);
}
.order-more-img {
  margin-left: 8rpx;
  width: 12rpx;
  height: 20rpx;
}
.order-title-top {
  width: 100%;
  height: 81rpx;
  border-bottom: 1px solid rgba(206, 188, 188, 0.3);
}
.order-row-icon {
  width: 52rpx;
  height: 48rpx;
}
.mine-func-list {
  padding: 0 32rpx;
}
.func-item-box {
  position: relative;
  height: 80rpx;
}
.func-address-style {
  width: 24rpx;
  height: 30rpx;
}
.func-more {
  width: 12rpx;
  height: 20rpx;
}
.func-code-style {
  width: 24rpx;
  height: 22rpx;
}
.func-device-style {
  width: 24rpx;
  height: 22rpx;
}
.func-server-style {
  width: 24rpx;
  height: 24rpx;
}
.func-share-style {
  width: 24rpx;
  height: 24rpx;
}
.func-setting-style {
  width: 24rpx;
  height: 24rpx;
}
</style>