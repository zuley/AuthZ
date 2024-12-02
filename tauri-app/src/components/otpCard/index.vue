<script setup>
import { ref } from 'vue'
import { showNotify } from 'vant'

// 复制方法：点击复制图标触发复制文本到剪贴板
const onHandleCopy = () => {
  navigator.clipboard.writeText('cao')
  showNotify({ type: 'success', message: '复制成功' });
}

// 进度
const progress = ref(0)
setTimeout(() => {
  progress.value = 50
}, 1000)
</script>

<template>
  <div class="m-card bg-gray-100 m-4 rounded-lg">
    <div class="flex justify-between items-center py-2 px-4">
      <div class="title">zuley</div>
      <div class="more">
        <van-icon name="more" size="20" />
      </div>
    </div>
    <div class="number flex justify-center items-center py-4 cursor-pointer">
      <van-rolling-text :height="50" :start-num="0" :target-num="123456" :duration="0.5" />
      <van-icon class="ml-2" name="description-o" size="30" @click="onHandleCopy" />
    </div>
    <van-progress :percentage="progress" />
  </div>
</template>

<style scoped>
.m-card {
  .number {
    --van-rolling-text-color: #333;
    --van-rolling-text-font-size: 50px;
    --van-rolling-text-gap: 6px;
    --van-rolling-text-item-width: 40px;
  }
}
</style>