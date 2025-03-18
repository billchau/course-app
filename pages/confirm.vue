<template>
  <div class="text-btheme-beige">Waiting for login...</div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const { query } = useRoute();

watch(
  user,
  () => {
    if (user.value) {
      console.log("confirm and redirect", query.redirectTo)
      const to = (query.redirectTo as string) ?? '/content';
      return navigateTo(to, {
        replace: true,
      });
    }
  },
  { immediate: true }
);
</script>
