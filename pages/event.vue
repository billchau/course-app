<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const events = await useEvents();
import { faker } from '@faker-js/faker'
// let person = faker.image.urlLoremFlickr({ category: 'events', width: 512, height: 512 })
</script>

<template>
  <div class="p-12  w-full grow max-w-7xl flex flex-col">
    <!-- {{ events }} -->
    <Dialog class="flex" v-for="item in events" :key="item.id">
      <DialogTrigger as-child>
        <div
          class="w-full flex flex-row bg-btheme-brown h-36 p-2 mb-4 rounded-md cursor-pointer hover:bg-btheme-brownhover">
          <div class="w-1/6">
            <NuxtImg :src="item.imageUrl" :placeholder="[30, 20]" width="128" height="128" class="rounded" />
          </div>
          <div class="w-5/6">
            <div class="text-3xl text-btheme-beige"> ● {{ item.title }}</div>
            <div class="text-xl text-btheme-beige">{{ item.highlight }}</div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[525px] bg-btheme-beige text-btheme-darkbrown">
        <DialogHeader>
          <DialogTitle>{{ item.title }}</DialogTitle>
          <DialogDescription class="text-btheme-brown">
            {{ item.highlight }}
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <NuxtImg :src="item.imageUrl" :placeholder="[30, 20]" width="512" height="512" class="rounded" />
          {{ item.content }}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" class="bg-btheme-brown text-btheme-beige hover:bg-btheme-brownhover">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>