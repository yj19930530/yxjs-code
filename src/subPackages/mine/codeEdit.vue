<template>
  <div class="code-edit-container">
    <div class="top-box"></div>
    <div class="code-edit-name fl-sb">
      <text class="fz-15 mr-l-32">姓名</text>
      <input
        class="code-edit-input mr-r-32 fz-14"
        placeholder-style="font-size:28rpx;color:#999"
        placeholder="请输入"
      />
    </div>
    <div class="code-edit-content fl-sb">
      <text class="fz-15 mr-l-32" v-if="pageType === 'zhi'">支付宝收款码</text>
      <text class="fz-15 mr-l-32" v-else>微信收款码</text>
      <div class="fl-al">
        <image
          class="code-img-style mr-r-10"
          src="../../static/me/moneyBg.png"
        ></image>
        <image
          class="more-style mr-r-32"
          src="../../static/home/more.png"
        ></image>
      </div>
    </div>
    <div class="fl-ccc bottom-box-style">
      <div class="fl-cen">
        <image class="check-type-img" src="../../static/home/check.png"></image>
        <text class="fz-12">实名认证即代表您已阅读并同意</text>
        <text class="fc-4fc fz-12 mr-l-10">《用户授权协议》</text>
      </div>
      <div class="code-eidt-submit fl-cen mr-t-24">
        <text class="fz-17 fc-fff lp-style">提交</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageType: "",
    };
  },
  onLoad(obj) {
    this.pageType = obj.type;
    if (obj.type === "zhi") {
      uni.setNavigationBarTitle({
        title: "支付宝收款码",
      });
    } else {
      uni.setNavigationBarTitle({
        title: "微信收款码",
      });
    }
  },
  methods: {},
};
</script>
<style>
page {
  background-color: #fff;
}
</style>
<style scoped>
.top-box {
  width: 100%;
  height: 20rpx;
  background-color: #f8f8f8ff;
}
.code-edit-name {
  width: 100%;
  height: 100rpx;
}
.code-edit-content {
  width: 100%;
  height: 140rpx;
}
.code-edit-input {
  width: 300rpx;
  display: flex;
  text-align: right;
}
.more-style {
  width: 12rpx;
  height: 20rpx;
}
.code-img-style {
  width: 100rpx;
  height: 100rpx;
}
.check-type-img {
  margin-right: 18rpx;
  width: 28rpx;
  height: 28rpx;
}
.lp-style {
  letter-spacing: 10rpx;
}
.code-eidt-submit {
  width: 684rpx;
  height: 104rpx;
  border-radius: 20rpx;
  background-color: #4fc0faff;
}
.bottom-box-style {
  position: absolute;
  bottom: 72rpx;
  left: 0;
  width: 100%;
}
</style>