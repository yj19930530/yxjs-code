<template>
  <div class="address-container">
    <div class="address-row-box">
      <div class="fl-al mr-l-20 pding-top">
        <text class="fz-15 fw-bold">张先生</text>
        <text class="fz-15 fw-bold mr-l-50">182****1598</text>
        <div class="default-style fl-cen fc-fff fz-10 mr-l-20">默认</div>
      </div>
      <div class="address-bottom-text mr-l-20">
        <div class="fz-12 address-width">
          四川省成都市双流区天府五街育才竹岛2栋1单元1202
        </div>
        <image
          class="edit-img mr-r-20 mr-t-6"
          src="../../static/me/edit.png"
        ></image>
      </div>
    </div>
    <div class="add-address-btn fl-cen" @tap="toAddress">
      <image class="add-img-style" src="../../static/me/add.png"></image>
      <text class="fz-15 mr-l-30">添加地址</text>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toAddress() {
      uni.navigateTo({
        url: "/subPackages/shop/addAddress",
      });
    },
  },
};
</script>

<style>
page {
  background-color: #f9fafbff;
}
</style>
<style scoped>
.address-container {
  padding-top: 20rpx;
}
.address-row-box {
  margin: 0 auto 20rpx;
  width: 710rpx;
  padding-bottom: 26rpx;
  background-color: #ffffffff;
}
.default-style {
  width: 56rpx;
  height: 28rpx;
  background-color: #f38304ff;
  border-radius: 4rpx;
}
.address-bottom-text {
  margin-top: 12rpx;
  display: flex;
  justify-content: space-between;
}
.edit-img {
  width: 24rpx;
  height: 24rpx;
}
.pding-top {
  padding-top: 24rpx;
}
.address-width {
  width: 602rpx;
  line-height: 1.5;
}
.add-address-btn {
  margin: 20rpx auto 0;
  width: 682rpx;
  height: 96rpx;
  background-color: #fff;
  border-radius: 10rpx;
}
.add-img-style {
  width: 24rpx;
  height: 22rpx;
}
</style>