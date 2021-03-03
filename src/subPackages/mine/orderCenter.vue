<template>
  <div class="order-center-container">
    <!-- 头部tab 切换 -->
    <div class="order-center-top fl-sb">
      <div class="mr-l-32" @tap="checkType('all')">
        <text class="fz-15" :class="[curr === 0 ? 'fw-bold' : 'fc-999']"
          >全部</text
        >
      </div>
      <div @tap="checkType('pay')">
        <text class="fz-15" :class="[curr === 1 ? 'fw-bold' : 'fc-999']"
          >待付款</text
        >
      </div>
      <div @tap="checkType('send')">
        <text class="fz-15" :class="[curr === 2 ? 'fw-bold' : 'fc-999']"
          >派单中</text
        >
      </div>
      <div @tap="checkType('shou')">
        <text class="fz-15" :class="[curr === 3 ? 'fw-bold' : 'fc-999']"
          >待安装</text
        >
      </div>
      <div class="mr-r-32" @tap="checkType('ping')">
        <text class="fz-15" :class="[curr === 4 ? 'fw-bold' : 'fc-999']"
          >已完成</text
        >
      </div>
    </div>
    <!-- 订单列表 -->
    <div class="order-list-coentent">
      <swiper :current="curr" @change="setCurr" style="height: 100vh">
        <swiper-item v-for="item in 5" :key="item">
          <scroll-view
            scroll-y
            style="height: 100vh"
            :show-scrollbar="false"
            :refresher-enabled="true"
            refresher-default-style="none"
            :refresher-triggered="scorllType"
            @refresherrefresh="scollHandle"
          >
            <div style="padding-top: 136rpx">
              <div class="order-list-content" @tap="toOrderDetails">
                <div class="fl-b goods-row-box">
                  <image
                    class="left-goods-img"
                    src="../../static/me/moneyBg.png"
                  ></image>
                  <div class="right-goods-content">
                    <div
                      class="right-goods-title text-lang-dian2 fz-15 fw-bold"
                    >
                      【颖享净水套餐A】YX-001颖 享净水-家用
                    </div>
                    <div class="fl-sb mr-t-10">
                      <div>
                        <text class="fz-17 fw-bold">¥1980.00</text>
                        <text class="fz-14 fc-999 td-text mr-l-14"
                          >¥3999.00</text
                        >
                      </div>
                      <text class="fz-12 fc-999 mr-r-14">x2</text>
                    </div>
                    <div class="fz-14 ta-right mr-r-14 mr-t-20">
                      合计¥1980.00
                    </div>
                  </div>
                </div>
                <div class="fl-sb mr-t-20">
                  <text class="fz-12 fc-139 mr-l-20 fw-bold">待支付</text>
                  <div class="fl-al">
                    <!-- <div class="fl-cen curent-btn mr-r-20">
                      <text class="fz-14">取消订单</text>
                    </div> -->
                    <div
                      class="fl-cen curent-btn mr-r-20"
                      @tap="orderHandle('refund')"
                    >
                      <text class="fz-14">退款</text>
                    </div>
                    <div class="fl-cen curent-btn2 mr-r-20">
                      <text class="fz-14 fc-139">立即支付</text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="fl-ccc" v-if="!orderListData.length">
              <image
                class="noorder-img-style"
                src="../../static/me/noorder.png"
              ></image>
              <text class="fz-15 fw-bold mr-t-50">暂无订单</text>
            </div> -->
          </scroll-view>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "all",
      status: "", // 订单状态
      orderListData: [], // 订单处理列表
      curr: 0,
      scorllType: false,
    };
  },
  onShareAppMessage() {
    return {
      path: `/pages/page/home`,
    };
  },
  onLoad(obj) {
    if (obj.type) {
      const orderType = parseInt(obj.type);
      switch (orderType) {
        case 1: {
          this.curr = 1;
          this.status = obj.type;
          break;
        }
        case 2: {
          this.curr = 2;
          this.status = obj.type;
          break;
        }
        case 3: {
          this.curr = 3;
          this.status = obj.type;
          break;
        }
        case 4: {
          this.curr = 4;
          this.status = obj.type;
          break;
        }
        default: {
          this.curr = 0;
          this.status = "";
          break;
        }
      }
      this.getList();
    }
  },
  onShow() {},
  methods: {
    //下拉刷新
    async scollHandle() {
      this.scorllType = true;
      await this.getList();
      this.scorllType = false;
    },
    setCurr(e) {
      console.log(e);
    },
    toOrderDetails() {
      uni.navigateTo({
        url: "/subPackages/mine/orderDetails",
      });
    },
    // 按钮操作
    orderHandle(t) {
      switch (t) {
        case "refund": {
          uni.navigateTo({
            url: "/subPackages/mine/refundDetails",
          });
          // uni.navigateTo({
          //   url: "/subPackages/mine/refund",
          // });
          break;
        }
        default: {
          break;
        }
      }
    },
    // tar 切换type
    checkType(type) {
      this.type = type;
      switch (type) {
        case "pay": {
          this.curr = 1;
          this.status = 1;
          break;
        }
        case "send": {
          this.curr = 2;
          this.status = 2;
          break;
        }
        case "shou": {
          this.curr = 3;
          this.status = 3;
          break;
        }
        case "ping": {
          this.curr = 4;
          this.status = 4;
          break;
        }
        case "all": {
          this.curr = 0;
          this.status = "";
          break;
        }
      }
    },
  },
};
</script>
<style>
page {
  background-color: #f8f8f8;
}
</style>
<style scoped>
.order-center-top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  padding: 38rpx 0 36rpx;
  background-color: #ffffff;
}
.order-list-coentent {
  margin: auto;
  width: 710rpx;
}
.order-list-content {
  background-color: #fff;
  padding-bottom: 32rpx;
}
.right-goods-content {
  width: 418rpx;
  display: flex;
  flex-direction: column;
}
.left-goods-img {
  width: 192rpx;
  height: 192rpx;
  border-radius: 10rpx;
}
.right-goods-title {
  width: 396rpx;
}
.goods-row-box {
  padding: 14rpx 0 20rpx 26rpx;
  border-bottom: 1px solid #ccccccff;
}
.curent-btn {
  width: 160rpx;
  height: 48rpx;
  border: 1px solid #999;
  border-radius: 10rpx;
}
.curent-btn2 {
  width: 160rpx;
  height: 48rpx;
  border: 1px solid #f1393bff;
  border-radius: 10rpx;
}
.curent-box {
  width: 352rpx;
}
.noorder-img-style {
  margin-top: 170rpx;
  width: 206rpx;
  height: 240rpx;
}
</style>