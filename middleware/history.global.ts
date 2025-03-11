import { useLocalStorage

 } from "@vueuse/core";
export default defineNuxtRouteMiddleware((to, from) => {
    const navigationHistory = useLocalStorage('history', []);
    navigationHistory.value.push(to.path);
    console.log(`Nav history: ${navigationHistory.value.join('\n')}`)
  });
  