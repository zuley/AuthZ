<script setup lang="ts">
import {getToken} from "./composables/useOtp.ts";
import {ref} from "vue";

const token = ref('')
const hanleGetToken = () => {
  token.value = getToken()
}

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
