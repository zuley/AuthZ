<script setup>
import { useRouter } from 'vue-router'
import Secret from '../components/add/secret.vue'

const router = useRouter()
</script>

<template>
  <div class="p-home h-dvh flex flex-col bg-gray-100">
    <van-nav-bar
      title="添加令牌"
      left-text="返回"
      left-arrow
      @click-left="router.back()"
    >
      <template #right>
        <router-link to="/add">
          <van-icon name="plus" size="20" />
        </router-link>
      </template>
    </van-nav-bar>
    <van-tabs>
      <van-tab title="密钥">
        <Secret />
      </van-tab>
      <van-tab title="二维码">内容 2</van-tab>
      <van-tab title="URL">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

