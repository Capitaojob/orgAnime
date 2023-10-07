import { createContext, useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"

export const SeriesContext = createContext()
SeriesContext.displayName = "Series"

export default function SeriesProvider({ children }) {
    const [series, setSeries] = useState(() => {
        const localStorageData = localStorage.getItem("seriesData")
        return localStorageData ? JSON.parse(localStorageData) : []
    })

    useEffect(() => {
        localStorage.setItem("seriesData", JSON.stringify(series))
    }, [series])

    return <SeriesContext.Provider value={{ series, setSeries }}>{children}</SeriesContext.Provider>
}

export function useSeriesContext() {
    const { series, setSeries } = useContext(SeriesContext)

    function addSeries({ name, episode, totalEpisodes }) {
        const id = uuidv4()
        // const currentEpisode = episode < totalEpisodes ? episode : totalEpisodes
        setSeries([...series, { id: id, name: name, episode: episode, totalEpisodes: totalEpisodes }])
    }

    function editSeries({ id, name, episode, totalEpisodes }) {
        setSeries(
            series.map((s) => {
                return s.id === id ? { id, name, episode, totalEpisodes } : s
            })
        )
    }

    function removeSeries(id) {
        setSeries(series.filter((s) => s.id !== id))
    }

    return {
        series,
        addSeries,
        editSeries,
        removeSeries,
    }
}
