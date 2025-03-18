<template>
    <div v-if="user" class="rounded p-3 flex items-center space-x-3 bg-btheme-beige">
        <img class="rounded-full w-12 h-12 border-2 border-white" :src="profile" />
        <div class="text-right">
            <div class="font-medium text-btheme-brown">{{ name }}</div>
            <button class="text-sm underline text-btheme-brown" @click="logout">
                Log out
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error(error);
        return;
    }

    await navigateTo('/');
};

user.value.email
const name = computed(
    () =>  {
        if (user.value?.user_metadata.full_name)
            return user.value?.user_metadata.full_name
        else {
            return user.value.email
        }
    }
);
const profile = computed(
    () => user.value?.user_metadata.avatar_url ? user.value?.user_metadata.avatar_url : 'bitcoin-logo.png'
);
</script>