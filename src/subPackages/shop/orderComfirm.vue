<template>
  <div class="order-container">
    <div class="occupy-box"></div>
    <div class="order-address-content fl-sb">
      <div class="fl-al">
        <image
          class="address-style"
          src="../../static/shop/address-img.png"
        ></image>
        <text class="fz-14" @tap="toAddress">你还没有收货地址哦~</text>
        <!-- <div class="order-person-content">
          <div class="fl-al">
            <text class="fz-14 fw-bold">张先生</text>
            <text class="fz-14 fw-bold mr-l-60">182****1598</text>
          </div>
          <div class="fz-12 mr-t-10">
            四川省成都市双流区天府五街地铁口天府软件园e 区e6-1
          </div>
        </div> -->
      </div>
      <image class="address-more" src="../../static/home/more.png"></image>
    </div>
    <div class="occupy-box"></div>
    <div class="order-goods-content">
      <div class="goods-row-box fl-sb">
        <image
          class="goods-row-img"
          mode="aspectFill"
          src="../../static/home/home-bottom.png"
        ></image>
        <div class="goods-row-right">
          <div class="goods-title text-lang-dian2 mr-t-20">
            【颖享净水套餐A】YX-001颖享净水-家用【颖享净水套餐A】YX-001颖享净水-家用【颖享净水套餐A】YX-001颖享净水-家用【颖享净水套餐A】YX-001颖享净水-家用
          </div>
          <div class="fl-sb mr-t-20">
            <div>
              <text class="fz-15 fc-139 fw-bold">¥1999.00</text>
              <text class="fz-12 fc-999 td-text mr-l-20">¥3999.00</text>
            </div>
            <div class="fl-cen">
              <image
                class="reduce-btn"
                src="../../static/shop/reduce.png"
              ></image>
              <text class="fz-12 mr-l-18 mr-r-18">02</text>
              <image
                class="reduce-btn"
                src="../../static/shop/increase.png"
              ></image>
            </div>
          </div>
        </div>
      </div>
      <div class="fl-sb price-content">
        <text class="fz-15">商品金额</text>
        <text class="fz-15 fw-bold">¥1999.00</text>
      </div>
      <div class="order-info-box">
        <div class="fz-15 info-left-style">备注:</div>
        <textarea
          class="info-textarea"
          maxlength="300"
          placeholder-style="color:#ACACACFF;font-size:30rpx"
          placeholder="点击输入备注信息"
          :disable-default-padding="true"
        />
      </div>
    </div>
    <div
      class="buy-confirm-content fl-sb"
      :class="[iPhoneType === -1 ? '' : 'dianzi-style']"
    >
      <div class="left-money-number">
        <text class="fz-15">合计</text>
        <text class="fz-17 fw-bold mr-l-10 fc-139">¥1999.00</text>
      </div>
      <div class="fl-cen confirm-btn" @tap="toResult">
        <text class="fc-fff fz-14">确认支付</text>
      </div>
    </div>
  </div>
</template>

<script>
import { common } from "../../utils/index";
export default {
  data() {
    return {
      iPhoneType: -1,
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
    toResult() {
      uni.navigateTo({
        url: "/subPackages/shop/payResult",
      });
    },
    toAddress() {
      uni.navigateTo({
        url: "/subPackages/shop/address",
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
.occupy-box {
  width: 100%;
  height: 20rpx;
  background-color: #f8f8f8ff;
}
.order-address-content {
  width: 100%;
  height: 164rpx;
}
.address-style {
  margin-left: 60rpx;
  margin-right: 44rpx;
  width: 30rpx;
  height: 34rpx;
}
.address-more {
  margin-right: 48rpx;
  width: 12rpx;
  height: 20rpx;
}
.order-person-content {
  width: 542rpx;
  height: 100%;
}
.order-goods-content {
  padding: 20rpx 38rpx;
}
.goods-row-box {
  padding-bottom: 40rpx;
  border-bottom: 1px solid #ccccccff;
}
.goods-row-img {
  width: 168rpx;
  height: 168rpx;
  border-radius: 10rpx;
}
.goods-title {
  width: 468rpx;
}
.reduce-btn {
  width: 36rpx;
  height: 36rpx;
}
.goods-row-right {
  height: 168rpx;
}
.price-content {
  padding: 30rpx 0;
}
.order-info-box {
  display: flex;
}
.info-left-style {
  width: 100rpx;
}
.info-textarea {
  width: 100%;
  height: 300rpx;
}
.buy-confirm-content {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 98rpx;
  box-shadow: 0 4rpx 8rpx 0 #00000080;
}
.confirm-btn {
  width: 220rpx;
  height: 98rpx;
  background-color: #f1393bff;
}
.left-money-number {
  display: flex;
  align-items: center;
  margin-left: 38rpx;
}
</style>