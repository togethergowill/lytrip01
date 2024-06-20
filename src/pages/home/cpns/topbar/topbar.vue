<template>
  <header class="topbar">
    <div class="topbar-section">
      <div class="title">
        <img class="picture" src="@/assets/img/home/topbar.png" alt="" />
      </div>
      <div class="topbar-right">
        <i class="menu"></i>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, reactive } from "vue"
</script>

<style lang="less" scoped>
.topbar {
  position: relative;
  height: 44px;

  .topbar-section {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding: 0 75px 0 75px;
    height: 44px;

    .title {
      text-align: center;
      width: 100%;
      height: 44px;

      .picture {
        margin-top: 10px;
        width: 85px;
        height: 25px;
      }
    }

    .topbar-right {
      position: absolute;
      top: 5px;
      right: 10px;
      line-height: 13px;
      padding: 10px;

      .menu {
        display: inline-block;
        width: 20px;
        height: 15px;
        background: url("@/assets/img/home/icon-right-menu.png");
        background-size: 20px 15px;
      }
    }
  }
}
</style>
