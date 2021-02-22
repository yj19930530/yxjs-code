<template>
  <view class="home-container fl-cc bg-ffb">
    <!-- <div :style="[{ height: navHeight + 'px' }]"></div> -->
    <div :style="[{ height: navHeight + 'px' }]" class="device-top-box">
      <image
        class="device-add-img2 mr-l-30"
        src="../../static/home/add2.png"
      ></image>
    </div>
    <!-- <text class="fz-16 fc-fff fw-bold mr-t-40">暂无设备</text> -->
    <div style="position: relative">
      <picker
        class="mr-t-40"
        @change="bindPickerChange"
        :value="deviceTitle"
        :range="deviceArr"
        range-key="name"
      >
        <view class="fl-al">
          <text class="fz-16 fc-fff">{{ deviceTitle }}</text>
          <image
            class="device-check-img"
            src="../../static/home/jiao.png"
          ></image>
        </view>
      </picker>
      <image
        class="device-error-img"
        src="../../static/home/error.png"
        @tap="errHandle"
      ></image>
    </div>
    <CirclePercent
      class="circle-content"
      :bg="'#FFBE75FF'"
      :circleBf="'#F38304FF'"
      percent="45"
      :showType="showType"
    />
    <div class="fz-18 fc-fff fw-bold">当前指数可以直饮</div>
    <!-- 无设备显示节点 -->
    <div class="fl-ccc home-back-content1" v-if="showType === 'add'">
      <div class="fl-ccc home-back1-text">
        <text class="fz-16 fc-fff">全民共享健康饮水</text>
        <text class="fz-16 fc-fff mr-t-30"
          >领先技术/卓越产品/创新模式/智能物联</text
        >
      </div>
      <image
        class="home-back-img1"
        src="../../static/home/home-bottom.png"
      ></image>
    </div>
    <!--  -->
    <!-- <div class="fl-ccc device-xiu-btn">
      <image class="device-xiu-img" src="../../static/home/xiu.png"></image>
      <text class="fz-12 fc-4bb mr-t-4">一键报修</text>
    </div> -->
    <div class="device-bottom-footer">
      <!-- <image
        class="device-bolang-img"
        src="../../static/home/bolang.png"
      ></image> -->
      <image
        class="device-bolang-img"
        src="../../static/home/bolang2.png"
      ></image>
      <div class="fl-al">
        <div class="device-index-box device-left-content fl-ccc">
          <text class="fz-12 fc-666">已生成净水量</text>
          <div class="mr-t-14">
            <text class="fz-28 fw-bold">20</text>
            <text class="fz-14 fw-bold">L</text>
          </div>
        </div>
        <div class="device-index-box fl-ccc">
          <text class="fz-12 fc-666">滤芯剩余</text>
          <div class="mr-t-14">
            <text class="fz-28 fw-bold">20</text>
            <text class="fz-14 fw-bold">%</text>
          </div>
        </div>
      </div>
    </div>
    <uni-popup ref="popup" type="center">
      <div class="popup-show-content fl-ccc">
        <image
          class="device-error-img2"
          src="../../static/home/error2.png"
        ></image>
        <div class="fc-333 text-width-508 mr-t-30">
          你的滤芯即将用完，请及时更换，请及时处理！及时处理！
        </div>
        <div class="box-width-508 fl-sb mr-t-30">
          <div class="fl-cen device-btn-xiu" @tap="toRepair">
            <text class="fz-14 fc-fff">去报修</text>
          </div>
          <div class="fl-cen device-btn-xiu2">
            <text class="fz-14 fc-333">拨打电话</text>
          </div>
        </div>
      </div>
    </uni-popup>
  </view>
</template>

<script>
import CirclePercent from "../../components/circle-percent/circle-percent";
import Unipopup from "../../components/uni-popup/uni-popup";
export default {
  data() {
    return {
      showType: "",
      deviceArr: [
        {
          name: "YX-001颖享净水",
        },
      ],
      deviceTitle: "YX-001颖享净水",
    };
  },
  components: {
    CirclePercent,
    Unipopup,
  },
  computed: {
    navHeight() {
      return getApp().globalData.navHeight;
    }, // 头部胶囊高度
    navTop() {
      return getApp().globalData.navTop;
    }, // 头部胶囊高度
  },
  onLoad() {
    console.log(this.navHeight);
  },
  methods: {
    bindPickerChange(val) {
      console.log(val);
    },
    errHandle() {
      console.log(this.$refs);
      this.$refs.popup.open();
    },
    toRepair() {
      uni.navigateTo({
        url: "/subPackages/home/repair",
      });
    },
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
}
.circle-content {
  margin-top: 104rpx;
}
.home-back-content1 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.home-back1-text {
  margin-bottom: -100rpx;
  z-index: 7;
}
.home-back-img1 {
  width: 100%;
  height: 412rpx;
}
.device-check-img {
  margin-left: 8rpx;
  width: 27rpx;
  height: 16rpx;
}
.device-xiu-btn {
  position: absolute;
  bottom: 358rpx;
  right: 18rpx;
  width: 136rpx;
  height: 136rpx;
  background-color: #fff;
  border-radius: 50%;
  z-index: 9;
}
.device-xiu-img {
  width: 72rpx;
  height: 60rpx;
}
.device-bolang-img {
  width: 100%;
  height: 136rpx;
}
.device-bottom-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 406rpx;
  background-color: #fff;
}
.device-index-box {
  margin-top: 20rpx;
  width: 50%;
  height: 156rpx;
}
.device-left-content {
  border-right: 2rpx solid #ccccccff;
}
.device-add-img2 {
  margin-bottom: 10rpx;
  width: 48rpx;
  height: 48rpx;
}
.device-top-box {
  display: flex;
  align-items: flex-end;
  width: 100%;
}
.device-error-img {
  width: 80rpx;
  height: 80rpx;
  position: absolute;
  right: -116rpx;
  top: 18rpx;
}
.popup-show-content {
  width: 604rpx;
  height: 436rpx;
  border-radius: 20rpx;
  background-color: #fff;
}
.device-error-img2 {
  width: 100rpx;
  height: 100rpx;
}
.text-width-508 {
  line-height: 2;
  width: 508rpx;
  text-align: center;
}
.box-width-508 {
  width: 508rpx;
}
.device-btn-xiu {
  width: 212rpx;
  height: 80rpx;
  border-radius: 10rpx;
  background-color: #f1393bff;
}
.device-btn-xiu2 {
  width: 212rpx;
  height: 80rpx;
  border-radius: 10rpx;
  border: 2rpx solid #999;
}
</style>