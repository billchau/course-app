import {serverSupabaseUser} from '#supabase/server'

export default defineEventHandler(async(event) => {
    const cookies = parseCookies(event);
    // console.log("event", event)
    console.log("evencookiest", cookies)


    if (cookies['sb-phfwoykehgeymzdyvjra-auth-token.0'] && cookies['sb-phfwoykehgeymzdyvjra-auth-token.1']) {
        const user = await serverSupabaseUser(event)
        event.context.user = user;
    }

    // const user = await serverSupabaseUser(event)
    // event.context.user = user;
});
