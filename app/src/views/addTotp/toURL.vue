<script setup lang="ts">
import { ref } from 'vue'
import * as OTPAuth from "otpauth"
import {useTotpStore} from "../../store/totp.ts";
import {tr} from "vuetify/locale";

const totpStore = useTotpStore()

// 表单：地址
const url = ref('otpauth://totp/IT-Tools:demo-user?issuer=IT-Tools&secret=PV5USRLMJPGSIT7K&algorithm=SHA1&digits=6&period=30')
const urlRules = [
  (value: string) => {
    if (!value) return '必须输入地址链接'
    let errMsg = ''
    try {
      const totp = OTPAuth.URI.parse(value)
      console.log('ddd', totp)
      if (totpStore.getTotpBySecret(totp.secret.base32)) errMsg = '该密钥已存在'
    } catch (e) {
      errMsg = '必须为有效的 otpauth 链接'
    }
    if (errMsg) return errMsg
    return true
  },
]

// 表单：标题
const title = ref('')
const titleRules = [
  (value: string) => {
    if (!value) return '你必须填写标题'
    if (totpStore.getTotpByTitle(value)) return '标题已存在'
    return true
  },
]

// 提交表单
const dialog = ref(false)
async function submit(event: SubmitEventPromise) {
  const form = await event
  if (!form.valid) return
  const totp = OTPAuth.URI.parse(url.value)
  totpStore.add({
    title: title.value,
    data: Object.assign(totp, { secret: totp.secret.base32 })
  })
  // 添加成功后跳转回首页
  dialog.value = true
}

</script>

<template>
  <v-form @submit.prevent="submit" class="ma-3">
    <v-textarea
        label="地址链接"
        v-model="url"
        :rules="urlRules"
        variant="outlined"
    ></v-textarea>
    <v-text-field
        label="展示标题"
        v-model="title"
        :rules="titleRules"
    ></v-text-field>
    <v-btn type="submit" block class="mt-2">Submit</v-btn>
  </v-form>
  <v-dialog
      v-model="dialog"
      activator="parent"
      width="auto"
  >
    添加成功
    <v-card-actions>
      <v-btn color="primary" block @click="dialog = false">前往首页</v-btn>
    </v-card-actions>
  </v-dialog>
</template>

<style scoped>

</style>