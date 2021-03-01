<template>
  <div class="result-container">
    <div class="result-one">
      <div class="fl-ccc">
        <image
          class="result-img-style"
          src="../../static/me/success.png"
        ></image>
        <div class="result-line"></div>
      </div>
      <div class="result-right-text">
        <text class="fz-15">申请已提交，等待后台处理</text>
        <text class="fz-12 fc-999 mr-t-2">2020-09-19 12:09</text>
      </div>
    </div>
    <div class="result-one">
      <div class="fl-ccc">
        <div class="result-line2"></div>
        <image
          class="result-img-style"
          src="../../static/me/money.png"
        ></image>
      </div>
      <div class="result-right-text padding-t-54">
        <text class="fz-15">预计到账时间</text>
        <text class="fz-12 fc-999 mr-t-2">2020-09-19 14:09</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
page {
  background-color: #fff;
}
</style>
<style scoped>
.result-container {
  padding: 56rpx 0 0 34rpx;
}
.result-one {
  display: flex;
}
.result-right-text {
  margin-left: 34rpx;
  display: flex;
  flex-direction: column;
}
.padding-t-54 {
    position: relative;
    top: 58rpx;
}
.result-line {
  width: 4rpx;
  height: 62rpx;
  background-color: #4fc0faff;
}
.result-line2 {
  width: 4rpx;
  height: 62rpx;
  background-color: #D8D8D8FF;
}
.result-img-style {
  width: 40rpx;
  height: 40rpx;
}
</style>