import React from "react"
import styles from './Header.module.scss'

export default function Header(props) {
    return (
        <div class={styles.Header}>
            <h1 class={styles.title}>david latimore ii</h1>
            <p> class={styles.subtitle}a digital archive of selected works</p>
        </div>
    )
}