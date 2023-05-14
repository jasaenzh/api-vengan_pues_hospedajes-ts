import NextAuth from "next-auth/next";

// Importo Google Provider
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({
    providers: [
        //Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? '',
            clientSecret: process.env.GOOGLE_SECRET ?? ''
        })
    ]

})