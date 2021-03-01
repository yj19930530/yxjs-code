<template>
  <div class="recharge-recode-container">
    <div class="time-content">
      <picker mode="date" :value="date" @change="bindDateChange" fields="month">
        <div class="date-check-box fl-cen">
          <text class="fz-12">2021年2月</text>
          <image
            class="more-time-img"
            src="../../static/me/more-time.png"
          ></image>
        </div>
      </picker>
    </div>
    <div class="recode-list">
      <div class="recode-row-box fl-sb" v-for="item in 3" :key="item">
        <text class="fz-14 mr-l-32">2021年02月01日 13:03</text>
        <text class="fz-14 fw-bold mr-r-32">¥100</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
    };
  },
  methods: {
    bindDateChange(val) {
      console.log(val);
    },
  },
};
</script>

<style>
page {
  background-color: #f9fafbff;
}
</style>
<style scoped>
.date-check-box {
  width: 204rpx;
  height: 66rpx;
  background-color: #fff;
  border-radius: 33rpx 33rpx;
}
.more-time-img {
  margin-left: 12rpx;
  width: 18rpx;
  height: 12rpx;
}
.time-content {
  padding: 24rpx 20rpx;
}
.recode-row-box {
  width: 100%;
  height: 100rpx;
  background-color: #fff;
}
</style>