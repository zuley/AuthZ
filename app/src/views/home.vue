<script setup lang="ts">

</script>

<template>
  <!-- 头部 -->
  <div class="pa-3 d-flex justify-space-between align-center">
    <div class="text-h4">AutoZ</div>
    <div class="">
      <v-menu location="start">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" density="compact" icon="$plus" class="mr-3"></v-btn>
        </template>
        <v-list density="compact">
          <v-list-item value="qrcode">扫二维码</v-list-item>
          <v-list-item value="key">密钥添加</v-list-item>
          <v-list-item value="url">URL添加</v-list-item>
        </v-list>
      </v-menu>
      <v-menu location="start">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" density="compact" icon="$menu"></v-btn>
        </template>
        <v-list density="compact">
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
  <div class="d-flex align-center pa-3 pl-4 pr-4 ma-3 bg-amber rounded-xl" style="box-shadow: 0 0 10px rgba(0,0,0,.3)">
    <div class="flex-1-0">
      <div class="text-subtitle-2" style="color: rgba(255,255,255)">SEGI 服务器</div>
      <div class="text-h4 font-weight-black" style="color: #fff;">013987</div>
    </div>
    <v-progress-circular size="20" model-value="60" bg-color="rgba(255,255,255, .3)" color="#fff"></v-progress-circular>
  </div>
</template>

<style scoped>

</style>