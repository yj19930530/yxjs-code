<template>
  <div class="goods-details-content">
    <div class="goods-img-list">
      <swiper
        class="swiper swiper-goods-box"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <swiper-item>
          <image
            class="swiper-item-style"
            mode="aspectFill"
            src="../../static/home/home-bottom.png"
          ></image>
        </swiper-item>
        <swiper-item>
          <image
            class="swiper-item-style"
            mode="aspectFill"
            src="../../static/home/home-bottom.png"
          ></image>
        </swiper-item>
      </swiper>
    </div>
    <div class="goods-title-content">
      <div class="fl-sb">
        <div>
          <text class="fz-16 fc-139 fw-bold">¥</text>
          <text class="fz-30 fc-139 fw-bold">1990.00</text>
          <text class="fz-15 fc-999 td-text mr-l-20">¥3999.00</text>
        </div>
        <div class="share-btn mr-b-20">
          <image
            class="share-img-style"
            src="../../static/shop/fenxiang.png"
          ></image>
          <button class="contact-btn" open-type="share">a</button>
        </div>
      </div>
      <div class="fz-16 fw-bold mr-t-20">
        【颖享净水套餐A】YX-001颖享净水-家用
      </div>
    </div>
    <div class="goods-info">
      <text class="fz-16 mr-t-10">商品详情</text>
      <div class="info-text fz-14 mr-t-50">
        关于这个商品的描述，有就写，没有就不写。关于这个商品的描述，有就写，没有就不写。关于这个商品的描述，有就写，没有就不写。关于这个商品的描述，有就写，没有就不写。
      </div>
      <image
        mode="aspectFill"
        class="info-img mr-t-20"
        src="../../static/home/home-bottom.png"
      ></image>
    </div>
    <div
      class="fl-cen buy-btn"
      @tap="toBuyGoods"
      :class="[iPhoneType === -1 ? '' : 'dianzi-style']"
    >
      <text class="fz-17 fc-fff">立即购买</text>
    </div>
  </div>
</template>

<script>
import { common } from "../../utils/index";
export default {
  data() {
    return {
      iPhoneType: -1,
      indicatorDots: false,
      autoplay: true,
      interval: 2000,
      duration: 500,
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
    toBuyGoods() {
      uni.navigateTo({
        url: "/subPackages/shop/orderComfirm",
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
.goods-details-content {
  padding-bottom: 98rpx;
}
.goods-img-list {
  width: 100%;
  height: 760rpx;
}
.swiper-item-style {
  width: 100%;
  height: 100%;
}
.swiper-goods-box {
  width: 100%;
  height: 100%;
}
.share-btn {
  position: relative;
  width: 26rpx;
  height: 26rpx;
}
.share-img-style {
  width: 100%;
  height: 100%;
}
.goods-title-content {
  padding: 40rpx 30rpx 32rpx;
  border-bottom: 1px solid #f4f4f4ff;
}
.goods-info {
  padding: 20rpx;
}
.info-text {
  line-height: 1.5;
}
.info-img {
  width: 100%;
}
.buy-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 98rpx;
  z-index: 9;
  background-color: #f1393bff;
}
</style>