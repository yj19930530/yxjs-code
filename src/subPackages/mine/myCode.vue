<template>
  <div class="my-code-container">
    <div class="top-box"></div>
    <div class="code-row-content fl-sb" @tap="toEditCode('zhi')">
      <text class="fz-15 mr-l-32">支付宝收款码</text>
      <image
        class="more-style mr-r-32"
        src="../../static/home/more.png"
      ></image>
    </div>
    <div class="code-row-content fl-sb" @tap="toEditCode('we')">
      <text class="fz-15 mr-l-32">微信收款码</text>
      <image
        class="more-style mr-r-32"
        src="../../static/home/more.png"
      ></image>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toEditCode(t) {
      uni.navigateTo({
        url: "/subPackages/mine/codeEdit?type=" + t,
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
.top-box {
  width: 100%;
  height: 20rpx;
  background-color: #f8f8f8ff;
}
.more-style {
  width: 12rpx;
  height: 20rpx;
}
.code-row-content {
  width: 100%;
  height: 100rpx;
  background-color: #fff;
}
</style>