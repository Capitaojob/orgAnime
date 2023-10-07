import { useSeriesContext } from "context/Series"
import styles from "./OrganizedLi.module.css"
import { useState } from "react"

export default function OrganizedLi({ series }) {
    const { editSeries, removeSeries } = useSeriesContext()
    const [isEditing, setIsEditing] = useState(false)
    const episodesLeft = series.totalEpisodes - series.episode

    const [updatedName, setUpdatedName] = useState(series.name)
    const [updatedEpisode, setUpdatedEpisode] = useState(series.episode)
    const [updatedTotalEpisodes, setUpdatedTotalEpisodes] = useState(series.totalEpisodes)

    return (
        <li className={`${styles.organized__li} ${episodesLeft <= 0 ? styles.finished__series : ""}`}>
            <div className={styles.text_container}>
                {isEditing ? (
                    <>
                        <input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
                        <input type="number" value={updatedEpisode} onChange={(e) => setUpdatedEpisode(e.target.value)} />
                        <input type="number" value={updatedTotalEpisodes} onChange={(e) => setUpdatedTotalEpisodes(e.target.value)} />
                        <button
                            className={styles.update__btn}
                            onClick={(e) => {
                                e.preventDefault()
                                editSeries({ id: series.id, name: updatedName, episode: updatedEpisode, totalEpisodes: updatedTotalEpisodes })
                                setIsEditing(!isEditing)
                            }}
                        >
                            Atualizar
                        </button>
                    </>
                ) : (
                    <>
                        <button className={styles.edit} onClick={() => setIsEditing(!isEditing)}>
                            ✎
                        </button>
                        <span className={styles.name}>{series.name}</span>
                        <span className={styles.episodes}>
                            {series.episode} vistos de {series.totalEpisodes}
                        </span>
                        <span className={styles.episodesLeft}>
                            {episodesLeft > 0 ? `Faltam ${episodesLeft} episódios` : `Você terminou a série!`}
                        </span>
                        <button
                            className={styles.delete}
                            onClick={(e) => {
                                e.preventDefault()
                                removeSeries(series.id)
                            }}
                        >
                            X
                        </button>
                    </>
                )}
                {/* <span className={styles.name}>{series.name}</span>
                <span className={styles.episodes}>
                    {series.episode} vistos de {series.totalEpisodes}
                </span>
                <span className={styles.episodesLeft}>{episodesLeft > 0 ? `Faltam ${episodesLeft} episódios` : `Você terminou a série!`}</span> */}
            </div>
        </li>
    )
}
