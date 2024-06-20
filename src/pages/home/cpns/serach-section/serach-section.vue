<template>
  <div class="serach-section">
    <ul class="serach">
      <li class="item">今夜特价</li>
      <li class="item">贵州乌江寨国际旅游度假区</li>
      <li class="item">遵义会议会址-陈列馆广场</li>
      <li class="item">今夜特价</li>
    </ul>
    <div class="serach-btn">
      <div class="btn">开始搜索</div>
    </div>
    <div class="about-us">民宿预订服务由途家网提供</div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
</script>

<style lang="less" scoped>
.serach-section {
  padding: 10px 12px 0 16px;

  .serach {
    display: flex;
    flex-wrap: wrap;

    .item {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-right: 4px;
      margin-bottom: 4px;
      color: #3f4959;
      padding: 4px 8px;
      height: 22px;
      background-color: #f1f3f5;
      border-radius: 14px;
      line-height: 14px;
      box-sizing: border-box;
    }
  }

  .serach-btn {
    margin-top: 6px;
    height: 40px;

    .btn {
      color: #fff;
      font-size: 18px;
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
      background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
    }
  }
  .about-us {
    text-align: center;
    height: 32px;
    line-height: 32px;
    color: #ccc;
    font-size: 9px;
  }
}
</style>
