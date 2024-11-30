<script setup>
import OtpCard from '../components/otpCard/index.vue'
</script>

<template>
  <div class="p-home h-dvh flex flex-col">
    <van-nav-bar title="AuthZ">
      <template #right>
        <router-link to="/test">
          <van-icon name="plus" size="20" />
        </router-link>
      </template>
    </van-nav-bar>
    <div class="overflow-y-auto flex-1">
      <OtpCard v-for="item in 10" />
    </div>
  </div>
</template>

