import SeriesList from "components/SeriesList"
import Form from "../../components/Form"
import styles from "./Home.module.css"

export default function Home() {
    const currentDate = new Date()
    const currentHour = currentDate.getHours()

    return (
        <section className={styles.container}>
            <h1>
                {currentHour >= 6 && currentHour < 12 ? "Bom dia" : currentHour >= 12 && currentHour < 18 ? "Boa tarde" : "Boa noite"}, bem-vindo ao
                orgAnime!
            </h1>
            <div>
                <Form />
            </div>
            <div>
                <SeriesList />
            </div>
        </section>
    )
}
