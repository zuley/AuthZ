<script lang="ts" setup>
import { ref, computed } from 'vue'
import { showNotify } from 'vant'
import { TOTP } from 'otpauth'
import { Secret } from '../../stores/totp'

const props = defineProps<{
  secretData: Secret
}>()
const otp = new TOTP(props.secretData)

const code = ref(otp.generate())

// 计算当前周期内剩余的秒数
const calculateTimeRemaining = () => {
  const currentTime = Math.floor(Date.now() / 1000)
  return props.secretData.period - (currentTime % props.secretData.period)
}
const timeRemaining = ref(calculateTimeRemaining());
// 定时更新剩余秒数
setInterval(() => {
  timeRemaining.value = calculateTimeRemaining()
  if (timeRemaining.value === 30) {
    code.value = otp.generate()
  }
}, 1000)

// 复制方法：点击复制图标触发复制文本到剪贴板
const onHandleCopy = () => {
  navigator.clipboard.writeText(code.value)
  showNotify({ type: 'success', message: '复制成功' });
}

// 进度
const progress = computed(() => {
  return Math.floor((timeRemaining.value / props.secretData.period) * 100)
})
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
      <van-rolling-text :height="50" :start-num="0" :target-num="parseInt(code)" :duration="0.2" />
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