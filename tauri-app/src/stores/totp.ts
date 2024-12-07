import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Secret = {
  // 密钥
  secret: string
  // 应用名称
  issuer: string
  // 标签
  label: string
  // 算法
  algorithm: string
  // 位数
  digits: number
  // 周期
  period: number
}

export const useTotpStore = defineStore('totp', () => {
  const secrets = ref<Secret[]>([])
  // 添加密钥
  const addSecret = (secret: Secret) => {
    secrets.value.push(secret)
  }
  // 按 secret 删除密钥
  const deleteSecret = (secret: string) => {
    secrets.value = secrets.value.filter(s => s.secret !== secret)
  }
  // 按 secret 更新密钥为接收到的密钥
  const updateSecret = (secret: string, newSecret: Secret) => {
    secrets.value = secrets.value.map(s => s.secret === secret ? newSecret : s)
  }
  // 按 secret 获取密钥
  const getSecret = (secret: string) => {
    return secrets.value.find(s => s.secret === secret)
  }
  return {
    secrets,
    addSecret,
    deleteSecret,
    updateSecret,
    getSecret
  }
}, { persist: true })