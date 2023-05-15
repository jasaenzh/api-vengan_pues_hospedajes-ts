import NextAuth from "next-auth/next";

// Importo Google Provider
import GoogleProvider from "next-auth/providers/google";

// Importo Credencial Provider
import CredentialsProvider from "next-auth/providers/credentials";

// Importo la base de datos
import connectMongo from "../../../database/conn";
import User from "../../../model/User";
import { compare } from "bcryptjs";


interface Credentials {
    email: string;
    password: string;
}


export default NextAuth({
    providers: [
        //Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? '',
            clientSecret: process.env.GOOGLE_SECRET ?? ''
        }),
        //Credentials Provider
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: Record<string, string> | undefined, req) {

                if (!credentials) {
                    throw new Error("Credenciales no proporcionadas");
                }

                const { email, password } = credentials;


                await connectMongo().catch(err => {
                    throw new Error("Error al conectar a la base de datos");
                });

                // Chequeo que el usuario exista
                const result = await User.findOne({ email })

                // Si no existe el usuario
                if (!result) {
                    throw new Error("Usuario no existe")
                }

                //comparar las contraseñas
                const isMatch = await compare(password, result.password)

                // contraseña incorrecta
                if (!isMatch || result.email !== email) {
                    throw new Error("Credenciales incorrectas")
                }

                return result;

            }
        }),
    ]

})