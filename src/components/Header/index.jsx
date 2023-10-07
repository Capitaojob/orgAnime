import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <Link to="/">
                    <img draggable="false" src="/images/icon.png" alt="Straw Hat Logo" />
                </Link>
            </div>
        </header>
    )
}
