import React from 'react';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '143c3550dc79f534bf91',
            clientSecret: '09e9ea64cfa01871b7719b1fb41ba158c10eeedc',
        }),
    ]
}


export default NextAuth(authOptions)