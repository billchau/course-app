<template>
  <div class="text-btheme-beige">Waiting for login...</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const { query } = useRoute();

watch(
  user,
  () => {
    console.log("cofnrimat and redirect to ", query.redirectTo)
    if (user.value) {
      
      const to = (query.redirectTo as string) ?? '/content';
      return navigateTo(to, {
        replace: true,
      });
    }
  },
  { immediate: true }
);
</script>
