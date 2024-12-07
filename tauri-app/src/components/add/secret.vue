<script setup>
import { ref } from 'vue'
import { useTotpStore } from '../../stores/totp'
import { showNotify } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()
const totpStore = useTotpStore()

// 密钥
const secret = ref('')
const secretRules = [
  { required: true, message: '请输入密钥' },
  { pattern: /^[A-Za-z0-9]+$/, message: '密钥只能包含字母和数字' }
]
// 应用名称
const issuer = ref('')
// 应用名称规则
const issuerRules = [
  { required: true, message: '请输入应用名称' }
]
// 标签
const label = ref('')
// 标签规则
const labelRules = [
  { required: true, message: '请输入标签' }
]
// 算法
const algorithm = ref('SHA-1')
// 算法选择器
const showPicker = ref(false)
// 算法选择器列
const columns = ref([
  { text: 'SHA-1', value: 'sha1' },
  { text: 'SHA-256', value: 'sha256' },
])
const onConfirm = ({ selectedOptions }) => {
  algorithm.value = selectedOptions[0].text
  showPicker.value = false
}
// 位数
const digits = ref(6)
const digitsRules = [
  { required: true, message: '请输入位数' }
]
// 周期
const period = ref(30)
const periodRules = [
  { required: true, message: '请输入周期' }
]
// 提交
const onSubmit = (e) => {
  // 查找当前密钥是否存在，如果存在则报错，否则添加密钥
  const secretStr = totpStore.getSecret(secret.value)
  if (secretStr) {
    showNotify({
      type: 'danger',
      message: '密钥已存在'
    })
    return
  }
  totpStore.addSecret({
    secret: secret.value,
    issuer: issuer.value,
    label: label.value,
    algorithm: algorithm.value,
    digits: digits.value,
    period: period.value
  })
  // 提示添加成功，并返回
  showNotify({
    type: 'success',
    message: '添加成功'
  })
  router.back()
}
const onFailed = (errorInfo) => {
  console.log('failed', errorInfo)
  showNotify({
    type: 'danger',
    message: errorInfo.errors.message
  })
}
</script>

<template>
  <div class="p-4">
    <van-form colon validate-trigger="onSubmit" @submit="onSubmit" @failed="onFailed">
      <van-field v-model="secret" label="密钥" placeholder="请输入密钥" :rules="secretRules" />
      <van-field v-model="issuer" label="名称" placeholder="请输入服务名称" :rules="issuerRules" />
      <van-field v-model="label" label="标签" placeholder="请输入标签" :rules="labelRules" />
      <van-field
        v-model="algorithm"
        is-link
        readonly
        label="算法"
        placeholder="点击选择算法"
        @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>

      <van-field v-model="digits" label="位数" type="digit" placeholder="请输入位数" :rules="digitsRules" />
      <van-field v-model="period" label="周期(秒)" type="digit" placeholder="请输入周期" :rules="periodRules" />
      <div class="mt-4">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
