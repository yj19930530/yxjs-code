<template>
  <div class="setting-container">
    <div class="setting-row-content fl-sb">
      <text class="mr-l-32 fz-15">关于我们</text>
      <image
        class="more-img-style mr-r-32"
        src="../../static/home/more.png"
      ></image>
    </div>
    <div class="setting-row-content fl-sb">
      <text class="mr-l-32 fz-15">隐私协议</text>
      <image
        class="more-img-style mr-r-32"
        src="../../static/home/more.png"
      ></image>
    </div>
    <div class="login-out fl-cen">
      <text class="fc-666 fz-15">退出登录</text>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
page {
  background-color: #f8f8f8ff;
}
</style>
<style scoped>
.setting-container {
  padding-top: 20rpx;
}
.setting-row-content {
  width: 100%;
  height: 100rpx;
  background-color: #fff;
}
.more-img-style {
  width: 12rpx;
  height: 20rpx;
}
.login-out {
  margin-top: 62rpx;
  width: 100%;
  height: 100rpx;
  background-color: #fff;
}
</style>