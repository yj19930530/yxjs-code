<template>
  <div class="pay-result-container fl-ccc">
    <!-- <image
      class="success-img-style"
      src="../../static/shop/success.png"
    ></image> -->
    <image class="success-img-style" src="../../static/shop/error.png"></image>
    <text class="fz-15 fw-bold mr-t-90">支付失败</text>
    <!-- <text class="fz-15 fw-bold  mr-t-90">订单支付成功 ¥1999.00</text> -->
    <text class="fz-12 fc-999 mr-t-14">哎呀，发生了一点小问题~</text>
    <!-- <text class="fz-12 fc-999 mr-t-14">订单已支付成功~</text> -->
    <div class="fl-cen mr-t-90">
      <!-- <div class="fz-14 fc-fff left-to-order fl-cen">查看订单</div> -->
      <div class="fz-14 fc-fff left-to-order2 fl-cen">重新支付</div>
      <div class="fz-14 fc-333 right-to-home fl-cen">返回首页</div>
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
.pay-result-container {
  height: 100%;
}
.success-img-style {
  margin-top: -300rpx;
  width: 140rpx;
  height: 140rpx;
}
.left-to-order {
  width: 306rpx;
  height: 80rpx;
  border: 1px solid #4bbcfbff;
  background-color: #4bbcfbff;
  border-radius: 20rpx;
}
.left-to-order2 {
  width: 306rpx;
  height: 80rpx;
  border: 1px solid #f1393bff;
  background-color: #f1393bff;
  border-radius: 20rpx;
}
.right-to-home {
  margin-left: 34rpx;
  width: 306rpx;
  height: 80rpx;
  border: 1px solid #999999ff;
  background-color: #fff;
  border-radius: 20rpx;
}
</style>