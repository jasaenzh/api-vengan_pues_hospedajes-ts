import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../layout/loginLayout';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Form.module.css'
import { signIn, signOut } from 'next-auth/react'
import { useState } from 'react';

interface LoginProps {
    // Propiedades opcionales del componente Login
}

const Login: NextPage<LoginProps> = () => {

    const [show, setShow] = useState(false);

    // Funcion para logearnos con Google
    async function handleGoogleSignIn() {
        signIn('google', { callbackUrl: "http://localhost:3000" })
    }



    // Contenido del componente Login
    return (
        <Layout>
            <Head>
                <title>Inicio de sesión</title>
            </Head>
            <section className='w-3/4 mx-auto flex flex-col gap-10'>
                <div className='title'>
                    <h1 className=' text-gray-800 text-4xl font-bold py-4'>Iniciar Sesion</h1>
                    <p className='w-3/4 mx-auto text-gray-200'>Ingresa tus credenciales</p>
                </div>


                {/* Formulario */}
                <form className="flex flex-col gap-5">
                    <div className={styles.input_group}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={styles.input_text}
                        />
                    </div>
                    <div className={styles.input_group}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className={styles.input_text}
                        />
                    </div>
                    {/* Login Bottons */}
                    <div className="input-button">
                        <button type="submit" className={styles.button}>
                            Iniciar sesion
                        </button>
                    </div>
                    <button
                        type="button"
                        className={styles.button_custom}
                        onClick={handleGoogleSignIn}
                    >
                        Iniciar sesion con Google <Image src={'/asset/google.svg'} alt='Google' width="20" height={20}></Image>
                    </button>
                </form>

                {/* Link para registrarse  */}
                <p className="text-center text-gray-400">
                    No tienes una cuenta?
                    <Link href={'/register'}>
                        <span className=" text-blue-700"> Registrarse</span>
                    </Link>
                </p>

            </section>
        </Layout>
    );
};

export default Login;