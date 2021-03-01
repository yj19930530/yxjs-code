<template>
  <div class="water-container">
    <picker
      @change="bindPickerChange"
      :value="repairText"
      :range="deviceArr"
      range-key="name"
    >
      <div class="picker-content fl-sb">
        <text class="fz-15 mr-l-30">报修类别</text>
        <div class="fl-al mr-r-30">
          <text class="fz-14 fc-999">请选择</text>
          <image
            class="more-style mr-l-10"
            src="../../static/home/more.png"
          ></image>
        </div>
      </div>
    </picker>
    <div class="picker-content fl-sb">
      <text class="fz-15 mr-l-30">桶装水量</text>
      <div class="fl-al mr-r-30">
        <text class="fz-14 fw-bold">9L</text>
      </div>
    </div>
    <div class="picker-content fl-sb">
      <text class="fz-15 mr-l-30">支付金额</text>
      <div class="fl-al mr-r-30">
        <text class="fz-14 fc-139 fw-bold">¥4.50</text>
      </div>
    </div>
    <div class="recode-history fl-ccc" @tap="toRecode">
      <image
        class="recode-img-style"
        src="../../static/home/recode.png"
      ></image>
      <text class="fc-4bb fz-12 mr-t-4">历史记录</text>
    </div>
    <div
      class="fl-sb water-bottom-content"
      :class="[iPhoneType === -1 ? '' : 'dianzi-style']"
    >
      <div class="fl-al mr-l-38">
        <text class="fz-15">金额</text>
        <text class="fz-17 fw-bold fc-139 mr-l-10">¥ 4.50</text>
      </div>
      <div class="fz-14 fc-fff fl-cen comfirm-btn">确认支付</div>
    </div>
  </div>
</template>

<script>
import { common } from "../../utils/index";
export default {
  data() {
    return {
      repairText: "类别",
      iPhoneType: -1,
      deviceArr: [
        {
          name: "维修",
        },
      ],
      rules: [
        {
          name: "loanType",
          checkType: "notnull",
          errorMsg: "请选择业务品种",
        },
      ],
    };
  },
  computed: {
    phoneModel() {
      return getApp().globalData.model;
    },
  },
  onLoad() {
    let t = common.iPhoneReturn(this.phoneModel);
    this.iPhoneType = t ? -1 : 0;
  },
  methods: {
    bindPickerChange(val) {
      console.log(val);
    },
    toRecode() {
      uni.navigateTo({
        url: "/subPackages/home/codeWater",
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
.water-container {
  padding-top: 20rpx;
}
.picker-content {
  width: 100%;
  height: 100rpx;
  background-color: #fff;
  border-bottom: 1px solid #f8f8f8ff;
}
.more-style {
  width: 12rpx;
  height: 20rpx;
}
.recode-history {
  position: fixed;
  top: 404rpx;
  right: 18rpx;
  width: 136rpx;
  height: 136rpx;
  background-color: #fff;
  box-shadow: 0 0 20rpx 10rpx rgba(75, 188, 251, 0.08);
  border-radius: 50%;
}
.recode-img-style {
  width: 60rpx;
  height: 60rpx;
}
.comfirm-btn {
  width: 220rpx;
  height: 98rpx;
  background-color: #f1393bff;
}
.water-bottom-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 98rpx;
  box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  z-index: 9;
}
</style>