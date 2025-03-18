export default defineNuxtRouteMiddleware((to, from) => {
        const user = useSupabaseUser()
        
        console.log("auth", user, user.value)
        if (user.value) {
            return
        }

        return navigateTo(`/landing?redirectTo=${to.path}`)
})
