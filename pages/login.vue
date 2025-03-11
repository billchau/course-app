<template>
    <div class="flex flex-col text-3xl text-btheme-brown">
        Login to view the course
        <Button class="mt-8 bg-btheme-brown text-btheme-beige text-xl hover:bg-btheme-darkbrown" @click="login">
            Login
        </Button>
    </div>
</template>
<script setup lang="ts">
const supabase = useSupabaseClient()
const { query } = useRoute()
const user = useSupabaseUser()

const login = async () => {
    const redirectTo = `${window.location.origin}${query.redirectTo}`
    const response = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: { redirectTo }
    });

    if (response.error) {
        console.error(response.error);
    }
    console.log(response.data)
};


watchEffect(async () => {
    if (user.value) {
        await navigateTo(query.redirectTo as string, {
            replace: true
        })
    }
});
</script>