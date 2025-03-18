<template>
    <div class="grow text-xl text-btheme-brown">Welcome back {{name}}</div>
</template>
<script setup lang="ts">
const user = useSupabaseUser()
const name = computed(
    () => user.value?.user_metadata.full_name
);
</script>