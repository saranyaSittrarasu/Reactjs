import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/logo.png';
import styles from './Header.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.section}>
                <img src={logo} alt={'Logo'} />
            </section>
            <section className={styles.section}>
                <nav>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <Link className={styles.link} to={'/'}>
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}
