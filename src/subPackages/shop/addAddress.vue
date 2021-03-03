<template>
  <div class="add-address-container">
    <div class="add-address-form">
      <div class="form-item-box fl-al">
        <div class="fz-15 text-width mr-l-20">收货人</div>
        <input
          class="input-style fz-15 mr-l-60"
          placeholder="请填写姓名"
          placeholder-class="placeholder-style"
        />
      </div>
      <div class="form-item-box fl-al">
        <div class="fz-15 text-width mr-l-20">手机号码</div>
        <input
          class="input-style fz-15 mr-l-60"
          placeholder="请填写姓名"
          placeholder-class="placeholder-style"
        />
      </div>
      <picker @change="bindPickerChange" :value="index" mode="region">
        <div class="form-item-box fl-al">
          <div class="fz-15 text-width mr-l-20">所在地区</div>
          <div class="input-style fz-15 fc-999 mr-l-60">省市区县、乡等</div>
          <image class="more-style" src="../../static/home/more.png"></image>
        </div>
      </picker>
      <div class="fl-f">
        <div class="fz-15 text-width mr-l-20 mr-t-30">详细地址</div>
        <textarea
          name="detailInfo"
          :disable-default-padding="true"
          maxlength="300"
          class="input-width-style fz-15 mr-t-30 mr-l-60"
          v-model="value"
          placeholder="请填写详细地址（小区、单元、房号）"
        />
      </div>
    </div>
    <div class="default-box fl-al">
      <image
        class="check-style mr-l-20"
        src="../../static/home/check.png"
      ></image>
      <text class="fz-15 mr-l-10">设置为默认地址</text>
    </div>
    <div
      class="save-btn fl-cen"
      :class="[iPhoneType === -1 ? '' : 'dianzi-style']"
    >
      <text class="fz-17 fc-fff fw-bold">保 存</text>
    </div>
  </div>
</template>

<script>
import { common } from "../../utils/index";
export default {
  data() {
    return {
      iPhoneType: -1,
      index: "name",
      value: "",
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
  },
};
</script>

<style>
page {
  background-color: #f8f8f8ff;
}
</style>
<style scoped>
.add-address-container {
  padding-top: 20rpx;
}
.add-address-form {
  margin: auto;
  width: 710rpx;
  background-color: #fff;
}
.form-item-box {
  height: 106rpx;
  border-bottom: 1px solid rgb(248, 245, 245);
}
.input-style {
  width: 490rpx;
}
.text-width {
  width: 120rpx;
}
.placeholder-style {
  font-size: 30rpx;
  color: #999;
}
.more-style {
  width: 12rpx;
  height: 20rpx;
}
.input-width-style {
  width: 510rpx;
  height: 142rpx;
}
.check-style {
  width: 30rpx;
  height: 30rpx;
}
.default-box {
  margin: 20rpx auto 0;
  width: 710rpx;
  height: 108rpx;
  background-color: #ffffffff;
  border-radius: 20rpx;
}
.save-btn {
  position: fixed;
  bottom: 28rpx;
  left: 34rpx;
  width: 682rpx;
  height: 96rpx;
  background-color: #4bbcfbff;
  border-radius: 20rpx;
}
</style>