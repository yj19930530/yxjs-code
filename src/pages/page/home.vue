<template>
  <view class="home-container fl-cc">
    <div :style="[{ height: navHeight + 'px' }]"></div>
    <text class="fz-16 fc-fff fw-bold mr-t-40">暂无设备</text>
    <CirclePercent
      class="circle-content"
      :bg="'#108EE9FF'"
      percent="10"
      :showType="showType"
    />
    <div class="fl-ccc home-back-content1" v-if="showType==='add'">
      <div class="fl-ccc home-back1-text">
        <text class="fz-16 fc-fff">全民共享健康饮水</text>
        <text class="fz-16 fc-fff mr-t-30">领先技术/卓越产品/创新模式/智能物联</text>
      </div>
      <image
        class="home-back-img1"
        src="../../static/home/home-bottom.png"
      ></image>
    </div>

  </view>
</template>

<script>
import CirclePercent from "../../components/circle-percent/circle-percent";
export default {
  data() {
    return {
      showType:''
    };
  },
  components: {
    CirclePercent,
  },
  computed: {
    navHeight() {
      return getApp().globalData.navHeight;
    },
  },
  onLoad() {
    console.log(this.navHeight);
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
  background-color: #4bbcfbff;
}
.circle-content {
  margin-top: 134rpx;
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
</style>