<template>
  <div class="recharge-container">
    <div class="zhanwei"></div>
    <div class="recharge-user-info">
      <image
        class="rechargebg-style"
        src="../../static/me/rechargebg.png"
      ></image>
      <div class="rechargebg-center">
        <image
          class="user-header-img mr-t-30"
          src="../../static/me/user.png"
        ></image>
        <div class="mr-l-30 mr-t-50">
          <text class="fz-16">198 2728 3736</text>
          <div>
            <text class="fz-14">余额：</text>
            <text class="fz-30 fw-bold">20</text>
            <text class="fz-14">元</text>
          </div>
        </div>
      </div>
      <div class="recharge-recode fz-12 fc-fff fl-cen" @tap="toRecode">
        充值记录
      </div>
    </div>
    <div class="recharge-money">
      <text class="fz-15">充值金额</text>
      <div class="recharge-row fl-al mr-t-40">
        <div class="fz-20 fc-fff fw-bold mr-l-66 price-width">498元</div>
        <text class="fz-12 fc-fff">赠送青岛啤酒桶装（3L)</text>
      </div>
      <div class="recharge-row fl-al mr-t-20">
        <div class="fz-20 fc-fff fw-bold mr-l-66 price-width">998元</div>
        <text class="fz-12 fc-fff">赠送大凉山生态桑葚果酒（3L)</text>
      </div>
      <div class="recharge-row fl-al mr-t-20 mr-b-30">
        <div class="fz-20 fc-fff fw-bold mr-l-66 price-width">1998元</div>
        <text class="fz-12 fc-fff">赠送青岛啤酒桶装（3L))</text>
      </div>
      <text class="fz-15 mr-t-48">其他充值金额</text>
      <input class="other-recharge mr-t-40" value="0" />
    </div>
    <div
      class="rechargebg-confirm-btn fl-sb"
      :class="[iPhoneType === -1 ? '' : 'dianzi-style']"
    >
      <div class="fl-al mr-l-40">
        <text class="fz-15">充值金额</text>
        <text class="fz-17 fc-139 mr-l-10">¥498</text>
      </div>
      <div class="fl-cen confirm-button fz-14 fc-fff">确认支付</div>
    </div>
  </div>
</template>

<script>
import { common } from "../../utils/index";
export default {
  data() {
    return { iPhoneType: -1 };
  },
  computed: {
    phoneModel() {
      return getApp().globalData.model;
    },
  },
  onLoad() {
    let t = common.iPhoneReturn(this.phoneModel);
    this.iPhoneType = t ? -1 : 0;
  },
  methods: {
    toRecode() {
      uni.navigateTo({
        url: "/subPackages/mine/rechargeRecode",
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
.zhanwei {
  width: 100%;
  height: 20rpx;
}
.recharge-user-info {
  position: relative;
  margin: auto;
  width: 686rpx;
  height: 230rpx;
}
.rechargebg-style {
  width: 686rpx;
  height: 230rpx;
}
.rechargebg-center {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  padding-left: 20rpx;
}
.user-header-img {
  width: 116rpx;
  height: 116rpx;
}
.recharge-recode {
  position: absolute;
  right: 0;
  top: 40rpx;
  width: 150rpx;
  height: 48rpx;
  background-color: #4bbcfbff;
  border-radius: 24rpx 0 0 24rpx;
}
.recharge-money {
  margin: 40rpx auto 0;
  width: 686rpx;
}
.recharge-row {
  width: 686rpx;
  height: 132rpx;
  background-color: #4bbcfbff;
  border-radius: 10px;
}
.price-width {
  width: 200rpx;
}
.other-recharge {
  width: 180rpx;
  height: 74rpx;
  font-size: 50rpx;
  font-weight: bold;
  border-bottom: 2px solid #ccccccff;
  padding-left: 28rpx;
}
.rechargebg-confirm-btn {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 98rpx;
  box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.5);
}
.confirm-button {
  width: 220rpx;
  height: 98rpx;
  background-color: #f1393bff;
}
</style>