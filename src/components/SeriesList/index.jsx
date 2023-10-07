import { useSeriesContext } from "context/Series"
import styles from "./SeriesList.module.css"
import OrganizedLi from "components/OrganizedLi"

export default function SeriesList() {
    const { series } = useSeriesContext()

    return (
        <div className={styles.list}>
            {series.length === 0 ? (
                <p>Adicione séries para que apareçam aqui!</p>
            ) : (
                <>
                    <h3>Suas Séries</h3>
                    <ul>
                        {series.map((s) => (
                            <OrganizedLi key={s.id} series={s} />
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}
