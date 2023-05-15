import { NextPage } from 'next';
import Layout from '../layout/loginLayout';
import Head from 'next/head';
import Link from 'next/link';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';
import styles from '../styles/Form.module.css';
import { FormikHelpers, useFormik } from "formik";
import { register_validate } from "../lib/validate";
import router from 'next/router';

interface RegisterProps {
    // Propiedades opcionales del componente Login
}

const Register: NextPage<RegisterProps> = () => {
    const [show, setShow] = useState({ password: false, cpassword: false });


    // Usando hook formik
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: ''
        },
        // Validacion de los datos
        validate: register_validate,
        // Envia los datos
        onSubmit: onSubmit
    })

    // creo la funcion onSubmit
    async function onSubmit(
        values: { username: string; email: string; password: string; cpassword: string; },
        formikHelpers: FormikHelpers<{ username: string; email: string; password: string; cpassword: string; }>
    ) {
        const options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }
        await fetch('http://localhost:3000/api/register', options)
            .then(res => res.json())
            .then((data) => {
                if (data) {
                    router.push('http://localhost:3000')
                }

            })
    }

    // Contenido del componente Login
    return (
        <Layout>
            <Head>
                <title>Registro</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className=" text-gray-800 text-4xl font-bold py-4">Registrar</h1>
                    <p className="w-3/4 mx-auto text-gray-400">Aca puedes agregar tus datos para poder ingresar a nuestra pagina y poder reservar!</p>
                </div>

                {/* form */}
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                    <div className={`${styles.input_group} ${formik.errors.username && formik.touched.username ? 'border-rose-500' : ''}`}>
                        <input
                            type="text"
                            // name="Username"
                            placeholder="Usuario"
                            className={styles.input_text}
                            {...formik.getFieldProps('username')}
                        />
                        <span className="icon flex items-center px-4">
                            <HiOutlineUser size={25} />
                        </span>
                    </div>
                    <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-500' : ''}`}>
                        <input
                            type="email"
                            // name="email"
                            placeholder="Correo electrónico"
                            className={styles.input_text}
                            {...formik.getFieldProps('email')}
                        />
                        <span className="icon flex items-center px-4">
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-500' : ''}`}>
                        <input
                            type={`${show.password ? 'text' : 'password'}`}
                            // name="password"
                            placeholder="Contraseña"
                            className={styles.input_text}
                            {...formik.getFieldProps('password')}
                        />
                        <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, password: !show.password })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    <div className={`${styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-500' : ''}`}>
                        <input
                            type={`${show.cpassword ? 'text' : 'password'}`}
                            // name="cpassword"
                            placeholder="Confirmar contraseña"
                            className={styles.input_text}
                            {...formik.getFieldProps('cpassword')}
                        />
                        <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {/* Login Bottons */}
                    <div className="input-button">
                        <button type="submit" className={styles.button}>
                            Iniciar sesion
                        </button>
                    </div>
                </form>

                {/* bottom */}
                <p className="text-center text-gray-400">
                    Tienes una cuenta?
                    <Link href={'/login'}>
                        <span className=" text-blue-700"> Inicia sesion</span>
                    </Link>
                </p>

            </section>
        </Layout>
    );
};

export default Register;