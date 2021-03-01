<template>
  <div class="wallet-container">
    <div class="wallet-money">
      <image
        class="walletbg2-style"
        src="../../static/me/walletbg2.png"
      ></image>
      <div class="wallet-money-center">
        <div class="fl-al">
          <text class="fz-14 fc-fff">我的余额</text>
          <image
            class="money-look-check mr-l-10"
            src="../../static/me/close.png"
          ></image>
        </div>
        <div class="fl-sb mr-t-20">
          <text class="fz-28 fc-fff fw-bold">*****</text>
          <div class="fz-14 fc-fff recharge-btn fl-cen" @tap="toRecharge">
            充值
          </div>
        </div>
      </div>
    </div>
    <div class="money-profit">
      <image class="profit-bg-style" src="../../static/me/moneyBg.png"></image>
      <div class="profit-center">
        <div class="fl-al">
          <text class="fz-14 fc-fff">我的收益</text>
          <image
            class="money-look-check2 mr-l-10"
            src="../../static/me/look.png"
          ></image>
        </div>
        <div class="fl-sb mr-t-20">
          <div>
            <text class="fz-14 fc-fff fw-bold">¥</text>
            <text class="fz-28 fc-fff fw-bold">900.00</text>
          </div>
          <div class="fz-14 fc-fff recharge-btn fl-cen" @tap="toProfit">
            提现
          </div>
        </div>
        <div class="fl-al mr-t-20">
          <text class="fz-14 fc-fff">昨日收益 +98.00</text>
          <text class="fz-14 fc-fff mr-l-112">总收益 +18898.00</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toRecharge() {
      uni.navigateTo({
        url: "/subPackages/mine/recharge",
      });
    },
    toProfit() {
      uni.navigateTo({
        url: "/subPackages/mine/withdrawal",
      });
    },
  },
};
</script>
<style>
page {
  background-color: #f9fafbff;
}
</style>
<style scoped>
.walletbg2-style {
  width: 100%;
  height: 100%;
}
.wallet-money {
  position: relative;
  margin: 20rpx auto 0;
  width: 710rpx;
  height: 227rpx;
}
.wallet-money-center {
  position: absolute;
  left: 0;
  top: 0;
  width: 594rpx;
  padding: 30rpx 50rpx 0 66rpx;
}
.money-look-check {
  width: 40rpx;
  height: 20rpx;
}
.money-look-check2 {
  width: 33rpx;
  height: 32rpx;
}
.recharge-btn {
  width: 134rpx;
  height: 50rpx;
  border-radius: 25rpx 25rpx;
  background-color: rgba(255, 255, 255, 0.3);
}
.money-profit {
  position: relative;
  margin: 20rpx auto 0;
  width: 710rpx;
  height: 266rpx;
}
.profit-bg-style {
  width: 100%;
  height: 100%;
}
.profit-center {
  position: absolute;
  left: 0;
  top: 0;
  width: 594rpx;
  padding: 30rpx 50rpx 0 66rpx;
}
</style>