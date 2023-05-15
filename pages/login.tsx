import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../layout/loginLayout';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Form.module.css'
import { signIn, signOut } from 'next-auth/react'
import { useState } from 'react';
import { FormikHelpers, useFormik } from "formik";
import { type } from 'os';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { login_validate } from "../lib/validate";
import router from 'next/router';

interface LoginProps {
    // Propiedades opcionales del componente Login
}

const Login: NextPage<LoginProps> = () => {

    const [show, setShow] = useState(false);

    //utilizo el hook para validar los campos formik
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        //Validacion del formulario
        validate: login_validate,
        //Envio la info
        onSubmit: onSubmit
    })

    // Funcion para logearnos con Google
    async function handleGoogleSignIn() {
        signIn('google', { callbackUrl: "http://localhost:3000" })
    }

    //Funcion para dar onSubmit al formulario
    async function onSubmit(values: { email: string; password: string; }, formikHelpers: FormikHelpers<{ email: string; password: string; }>) {
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "http://localhost:3000"
        })

        if (status && status.ok && status.url) {
            router.push(status.url)
        }
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
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                    <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                        <input
                            type="email"
                            // name="email"
                            placeholder="Email"
                            className={styles.input_text}
                            {...formik.getFieldProps('email')}
                        />
                        <span className="icon flex items-center px-4">
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                        <input
                            type="password"
                            // name="password"
                            placeholder="Password"
                            className={styles.input_text}
                            {...formik.getFieldProps('password')}
                        />
                        <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
                            <HiFingerPrint size={25} />
                        </span>
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