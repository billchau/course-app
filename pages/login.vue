<template>
    <div class="flex flex-col text-3xl text-btheme-brown" v-if="!completeMsg">

        <div class="">Sign up / Sign in to view the course</div>

        <div class="mt-8 grid text-xl w-full items-center gap-1.5">
            <Label for="picture">Username (email)</Label>
            <Input type="email" placeholder="example@example.com" v-model="email" />
        </div>
        <div class="mt-4 grid w-full text-xl items-center gap-1.5">
            <Label for="picture">Password</Label>
            <Input type="password" v-model="pw" />
        </div>
        <div class="mt-4 grid w-full  items-center gap-1.5">
            <Label for="picture">Confirm password (Not required for signing in)</Label>
            <Input type="password" v-model="confirmPw" />
        </div>

        <div v-if="hasError">
            <ul v-for="errorItem in errorMsg">
                <li class="ml-8 mt-2 list-disc text-red-800 text-sm">{{ errorItem }}</li>
            </ul>
        </div>

        <div class="mt-4">
            <Button class="mt-4 mr-4 bg-btheme-brown text-btheme-beige text-xl hover:bg-btheme-darkbrown"
                @click="validate(true)">
                Sign Up
            </Button>
            <Button class="mt-4 bg-btheme-brown text-btheme-beige text-xl hover:bg-btheme-darkbrown"
                @click="validate(false)">
                Sign In
            </Button>
        </div>

        <div class="mt-8">Or </div>

        <Button class="mt-4 bg-btheme-brown text-btheme-beige text-xl hover:bg-btheme-darkbrown" @click="login">
            Login with Github
        </Button>
    </div>
    <div v-else class="flex flex-col text-3xl text-btheme-brown">Please check your email box</div>
</template>
<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
const completeMsg = ref(false)

const supabase = useSupabaseClient()
const { fullPath, query, redirectedFrom, path } = useRoute()
const user = useSupabaseUser()

const email = ref("");
const pw = ref("");
const confirmPw = ref("");
const errorMsg = ref<string[]>([]);
const display = ""

const hasError = computed(() => errorMsg.value.length > 0)



const validate = async (isSignUp: boolean) => {
    errorMsg.value = []
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email.value)) {
        errorMsg.value.push("Invalid Email address")
    }
    if (pw.value.length < 8 || pw.value.length > 16) {
        errorMsg.value.push("Password length should between 8 to 16 digits")
    }

    if (isSignUp && pw.value != confirmPw.value) {
        errorMsg.value.push("Password and confirmed password does not match")
    }

    if (errorMsg.value.length == 0) {
        if (isSignUp) {
            await signUpNewUser()
        } else {

            await signInWithEmail()
        }
    }
}

async function signInWithEmail() {
    
    console.log("logining in")
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: pw.value,
    })

    if (error) {
        errorMsg.value.push(error)
    } else {
        await navigateTo("/content")
    }
}
async function signUpNewUser() {
    console.log("signingup")
    const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: pw.value,
        options: {
            emailRedirectTo: '/content',
        },
    })
    if (error) {
        errorMsg.value.push(error)
    } else if (data) {
        completeMsg.value = true
    }
    
}

const login = async () => {
    const redirectTo = `${window.location.origin}${query.redirectTo}`
    const response = await supabase.auth.signInWithOAuth({
        provider: 'github',
    });
    console.log(response.data)
    if (response.error) {
        console.error(response.error);
    } else {
        await navigateTo("/content")
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