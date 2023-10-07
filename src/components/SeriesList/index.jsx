import { useSeriesContext } from "context/Series"
import styles from "./SeriesList.module.css"

export default function SeriesList() {
    const { series, addSeries } = useSeriesContext()

    return (
        <div>
            <ul>
                {series.map((s) => (
                    <li key={s.name}>{s.name}</li>
                ))}
            </ul>
        </div>
    )
}
