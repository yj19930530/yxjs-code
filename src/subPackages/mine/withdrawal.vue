<template>
  <div class="withdrawal-container">
    <div class="withdrawal-code fl-sb">
      <text class="fz-15 fw-bold mr-l-14">提现至</text>
      <div class="withdrawal-code-name">
        <text class="fz-15">我的支付宝收款码</text>
        <text class="fz-14 fc-999 mr-t-14">预计2小时内到账</text>
      </div>
      <image
        class="more-style mr-r-14"
        src="../../static/home/more.png"
      ></image>
    </div>
    <div class="withdrawal-btn-content">
      <div class="fz-15 fw-bold mr-l-14 pd-t-50">提现金额</div>
      <div class="withdrawal-money mr-l-20 mr-t-20 fl-al">
        <text class="fz-32">¥</text>
        <input type="digit" class="money-number fz-32 mr-l-10" />
      </div>
      <div class="mr-l-14 mr-t-20">
        <text class="fz-14 fc-999">可提现余额99.00元</text>
        <text class="fz-14 mr-l-24 fc-637">全部提现</text>
      </div>
      <div class="withdrawal-comfirm fl-cen" @tap="withdrawalSbmit">
        <text class="fz-17 fc-fff fw-bold text-letter">提现</text>
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
    withdrawalSbmit() {
      uni.navigateTo({
        url: "/subPackages/mine/withdrawalResult",
      });
    },
  },
};
</script>

<style>
page {
  background-color: #f8f8f8ff;
}
</style>
<style scoped>
.withdrawal-container {
  padding-top: 40rpx;
}
.withdrawal-code {
  margin: auto;
  width: 710rpx;
  height: 176rpx;
  background-color: #fff;
}
.withdrawal-code-name {
  display: flex;
  flex-direction: column;
}
.more-style {
  width: 12rpx;
  height: 20rpx;
}
.withdrawal-btn-content {
  margin: 20rpx auto 0;
  width: 710rpx;
  height: 522rpx;
  background-color: #fff;
}
.withdrawal-money {
  padding-bottom: 10rpx;
  width: 672rpx;
  border-bottom: 2px solid #ccccccff;
}
.pd-t-50 {
  padding-top: 50rpx;
}
.money-number {
  width: 500rpx;
  height: 100%;
}
.withdrawal-comfirm {
  margin: 46rpx auto 0;
  width: 684rpx;
  height: 104rpx;
  background-color: #4bbcfbff;
  border-radius: 20rpx;
}
.text-letter {
  letter-spacing: 10rpx;
}
</style>