import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import User from './user'
import Home from './home'
import { useSession, getSession, signOut } from 'next-auth/react';
import { NextApiRequest } from 'next'
import { Session } from 'next-auth'

interface IndexProps {
  // Propiedades del Home
  session?: Session;
}

const Index: NextPage<IndexProps> = ({ session }) => {
  // Aca validamos si el usuario esta logueado o no
  const { data: userSession } = useSession();


  // Depende de si esta logueado o no, se muestra el componente User o Guest
  return (
    <div className={styles.container}>
      <Head>
        <title>Pagina de inicio</title>
      </Head>
      {userSession ? <User session={userSession} /> : <Home session={session} />}
    </div>
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

export default Home
