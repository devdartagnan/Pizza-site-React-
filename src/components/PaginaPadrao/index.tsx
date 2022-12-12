import React from 'react'
import styles from './Paginapadrao.module.scss'
import { Outlet } from 'react-router-dom'
import styleTema from  'styles/Temas.module.scss'

export default function Paginapadrao() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <div className={styleTema.container}>
                <Outlet />
            </div>
        </>
    )
}
