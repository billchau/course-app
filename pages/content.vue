<script lang="ts" setup>
import useCourseIndex from '~/composables/useCourseIndex';

const course = await useCourseIndex();
// const resetError = async (error) => {
//     await navigateTo("/")
//     error.value = null
// }
// const chapterPath = computed((courseid, chapterid) => {
//  return /content/couse
// })
</script>

<template>
    <div class="p-12 w-full grow flex flex-row max-w-7xl">
        <!-- navigation -->
        <div class="min-w-[25ch] max-w-[40ch]">
            <div class="mb-8 " v-for="courseItem in course" :key="courseItem.id">
                <h1 class="text-2xl bold">{{ courseItem.title }}</h1>
                <NuxtLink class="mt-4" v-for="chapterItem in courseItem.chapters" :key="chapterItem.id"
                    :to="`/content/${courseItem.id}/${chapterItem.id}`">
                    <div class="text-xl mt-2" :class="{
                        'underline': $route.params.chapter == chapterItem.id.toString()
                    }">
                        ● {{ chapterItem.title }}
                    </div>
                </NuxtLink>
            </div>
        </div>
        <!-- contents -->
        <div class="flex ml-8 w-[75ch]">
            <NuxtErrorBoundary>
                <NuxtPage />
                <template #error="{ error }">
                    <p>
                        Oh no, something went wrong with the lesson!
                        <code>{{ error }}</code>
                    </p>
                    <!-- <p>
                        <button class="hover:cursor-pointer bg-gray-500 text-white font-bold py-1 px-3 rounded"
                            @click="resetError(error)">
                            Reset
                        </button>
                    </p> -->
                </template>
            </NuxtErrorBoundary>
        </div>
    </div>
</template>