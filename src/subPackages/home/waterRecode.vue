<template>
  <div class="water-recode-container">
    <div class="water-recode-row" v-for="item in 3" :key="item">
      <div class="fl-al mr-l-30" style="padding-top: 20rpx;">
        <div class="fl-al fz-15 fw-bold text-width">取水量</div>
        <text class="fz-14 mr-l-26">5L</text>
      </div>
      <div class="fl-al mr-l-30 mr-t-20">
        <div class="fl-al fz-15 fw-bold text-width">支付金额</div>
        <text class="fz-14 mr-l-26">¥4.50</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
page {
  background-color: #ffffffff;
}
</style>
<style scoped>
.water-recode-container {
  padding-top: 20rpx;
}
.water-recode-row {
  margin: 0 auto 20rpx;
  width: 686rpx;
  height: 176rpx;
  border-radius: 10rpx;
  box-shadow: 0 0 20rpx 10rpx rgba(75, 188, 251, 0.08);
}
.text-width {
  width: 120rpx;
}
</style>