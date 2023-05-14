import { NextApiRequest, NextPage } from 'next';
import Link from 'next/link';
import { getSession, signOut, useSession } from 'next-auth/react';
import { Session } from 'next-auth';

interface UserProps {
    // Propiedades opcionales del componente Login
    session?: Session;
}

const User: NextPage<UserProps> = ({ session }) => {

    // Funcion para poder cerrar session
    function handleSignOut() {
        signOut();
    }

    return (
        <main className="container mx-auto text-center py-20">
            <h3 className="text-4xl font-bold">Autorizar Usuario</h3>
            <div className='details'>
                <h5>{session?.user?.name}</h5>
                <h5>{session?.user?.email}</h5>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleSignOut}
                    className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'
                >
                    Cerrar sesion
                </button>
            </div>

            <div className='flex justify-center'>
                <Link href={'/'} className='mt-5'>
                    <span className='px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Home</span>
                </Link>
            </div>
        </main>
    )
}

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: {
                destination: '/home',
                permanent: false
            }
        }
    }

    return {
        props: {
            session
        }
    }


}

export default User;