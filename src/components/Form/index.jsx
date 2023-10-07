import { useSeriesContext } from "context/Series"
import { useState } from "react"
import styles from "./Form.module.css"

export default function Form() {
    const [name, setName] = useState("")
    const [episode, setEpisode] = useState("")
    const [totalEpisodes, setTotalEpisodes] = useState("")
    const { addSeries } = useSeriesContext()

    function handleAddSeries() {
        if (!name || !episode || !totalEpisodes) {
            return
        }
        addSeries({ name: name, episode: episode, totalEpisodes: totalEpisodes })
        setName("")
        setEpisode("")
        setTotalEpisodes("")
    }

    return (
        <div className={styles.form__div}>
            <h2>Crie um novo Card para organizar suas sessões!</h2>
            <form>
                <input
                    id="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    placeholder="Qual série está assistindo?"
                    type="text"
                    required
                />
                <input
                    id="episode"
                    value={episode}
                    onChange={(e) => {
                        setEpisode(e.target.value)
                    }}
                    placeholder="Em qual episódio está?"
                    type="number"
                    required
                />
                <input
                    id="totalEpisodes"
                    value={totalEpisodes}
                    onChange={(e) => {
                        setTotalEpisodes(e.target.value)
                    }}
                    placeholder="Quantos episódios tem?"
                    type="number"
                />
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        handleAddSeries()
                    }}
                >
                    Organizar
                </button>
            </form>
        </div>
    )
}
