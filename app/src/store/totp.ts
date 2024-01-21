import { defineStore } from "pinia"

export type TotpStore = {
  /* 令牌发布人 */
  issuer?: string
  /* 令牌标签 */
  label: string
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

export const useTotpStore = defineStore('totp', {
  state: () => ({
    /* 令牌列表 */
    list: [
      {
        secret: 'CFSNOYYTYTQAWL7Y',
      }
    ] as TotpStore[]
  })
})