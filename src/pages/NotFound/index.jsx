import { useNavigate } from "react-router-dom"
import styles from "./NotFound.module.css"

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <section className={styles.container}>
            <h1>Oops..</h1>
            <p>Você velejou tão longe que passou do One Piece ⛵</p>
            <p>O que deseja fazer?</p>
            <div>
                <button
                    onClick={() => {
                        navigate(-1)
                    }}
                    className={`${styles.btn} ${styles.btn__back}`}
                >
                    Última Página
                </button>
                <button
                    onClick={() => {
                        navigate("/")
                    }}
                    className={`${styles.btn} ${styles.btn__home}`}
                >
                    Início
                </button>
            </div>
        </section>
    )
}
