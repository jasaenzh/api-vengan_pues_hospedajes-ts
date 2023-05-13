import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../layout/loginLayout';
import Link from 'next/link';

interface LoginProps {
    // Propiedades opcionales del componente Login
}

const Login: NextPage<LoginProps> = () => {
    // Contenido del componente Login
    return (
        <Layout>
            <Head>
                <title>Inicio de sesión</title>
            </Head>
            <section className='w-3/4 mx-auto flex flex-col gap-10'>
                <div className='title'>
                    <h1 className=' text-gray-800 text-4xl font-bold py-4'>Iniciar Sesion</h1>
                    <p className='w-3/4 mx-auto text-gray-500'>Ingresa tus credenciales</p>
                </div>


                {/* Formulario */}
                <form className="w-full max-w-sm gap-5">
                    {/*  Div de Email */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-full-name">
                                Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-full-name"
                                type="email"
                                name='email'
                                placeholder="email@mail.com" />
                        </div>
                    </div>

                    {/* Div de Contraseña */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-password">
                                Contraseña
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-password"
                                type="password"
                                name="password"
                                placeholder="******************" />
                        </div>
                    </div>

                    {/* Bottones Inicio se sesion con credenciales, Google y Github */}
                    {/* Credenciales */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button
                                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button">
                                Iniciar sesion
                            </button>
                        </div>
                    </div>

                    {/* Google */}
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Iniciar sesion con Google
                            </button>
                        </div>
                    </div>

                </form>

                {/* Link para registrarse  */}
                <p className="text-center text-gray-500">
                    No tienes una cuenta?
                    <Link href={'/register'}>
                        <span className="text-purple-600"> Registrarse</span>
                    </Link>
                </p>

            </section>
        </Layout>
    );
};

export default Login;