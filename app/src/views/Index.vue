<script setup lang="ts">
import {useTotpStore} from "../store/totp.ts";
import {computed} from "vue";
import {useOtpInstance} from "../composables/useOtp.ts";
import { shell } from "@tauri-apps/api";

const totpStore = useTotpStore();
const totpStoreInstances = computed(() => {
  return totpStore.list.map(totp => {
    return useOtpInstance(totp)
  })
})

//
const handleToHomeSite = (e) => {
  console.log('跳转到官网', e)
  try {
    shell.open('https://authz.app')
  } catch (e) {
    console.error(e)
  }
}

</script>

<template>
  <!-- 头部 -->
  <div class="pa-3 d-flex justify-space-between align-center">
    <div class="text-h4">AuthZ</div>
    <div class="">
      <v-menu location="start">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" density="compact" icon="$plus" class="mr-3"></v-btn>
        </template>
        <v-list density="compact">
          <v-list-item value="qrcode" :to="{ path: '/addTotp/toURL' }">扫二维码</v-list-item>
          <v-list-item value="key">密钥添加</v-list-item>
          <v-list-item value="url">URL添加</v-list-item>
        </v-list>
      </v-menu>
      <v-menu location="start">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" density="compact" icon="$menu"></v-btn>
        </template>
        <v-list density="compact" @click:select="handleToHomeSite">
          <v-list-item value="qrcode">设置</v-list-item>
          <v-list-item value="key">关于</v-list-item>
          <v-list-item value="url">官网</v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
  <!-- 搜索 -->
  <div class="ma-3 d-flex align-center rounded-pill pa-2" style="background-color: rgba(0,0,0,.1)">
    <v-icon icon="mdi-magnify" size="x-small" class="mr-1"></v-icon>
    <input type="text" placeholder="搜索 . . ." class="flex-1-0 text-body-2" style="outline: none" />
  </div>
  <!-- 一次性密码 -->
  <v-card class="ma-3" v-for="(item, index) in totpStoreInstances" :title="totpStore.list[index].title" variant="tonal">
    <div class="text-center text-h2 pb-6">{{ item.token.val }}</div>
    <v-progress-linear
        :model-value="item.token.time/30 * 100"
        color="pink-lighten-1"
    ></v-progress-linear>
  </v-card>
</template>

<style scoped>

</style>