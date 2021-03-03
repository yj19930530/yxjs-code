<template>
  <div class="refund-container">
    <div class="top-box-style"></div>
    <div class="refund-goods-content fl-sb">
      <image
        class="goods-img-style mr-l-24"
        src="../../static/me/moneyBg.png"
      ></image>
      <div class="goods-right-style">
        <div class="goods-title-style text-lang-dian2 mr-r-8">
          【颖享净水套餐A】YX-001颖 享净水-家用
        </div>
        <div class="fl-sb mr-t-10 mr-r-14">
          <div>
            <text class="fz-17 fw-bold">¥1980.00</text>
            <text class="td-text fc-999 fz-14 mr-l-14">¥1980.00</text>
          </div>
          <text class="fz-12 fc-999">x2</text>
        </div>
        <div class="goods-all-price mr-r-14">
          <text class="fz-14">合计￥3998.00</text>
        </div>
      </div>
    </div>
    <picker
      @change="bindPickerChange"
      :value="repairText"
      :range="deviceArr"
      range-key="name"
      class="mr-t-20"
    >
      <div class="picker-content fl-sb">
        <text class="fz-15 mr-l-40">退款原因：</text>
        <div class="fl-al mr-r-40">
          <text class="fz-14 fc-999">请选择</text>
          <image
            class="more-style mr-l-10"
            src="../../static/home/more.png"
          ></image>
        </div>
      </div>
    </picker>
    <div class="picker-content fl-al">
      <text class="fz-15 mr-l-40">退款金额：</text>
      <div class="fl-al">
        <text class="fz-15 fc-139">¥3998.00</text>
      </div>
    </div>
    <div class="picker-content fl-f mr-t-20">
      <text class="fz-15 mr-l-40">退款说明：</text>
      <textarea
        class="fz-15 textarea-style"
        maxlength="300"
        placeholder-class="placeholder-style"
        :disable-default-padding="true"
      />
    </div>
    <div
      class="fl-cen refund-submit"
      :class="[iPhoneType === -1 ? '' : 'dianzi-style']"
    >
      <text class="fz-17 fw-bold fc-fff">确认提交</text>
    </div>
  </div>
</template>

<script>
import { common } from "../../utils/index";
export default {
  data() {
    return {
      repairText: "",
      iPhoneType: -1,
      deviceArr: [
        {
          name: "维修",
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
    bindPickerChange(e) {
      console.log(e);
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
.top-box-style {
  width: 100%;
  height: 20rpx;
  background-color: #f8f8f8ff;
}
.refund-goods-content {
  margin: 22rpx auto 0;
  width: 710rpx;
  border-bottom: 1px solid #ccccccff;
  padding-bottom: 38rpx;
}
.goods-right-style {
  width: 400rpx;
  height: 100%;
}
.goods-img-style {
  width: 192rpx;
  height: 192rpx;
}
.goods-title-style {
  width: 396rpx;
}
.goods-all-price {
  margin-top: 28rpx;
  display: flex;
  justify-content: flex-end;
}
.more-style {
  width: 12rpx;
  height: 20rpx;
}
.picker-content {
  width: 100%;
  height: 90rpx;
  background-color: #fff;
}
.placeholder-style {
  font-size: 30rpx;
  color: #999999ff;
}
.textarea-style {
  width: 530rpx;
  height: 300rpx;
}
.refund-submit {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 98rpx;
  background-color: #4bbcfbff;
}
</style>