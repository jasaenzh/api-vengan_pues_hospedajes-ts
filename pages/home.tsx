import { NextPage } from 'next';
import Link from 'next/link';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';


interface HomeProps {
    // Propiedades opcionales del componente Login
    session?: Session;
}

const Home: NextPage<HomeProps> = ({ session }) => {

    // Funcion para poder cerrar session
    function handleSignOut() {
        signOut();
    }

    return (
        <main>
            <h3 className="text-4xl font-bold">Bienvenido a Vengan Pues</h3>

            {session && (
                <div className='details'>
                    <h5>{session.user?.name}</h5>
                    <h5>{session.user?.email}</h5>
                </div>
            )}

            {
                session?.user ?
                    (
                        <div className="flex flex-col justify-center">
                            <div className='flex justify-center'>
                                <button
                                    onClick={handleSignOut}
                                    className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'
                                >
                                    Cerrar sesion
                                </button>
                            </div>

                            <div className='flex justify-center'>
                                <Link href={'/user'} className='mt-5'>
                                    <span className='px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Perfil Usuario Administrador</span>
                                </Link>
                            </div>
                        </div>
                    )
                    : (
                        <div className='flex justify-center'>
                            <Link href={'/login'} className='mt-5'>
                                <span className='px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Iniciar sesion</span>
                            </Link>
                        </div>
                    )
            }

        </main>
    )

}

export default Home;