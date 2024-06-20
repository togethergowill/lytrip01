<template>
  <div class="home">
    <topbar></topbar>
    <div class="swiper-content"></div>
    <checkin-section />
    <serach-section />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import topbar from "./cpns/topbar/topbar.vue"
import checkinSection from "./cpns/checkin-section/checkin-section.vue"
import serachSection from "./cpns/serach-section/serach-section.vue"
import useMianStore from "@/stores/moudles/main";

const mianStore = useMianStore()

mianStore.getLoactionInfo()



</script>

<style scoped>
.swiper-content {
  width: 100%;
  height: 124px;
  background: url("https://pic.tujia.com/upload/festatic/publicImages/homebannerdefault.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
