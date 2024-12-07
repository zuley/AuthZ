<script setup>
import OtpCard from '../components/otpCard/index.vue'
import { useTotpStore } from '../stores/totp'

const totpStore = useTotpStore()
</script>

<template>
  <div class="p-home h-dvh flex flex-col">
    <van-nav-bar title="AuthZ">
      <template #right>
        <router-link to="/add">
          <van-icon name="plus" size="20" />
        </router-link>
      </template>
    </van-nav-bar>
    <div class="overflow-y-auto flex-1">
      <OtpCard v-for="item in totpStore.secrets" :secretData="item" />
    </div>
  </div>
</template>

