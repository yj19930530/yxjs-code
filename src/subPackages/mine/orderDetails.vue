<template>
  <div class="order-details-container">
    <div class="order-top-box">
      <image
        class="order-top-img"
        src="../../static/me/order-color.png"
      ></image>
      <div class="order-top-center">
        <div
          class="naviget-title-content"
          :style="[{ height: navHeight + 'px' }]"
        >
          <image
            class="getback-img-style mr-b-10"
            src="../../static/me/getback.png"
          ></image>
          <text class="fz-17 fc-fff fw-bold mr-b-12">订单详情</text>
        </div>
        <div class="fz-15 fc-fff mr-t-30 mr-l-40">等待付款</div>
        <div class="fz-12 fc-fff mr-t-10 mr-l-40">
          请在15分钟内完成支付，超时订单将自动取消
        </div>
        <div class="order-goods-details">
          <div class="order-goods-address fl-al">
            <image
              class="address-img-style mr-l-40"
              src="../../static/shop/address-img.png"
            ></image>
            <div class="mr-l-44 address-right-content">
              <div>
                <text class="fz-14 fw-bold">张生生</text>
                <text class="fz-14 fw-bold mr-l-60">182****1598</text>
              </div>
              <div class="address-box-style text-lang-dian2">
                <text class="fz-12"
                  >四川省成都市双流区天府五街地铁口天府软件园e 区e6-1</text
                >
              </div>
            </div>
          </div>
          <image
            class="line-img-style"
            src="../../static/me/line-img.png"
          ></image>
          <div class="fl-sb goods-buy-content">
            <image
              class="goods-img-style mr-l-48"
              src="../../static/me/moneyBg.png"
            ></image>
            <div class="right-goods-detail mr-r-36">
              <div class="text-lang-dian2 fz-15 goods-title-box">
                【颖享净水套餐A】YX-001颖 享净水-家用
              </div>
              <div class="fl-sb mr-t-12">
                <div>
                  <text class="fz-17 fw-bold">¥1980.00</text>
                  <text class="td-text fz-14 fc-999 mr-l-14">¥1980.00</text>
                </div>
                <text class="fz-12 fc-999">x2</text>
              </div>
            </div>
          </div>
          <image
            class="line-img-style"
            src="../../static/me/line-img.png"
          ></image>
          <!-- 立即购买详情 -->
          <!-- <div class="goods-info-content">
            <div class="fl-sb">
              <text class="fz-15">商品总额</text>
              <text class="fz-15">¥1980.00.00</text>
            </div>
            <div class="mr-t-44 fl-f">
              <text class="fz-15">备注:</text>
              <textarea
                class="textarea-style-width fz-15"
                maxlength="300"
                :disable-default-padding="true"
                placeholder-class="placeholder-font-style"
              />
            </div>
            <div class="goods-info-price">
              <text class="fz-15">总计</text>
              <text class="fz-17 fw-bold fc-139">¥1980.00</text>
            </div>
          </div> -->
          <!-- 购买完成详情 -->
          <div class="goods-info-content">
            <div class="fl-al">
              <text class="fz-15">订单编号</text>
              <text class="fz-15 mr-l-70">1234567890</text>
            </div>
            <div class="fl-al mr-t-40">
              <text class="fz-15">支付方式</text>
              <text class="fz-15 mr-l-70">微信</text>
            </div>
            <div class="fl-al mr-t-40">
              <text class="fz-15">下单时间</text>
              <text class="fz-15 mr-l-70">2020-08-20 07：15：13</text>
            </div>
            <div class="fl-al mr-t-40">
              <text class="fz-15">支付时间</text>
              <text class="fz-15 mr-l-70">2020-08-20 07：15：13</text>
            </div>
            <div class="fl-sb mr-t-40">
              <text class="fz-15">商品总额</text>
              <text class="fz-15">¥1980.00.00</text>
            </div>
            <div class="fl-sb mr-t-40">
              <text class="fz-15">备注：无</text>
            </div>
            <div class="goods-info-price mr-t-60">
              <text class="fz-15">实付款</text>
              <text class="fz-17 fw-bold fc-139">¥1980.00</text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="order-bottom-content"
      :class="[iPhoneType === -1 ? '' : 'dianzi-style']"
    >
      <text class="fz-12 creat-time-text">创建时间 2021-01-20 07：15：13</text>
      <div class="order-bottom-box">
        <div class="fz-14 order-btn-style fl-cen mr-r-20">取消订单</div>
        <div class="fz-14 order-btn-style2 fl-cen fc-139 mr-r-20">立即支付</div>
      </div>
    </div> -->
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
    navHeight() {
      return getApp().globalData.navHeight;
    }, // 头部胶囊高度
    phoneModel() {
      return getApp().globalData.model;
    },
  },
  onLoad() {
    let t = common.iPhoneReturn(this.phoneModel);
    this.iPhoneType = t ? -1 : 0;
  },
  methods: {},
};
</script>
<style>
page {
  background-color: #f8f8f8ff;
}
</style>
<style scoped>
.order-top-img {
  width: 100%;
  height: 100%;
}
.order-top-box {
  position: relative;
  width: 100%;
  height: 310rpx;
}
.order-top-center {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.naviget-title-content {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.getback-img-style {
  position: absolute;
  left: 34rpx;
  bottom: 8rpx;
  width: 24rpx;
  height: 34rpx;
}
.order-goods-details {
  margin: 26rpx auto 0;
  width: 710rpx;
  background-color: #fff;
  z-index: 999;
  border-radius: 4rpx;
}
.order-goods-address {
  width: 100%;
  height: 168rpx;
}
.address-img-style {
  width: 30rpx;
  height: 34rpx;
}
.address-box-style {
  width: 542rpx;
}
.address-right-content {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.goods-title-box {
  width: 396rpx;
}
.right-goods-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.goods-img-style {
  width: 166rpx;
  height: 166rpx;
}
.goods-buy-content {
  padding: 10rpx 0 16rpx;
}
.line-img-style {
  width: 710rpx;
  height: 40rpx;
}
.goods-info-content {
  padding: 22rpx 30rpx 24rpx 42rpx;
}
.placeholder-font-style {
  font-size: 30rpx;
  color: #acacacff;
}
.textarea-style-width {
  margin-left: 18rpx;
  width: 540rpx;
  height: 150rpx;
}
.goods-info-price {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.creat-time-text {
  margin: 184rpx 0 0 40rpx;
}
.order-bottom-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.order-bottom-box {
  margin-top: 22rpx;
  width: 100%;
  height: 108rpx;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.order-btn-style {
  width: 160rpx;
  height: 48rpx;
  border: 1px solid #999999ff;
  border-radius: 10rpx;
}
.order-btn-style2 {
  width: 160rpx;
  height: 48rpx;
  border: 1px solid #f1393bff;
  border-radius: 10rpx;
}
</style>