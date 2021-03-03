<template>
  <div class="my-device-container">
    <div class="device-name-box fl-sb">
      <div class="mr-l-32">
        <div class="fl-al">
          <image
            class="device-img-style"
            src="../../static/me/device.png"
          ></image>
          <text class="fz-15 fw-bold mr-l-10">YX-001</text>
        </div>
        <text class="fz-12">扣款账号：135****9987</text>
      </div>
      <div class="fl-cen close-bang mr-r-32">
        <text class="fz-12 fc-fff">解除绑定</text>
      </div>
    </div>
    <div class="fl-cen add-device-box" @tap="addNewDevice">
      <image class="add-img-style" src="../../static/me/add.png"></image>
      <text class="fz-15 mr-l-20">绑定新设备</text>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addNewDevice() {
      uni.navigateTo({
        url: "/subPackages/mine/addDevice",
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
.my-device-container {
  padding-top: 20rpx;
}
.device-name-box {
  width: 100%;
  height: 120rpx;
  background-color: #fff;
}
.device-img-style {
  width: 28rpx;
  height: 24rpx;
}
.close-bang {
  width: 136rpx;
  height: 50rpx;
  border-radius: 25rpx 25rpx;
  background-color: #4fc0faff;
}
.add-img-style {
  width: 24rpx;
  height: 22rpx;
}
.add-device-box {
  margin: 60rpx auto 0;
  width: 682rpx;
  height: 96rpx;
  background-color: #fff;
  border-radius: 20rpx;
}
</style>