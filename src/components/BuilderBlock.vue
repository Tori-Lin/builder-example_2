<!-- src/components/BuilderBlock.vue -->
<template>
  <!-- 當撈到內容或是在 Builder 後台預覽時，渲染出 Builder 的組件 -->
  <RenderContent
    v-if="content || isPreviewing"
    model="page"
    :content="content"
    :api-key="apiKey"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RenderContent, getContent, isPreviewing } from '@builder.io/sdk-vue';

// 🌟 1. 填入你的 Public API Key
const apiKey = 'fb98adf93ad5467180329fdaa9711f27'; 

const content = ref(null);

onMounted(async () => {
  // 🌟 2. 處理 Hash 路由的路徑問題
  // 把網址中的 '#' 拿掉（例如 '/#/about' 變成 '/about'），這樣 Builder 雲端才認得
  const currentPath = window.location.hash.replace('#', '') || '/';
  
  content.value = await getContent({
    model: 'page',
    apiKey: apiKey,
    userAttributes: {
      urlPath: currentPath,
    },
  });
});
</script>
