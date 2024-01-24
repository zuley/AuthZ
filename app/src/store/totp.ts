import { defineStore } from "pinia"
import {ref} from "vue";

export type Totp = {
  /* 令牌发布人 */
  issuer?: string
  /* 令牌标签 */
  label?: string
  /* 是否在令牌标签中显示发布人 */
  issuerInLabel?: boolean
  /* 令牌密钥 */
  secret: string
  /* 令牌算法 - 默认值 SHA1 */
  algorithm?: string
  /* 令牌位数 - 默认值 6 */
  digits?: number
  /* 令牌步长秩序时间 - 默认值 30 */
  period?: number
}

export type TotpStore = {
  title: string
  data: Totp
}

export const useTotpStore = defineStore('totp', () => {
  const list = ref<TotpStore[]>([])
  // 添加配置
  function add (totp: TotpStore) {
    list.value.push(totp)
  }
  // 通过 title 获取配置
  function getTotpByTitle (title: string) {
    return list.value.find((item) => item.title === title)
  }
  // 通过 secret 获取配置
  function getTotpBySecret (secret: string) {
    return list.value.find((item) => item.data.secret === secret)
  }
  return { list, add, getTotpByTitle, getTotpBySecret }
}, { persist: true })