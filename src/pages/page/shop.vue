<template>
  <div class="shopping-container">
    <div
      class="shopping-row-content"
      v-for="item in 3"
      :key="item"
      @tap="toGoodsDetails"
    >
      <image
        class="row-left-img"
        mode="aspectFill"
        src="../../static/home/home-bottom.png"
      ></image>
      <div class="fl-fc">
        <div class="text-lang-dian2 row-title-text fz-15 fw-bold">
          【颖享净水套餐A】YX-001颖 享净水-家用
        </div>
        <div class="mr-t-20">
          <span class="fz-17 fc-139 fc-139 fw-bold">¥1980.00</span>
          <span class="td-text fz-14 fc-999 mr-l-10">¥3999.00</span>
        </div>
        <div class="row-buy-number mr-t-30">
          <text class="fz-12 fc-999">销量：100</text>
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
    toGoodsDetails() {
      uni.navigateTo({
        url: "/subPackages/shop/goodsDetails",
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
.shopping-container {
  padding: 52rpx 40rpx;
}
.row-left-img {
  width: 192rpx;
  height: 192rpx;
}
.row-title-text {
  width: 396rpx;
}
.shopping-row-content {
  margin-bottom: 90rpx;
  display: flex;
  justify-content: space-between;
}
.row-buy-number {
  display: flex;
  justify-content: flex-end;
}
</style>