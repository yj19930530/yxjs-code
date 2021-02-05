<template>
  <view class="home-container fl-cc">
    <div :style="[{ height: navHeight + 'px' }]"></div>
    <text class="fz-16 fc-fff fw-bold mr-t-20">暂无设备</text>
    <CirclePercent :bg="'#108EE9FF'" percent="40" :showType="'add'" />
  </view>
</template>

<script>
import CirclePercent from "../../components/circle-percent/circle-percent";
export default {
  data() {
    return {};
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
</style>