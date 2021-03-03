<template>
  <div class="bind-device-container">
    <div class="bind-device-row fl-sb">
      <div class="fl-al mr-l-32">
        <div class="fz-15 text-width">设备号</div>
        <input class="fz-14 input-width" placeholder-class="placeholder-style" placeholder="请输入" />
      </div>
      <image class="sao-img-style mr-r-32" src="../../static/me/sao.png"></image>
    </div>
    <div class="bind-device-row fl-al">
      <div class="fl-al mr-l-32">
        <div class="fz-15 text-width">扣款账号</div>
        <input class="fz-14 input-width" placeholder-class="placeholder-style" placeholder="请输入手机号码" />
      </div>
    </div>
    <div class="bind-device-row fl-sb">
      <div class="fl-al mr-l-32">
        <div class="fz-15 text-width">短信验证码</div>
        <input class="fz-14 input-width" placeholder-class="placeholder-style" placeholder="请输入" />
      </div>
      <div class="fc-fff fz-12 get-code fl-cen mr-r-32">获取</div>
    </div>
    <div class="bind-code-sumit fl-cen">
        <text class="fz-17 fc-fff lp-style">提交</text>
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
  background-color: #f9fafbff;
}
</style>
<style scoped>
.bind-device-container {
  padding-top: 20rpx;
}
.bind-device-row {
  width: 100%;
  height: 108rpx;
  background-color: #fff;
}
.placeholder-style {
    font-size: 28rpx;
    color: #999999FF;
}
.input-width {
    margin-left: 48rpx;
    width: 300rpx;
}
.text-width {
    width: 150rpx;
}
.sao-img-style {
    width: 28rpx;
    height: 28rpx;
}
.get-code {
    width: 136rpx;
    height: 50rpx;
    border-radius: 25rpx 25rpx;
    background-color: #4FC0FAFF;
}
.lp-style {
    letter-spacing: 10rpx;
}
.bind-code-sumit {
    position: absolute;
    bottom: 72rpx;
    left: 32rpx;
    width: 684rpx;
    height: 104rpx;
    background-color: #4FC0FAFF;
    border-radius: 20rpx;
}
</style>