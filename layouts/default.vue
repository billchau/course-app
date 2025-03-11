<template>
  <div class="bg-btheme-beige w-full h-full min-h-screen flex flex-col items-center">
    <!-- banner -->
    <div class="w-full mx-auto relative h-48">
      <div class="w-full h-48 bg-btheme-black absolute">
        <div class="text-btheme-beige text-center p-20 text-5xl">
          B The Best
        </div>
      </div>
      <img src="/public/bitcoin-logo.png" alt="Bitcoin logo" class="w-36 h-36 items-center absolute top-4 left-4" />
      <div class="absolute right-4 bottom-4 text-white">
        <Icon class="w-8 h-8 mx-4 cursor-pointer" name="logos:youtube-icon"
          @click="externalUrl('https://www.youtube.com')" />
        <Icon class="w-8 h-8 mx-4 cursor-pointer" name="logos:twitter" @click="externalUrl('https://x.com')" />
        <Icon class="w-8 h-8 mx-4 cursor-pointer" name="logos:facebook"
          @click="externalUrl('https://www.facebook.com')" />
      </div>
      <div v-if="user" class="absolute right-4 top-4 text-white">
        <UserCard />
      </div>
      <div v-else class="absolute right-4 top-4 text-white"> place holder</div>
    </div>
    <!-- menu -->
    <div class="w-full bg-blue-500 h-12">
      <NavigationMenu class="max-w-full bg-btheme-brown h-12">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/"
              class="h-12 mx-8 bg-btheme-brown hover:bg-btheme-darkbrown text-btheme-beige text-xl hover:text-btheme-beige"
              :class="navigationMenuTriggerStyle()">
              News
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/event"
              class="h-12 mx-8 bg-btheme-brown hover:bg-btheme-darkbrown text-btheme-beige text-xl hover:text-btheme-beige"
              :class="navigationMenuTriggerStyle()">
              Events
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/content"
              class="h-12 mx-8 bg-btheme-brown hover:bg-btheme-darkbrown text-btheme-beige text-xl hover:text-btheme-beige"
              :class="navigationMenuTriggerStyle()">
              Course
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/profile"
              class="h-12 mx-8 bg-btheme-brown hover:bg-btheme-darkbrown text-btheme-beige text-xl hover:text-btheme-beige"
              :class="navigationMenuTriggerStyle()">
              Profile
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <div class="mt-12">
      <slot />
    </div>
    <!-- <div class="">
      <slot class="bg-blue-500" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import UserCard from "~/components/ui/UserCard.vue";

const externalUrl = async (url: string) => {
  await navigateTo(url, {
    open: {
      target: "_blank",
    },
  });
};

useHead({
  title: "B the best",
});

const user = useSupabaseUser()

const name = computed(
  () => user.value?.user_metadata.full_name
)
const profile = computed(
  () => user.value?.user_metadata.avatar_url
)

watchEffect(async () => {
  if (user.value) {
    console.log("login", name)
  }
});

const { auth } = useSupabaseClient();

const logout = async () => {
  const { error } = await auth.signOut()

  if (error) {
    console.error(error)
    return
  }

  await navigateTo("/")
}

</script>
