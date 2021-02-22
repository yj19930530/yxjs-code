<template>
  <div class="repair-container">
    <div class="zhanwei"></div>
    <div class="person-address-content">
      <div class="mr-t-30">
        <text class="fz-15 fw-bold mr-l-30">成都恒大绿洲7栋3单元203</text>
        <div class="fl-al mr-l-30 mr-t-10">
          <text class="fz-14">张（先生）</text>
          <text class="fz-14 mr-l-10">18176569900</text>
        </div>
      </div>
      <image class="dashes-style" src="../../static/home/dashes.png"></image>
    </div>
    <div>
      <picker
        @change="bindPickerChange"
        :value="repairText"
        :range="deviceArr"
        range-key="name"
        mode="multiSelector"
      >
        <div class="picker-content fl-sb">
          <text class="fz-15 mr-l-30">报修类别</text>
          <div class="fl-al mr-r-30">
            <text class="fz-15 fc-999">请选择</text>
            <image class="more-style" src="../../static/home/more.png"></image>
          </div>
        </div>
      </picker>
      <picker
        @change="bindPickerChange"
        :value="repairText"
        :range="deviceArr"
        range-key="name"
        mode="multiSelector"
      >
        <div class="picker-content fl-sb">
          <text class="fz-15 mr-l-30">报修类别</text>
          <div class="fl-al mr-r-30">
            <text class="fz-15 fc-999">请选择</text>
            <image class="more-style" src="../../static/home/more.png"></image>
          </div>
        </div>
      </picker>
      <div class="picker-content fl-sb">
        <text class="fz-15 mr-l-30">问题描述</text>
        <text class="fz-15 fc-999 mr-r-30">0/300</text>
      </div>
      <textarea
        class="textarea-style"
        placeholder="请详细描述您的问题"
        placeholder-style="color:#999999FF;font-size:24rpx"
      ></textarea>
    </div>
    <div class="repair-img-content">
      <div class="fl-ccc add-img-box">
        <image class="addimg-style" src="../../static/home/addimg.png"></image>
        <span class="fz-12 fc-999">添加图片</span>
      </div>
    </div>
    <div
      class="fl-cen submit-btn"
      :class="[iPhoneType === -1 ? '' : 'dianzi-style']"
      @tap="submitForm"
    >
      <text class="fz-17 fc-fff fw-bold">确认提交</text>
    </div>
  </div>
</template>

<script>
import { common } from "../../utils/index";
const graceChecker = require("../../utils/graceChecker");
export default {
  data() {
    return {
      repairText: "类别",
      iPhoneType: -1,
      deviceArr: [
        [
          {
            name: "维修",
          },
        ],
        [
          {
            name: "维修",
          },
        ],
        [
          {
            name: "维修",
          },
        ],
      ],
      rules: [
        {
          name: "loanType",
          checkType: "notnull",
          errorMsg: "请选择业务品种",
        },
      ],
    };
  },
  onLoad() {
    let t = common.iPhoneReturn(this.phoneModel);
    console.log(this.phoneModel);
    this.iPhoneType = t ? -1 : 0;
  },
  computed: {
    phoneModel() {
      return getApp().globalData.model;
    },
  },
  methods: {
    bindPickerChange(val) {
      console.log(val);
    },
    submitForm() {
      //   const val = graceChecker.check(this.form, this.rules);
      //   if (val) {
      //     uni.showModal({
      //       title: "提示",
      //       content: "保存成功",
      //       showCancel: false,
      //       confirmText: "返回",
      //       success: function (res) {
      //         uni.navigateBack();
      //       },
      //     });
      //   } else {
      //     toast.showToast(graceChecker.error);
      //   }
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
.repair-container {
  padding-bottom: 98rpx;
}
.zhanwei {
  width: 100%;
  height: 20rpx;
  background-color: #f8f8f8ff;
}
.person-address-content {
  width: 100%;
}
.dashes-style {
  margin-top: 18rpx;
  width: 100%;
  height: 8rpx;
}
.picker-content {
  width: 100%;
  height: 108rpx;
  border-bottom: 1px solid #f2f2f2ff;
}
.picker-content2 {
  width: 100%;
  height: 108rpx;
}
.more-style {
  margin-left: 8rpx;
  width: 12rpx;
  height: 20rpx;
}
.textarea-style {
  width: 690rpx;
  height: 150rpx;
  padding: 30rpx;
}
.repair-img-content {
  padding: 30rpx;
  display: flex;
  flex-wrap: wrap;
}
.addimg-style {
  width: 24rpx;
  height: 24rpx;
}
.add-img-box {
  width: 152rpx;
  height: 152rpx;
  border: 1px solid #f2f2f2ff;
}
.submit-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 98rpx;
  z-index: 9;
  background-color: #4bbcfbff;
}
</style>   