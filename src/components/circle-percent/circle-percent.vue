<template>
  <view class="box">
    <view class="cp-content fl-cen">
      <image class="cp-img-back" src="../../static/home/line-ban.png"></image>
      <view class="boxContent">
        <view class="boxContent2">
          <view class="before" :style="{ top: 100 - percent + '%' }"></view>
          <view class="jd" :style="{ background: bg }"></view>
          <view class="after" :style="{ top: 100 - percent + '%' }"></view>
        </view>
        <view class="percent">{{ percent }}%</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "circle-percent",
  props: {
    bg: {
      type: String,
      default: "red",
    },
    percent: {
      type: String,
      default: "0",
    },
    showType: {
      type: String,
      default: "0",
    },
  },
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.cp-content {
  position: relative;
  width: 410rpx;
  height: 410rpx;
  border-radius: 50%;
  border: 2px solid #fff;
}
.box {
  width: 33%;
  text-align: center;
  margin: 20rpx 0;
}
.cp-img-back {
  position: absolute;
  left: -30rpx;
  top: -32rpx;
  width: 238rpx;
  height: 468rpx;
}
.boxContent {
  width: 378rpx;
  height: 378rpx;
  border-radius: 50%;
}

.boxContent2 {
  position: relative;
  width: 378rpx;
  height: 378rpx;
  border-radius: 50%;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
}
.before,
.after {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  top: 0;
  left: 50%;
  background-color: rgb(225, 225, 225, 0.4);
  border-radius: 45%;
  transform: translate(-50%, -100%) rotate(0);
  animation: rotate 6s linear infinite;
}

.after {
  border-radius: 44%;
  background-color: rgba(255, 255, 255, 0.9);
  transform: translate(-50%, -100%) rotate(0);
  animation: rotate 10s linear -5s infinite;
}

@keyframes rotate {
  50% {
    transform: translate(-50%, -103%) rotate(180deg);
  }

  100% {
    transform: translate(-50%, -100%) rotate(360deg);
  }
}

.jd {
  width: 100%;
  height: 100%;
  bottom: 0;
  overflow: hidden;
  border-radius: 50%;
}

.percent {
  font-size: 36rpx;
  font-weight: bold;
  position: absolute;
  top: 52rpx;
  width: 100%;
  text-align: center;
}
</style>
