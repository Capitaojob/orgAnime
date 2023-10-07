import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>Made by João Bataglia</div>
            <nav>
                <ul>
                    <li>
                        <a href="https://github.com/Capitaojob">Github</a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/joao-bataglia">Linkedin</a>
                    </li>
                </ul>
            </nav>
            <div>
                <img src="/images/icon.png" alt="Straw Hat" />
            </div>
        </footer>
    )
}
