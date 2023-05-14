import { NextPage } from 'next';
import Layout from '../layout/loginLayout';
import Head from 'next/head';
import Link from 'next/link';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';
import styles from '../styles/Form.module.css'

interface RegisterProps {
    // Propiedades opcionales del componente Login
}

const Register: NextPage<RegisterProps> = () => {
    const [show, setShow] = useState({ password: false, cpassword: false });
    // Contenido del componente Login
    return (
        <Layout>
            <Head>
                <title>Registro</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className=" text-gray-800 text-4xl font-bold py-4">Registrar</h1>
                    {/* <p className="w-3/4 mx-auto text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque, fuga velit nisi iusto ab beatae? Velit placeat, distinctio accusamus illo ad dolorem aperiam, voluptate odit, sequi voluptatibus pariatur inventore.</p> */}
                </div>

                {/* form */}
                <form className="flex flex-col gap-5">
                    <div className={styles.input_group}>
                        <input
                            type="text"
                            name="Username"
                            placeholder="Usuario"
                            className={styles.input_text}
                        />
                        <span className="icon flex items-center px-4">
                            <HiOutlineUser size={25} />
                        </span>
                    </div>
                    <div className={styles.input_group}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            className={styles.input_text}
                        />
                        <span className="icon flex items-center px-4">
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    <div className={styles.input_group}>
                        <input
                            type={`${show.password ? 'text' : 'password'}`}
                            name="password"
                            placeholder="Contraseña"
                            className={styles.input_text}

                        />
                        <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, password: !show.password })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    <div className={styles.input_group}>
                        <input
                            type={`${show.cpassword ? 'text' : 'password'}`}
                            name="cpassword"
                            placeholder="Confirmar contraseña"
                            className={styles.input_text}

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