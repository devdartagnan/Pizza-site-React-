import React from 'react'
import styles from './Menu.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { Link } from 'react-router-dom'
export default function Menu() {
    const routes = [{
        label: 'Início',
        to: '/'
    }, {
        label: 'Cardápio',
        to: '/cardapio'
    }, {
        label: 'Sobre',
        to: '/sobre'
    }]
    return (
        <>
            <nav className={styles.menu}>
                <Logo />
                <ul className={styles.menu__list}>
                    {routes.map((route, index) => {
                        return (
                            <li key={index} className={styles.menu__link}>
                                <Link to={route.to}>{route.label}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}
