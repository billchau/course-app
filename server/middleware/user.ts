import {serverSupabaseUser} from '#supabase/server'

export default defineEventHandler(async(event) => {
    const cookies = parseCookies(event);
    

    if ((cookies['sb-phfwoykehgeymzdyvjra-auth-token.0'] && cookies['sb-phfwoykehgeymzdyvjra-auth-token.1']) || 
    (cookies['sb-phfwoykehgeymzdyvjra-auth-token'] && cookies['sb-phfwoykehgeymzdyvjra-auth-token-code-verifier'])) {
        const user = await serverSupabaseUser(event)
        event.context.user = user;
    }
});
