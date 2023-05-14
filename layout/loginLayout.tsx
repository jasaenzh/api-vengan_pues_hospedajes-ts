import { NextPage } from 'next';
import styles from '../styles/layout.module.css'
import Image from 'next/image';


interface LayoutProps {
    // Propiedades opcionales del componente Login
    children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {

    // Contenido del componente Login
    return (
        <div className='flex h-screen bg-amber-200'>
            <div className='m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2'>
                <div className={styles.imgStyle}>
                    <div className={styles.cartoonImg}></div>
                    <div className={styles.cloud_one}></div>
                    <div className={styles.cloud_two}></div>
                </div>
                <div className='right flex flex-col justify-evenly bg-gray-500 rounded-e-md'>
                    <div className='text-center py-10'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;