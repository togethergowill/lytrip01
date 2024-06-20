<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData">
      <routerLink
        class="item"
        :to="item.path"
      >
        <img
          class="icon"
          :src="require('@/assets/img/' + item.imageActive)"
          v-if="index === activeIndex"
        />
        <img class="icon" :src="require('@/assets/img/' + item.image)" v-else />
        <span class="text" :class="{ active: index === activeIndex }"
          >{{ item.text }}
        </span>
      </routerLink>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import tabbarData from "@/assets/data/tabbar"
import { useRoute } from "vue-router"

const activeIndex = ref(0)
const route = useRoute()
watch(route, newRoute => {
  const index = tabbarData.findIndex(item=>item.path === newRoute.path)
  if(index === -1) return 
  activeIndex.value = index
})
</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 55px;

  .item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #333;

    .icon {
      width: 40px;
    }

    .text {
      font-size: 12px;

      &.active {
        color: #ff9645;
      }
    }
  }
}
</style>
