<script lang="ts" setup>
import useNews from '~/composables/useNews';

const news = await useNews();


</script>

<template>
  <div class="p-12  w-full max-w-7xl grow flex flex-col overflow-auto">
    <div class="flex mb-4" v-for="item in news" :key="item.id">
      <div class="w-full bg-btheme-brown h-36 p-4 rounded-md">
        <div class="text-3xl text-btheme-beige"> ● {{ item.title }}</div>
        <div class="text-xl text-btheme-beige">{{ item.highlight }}</div>
      </div>
    </div>
  </div>
</template>