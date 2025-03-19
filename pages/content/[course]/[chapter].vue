<template>
    <div>
    <div v-if="course && chapter">
        <div class="text-3xl mb-4">{{ chapter.title }}</div>
        <div class="text-xl mb-4">
            <iframe width="560" height="315" :src="chapter.videoUrl" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="text-xl mb-4">{{ chapter.highlight }}</div>
        <div class="text-xl mb-4">{{ chapter.content }}</div>
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
</div>
</template>

<script lang="ts" setup>
import useCourse from '~/composables/useCourse';

const courseId = useRoute().params.course as string
const chapterId = useRoute().params.chapter as string

const course = await useCourse(courseId, chapterId);
const chapter = course.value.chapters
definePageMeta({
    middleware:
        [async function ({ params }, from) {
            // async validate({ params }) {
            const course = await useCourseIndex();

            const courseId = params.course
            const courseItem = computed(() => course.value.find(course => course.id.toString() === courseId))

            if (!courseItem.value) {
                return abortNavigation(createError({
                    statusCode: 404,
                    message: 'Chapter not found',
                })
                );
            }

            const chapterId = params.chapter
            const chapterContent = computed(() => courseItem.value?.chapters.find(chapter => chapter.id.toString() === chapterId))

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