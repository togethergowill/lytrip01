<template>
  <div class="checkin-section">
    <div class="location-info bottom-gray-line">
      <div class="address">遵义</div>
      <div class="my-location">
        <span class="text">我的位置</span>
        <i class="icon"></i>
      </div>
    </div>
    <div class="time-info bottom-gray-line">
      <div class="checkin info">
        <span class="text">入住</span>
        <div class="time">6月17日</div>
      </div>
      <div class="total-day">共1晚</div>
      <div class="leaveout info">
        <span class="text">离店</span>
        <div class="time">6月18日</div>
      </div>
    </div>
    <div class="price-info input-con bottom-gray-line">
      <div class="price">价格不限</div>
      <div class="people">人数不限</div>
    </div>
    <div class="keyword-input input-con bottom-gray-line">
      关键字/位置/民宿名
    </div>

    <van-calendar 
      v-model:show="show" 
      type="range" 
      :formatter="formatter" 
      color="#ff9645"
      @confirm="confirm"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
const show = ref(true)
  // 3.1 点击日历确认键后，获取日历的数据，并赋值给入住时间和离开时间

  // 3.2 标注入店和离店的flag
  const formatter = (day) => {
    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();
    if (day.type === 'start') {
      day.bottomInfo = '入住';
    } else if (day.type === 'end') {
      day.bottomInfo = '离店';
    }
    return day;
  };
</script>

<style lang="less" scoped>
.checkin-section {
  .location-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;

    .address {
      padding-left: 20px;
      color: #333;
    }

    .my-location {
      display: flex;
      align-items: center;
      padding-right: 20px;
      color: #666;
      font-size: 12px;

      .text {
        margin-right: 8px;
      }

      .icon {
        width: 18px;
        height: 18px;
        background: url("https://pic.tujia.com/upload/festatic/publicImages/icon-weizhi-tujia.png")
          no-repeat center / 100% 100%;
        margin-bottom: 2px;
      }
    }
  }

  .time-info {
    display: flex;
    justify-content: space-between;
    height: 44px;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .text {
        font-size: 10px;
        margin-bottom: 3px;
        color: #999;
      }

      .time {
        font-size: 15px;
        color: #333;
      }
    }

    .checkin {
      padding-left: 20px;
    }

    .total-day {
      flex: 1;
      line-height: 44px;
      font-size: 12px;
      color: #666;
      text-align: center;
    }

    .leaveout {
      padding-right: 20px;
      min-width: 30%;
    }
  }

  .input-con {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #999;
    height: 40px;
    padding: 0 20px;

    .price {
      width: 60%;
    }

    .people {
      padding-left: 20px;
      border-left: 1px solid #f8f9f9;
    }
  }
}
</style>
