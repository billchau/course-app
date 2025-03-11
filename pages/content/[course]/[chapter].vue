<template>
    <div v-if="chapterContent">
        <div class="text-3xl mb-4">{{ chapterContent.title }}</div>
        <div class="text-xl mb-4">{{ chapterContent.video_url }}</div>
        <div class="text-xl mb-4">{{ chapterContent.highlight }}</div>
        <div class="text-xl mb-4">{{ chapterContent.content }}</div>
    </div>
    <div v-else>
        <div class="flex flex-col text-4xl">
            <p>Course content not found</p>
            <div class="mt-5 text-4xl">
                <p>
                    Go to
                    <a class="underline hover:cursor-pointer" @click="handleError"> latest news </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import useCourse from '~/composables/useCourse';

const course = await useCourse();
const courseId = useRoute().params.course
const courseItem = computed(() => course.value.find(course => course.id.toString() === courseId))
const chapterId = useRoute().params.chapter
const chapterContent = computed(() => courseItem.value?.chapters.find(chapter => chapter.id.toString() === chapterId))


definePageMeta({
    middleware:
        [async function ({ params }, from) {
            // async validate({ params }) {
            const course = await useCourse();

            const courseId = params.course
            const courseItem = computed(() => course.value.find(course => course.id.toString() === courseId))
            console.log("courseItem", courseItem.value)
            if (!courseItem.value) {
                return abortNavigation(createError({
                    statusCode: 404,
                    message: 'Chapter not found',
                })
                );
            }

            const chapterId = params.chapter
            const chapterContent = computed(() => courseItem.value?.chapters.find(chapter => chapter.id.toString() === chapterId))
            console.log("chapterContent", chapterContent.value)
            if (!chapterContent.value) {
                return abortNavigation(createError({
                    statusCode: 404,
                    message: 'Lesson not found',
                })
                );
            }
            // return true
        },
            'auth'
        ]
});

const handleError = () => {
    clearError({
        redirect: "/",
    });
};
</script>