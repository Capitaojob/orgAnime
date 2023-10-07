import { createContext, useContext, useState } from "react"

export const SeriesContext = createContext()
SeriesContext.displayName = "Series"

export default function SeriesProvider({ children }) {
    const [series, setSeries] = useState([])
    return <SeriesContext.Provider value={{ series, setSeries }}>{children}</SeriesContext.Provider>
}

export function useSeriesContext() {
    const { series, setSeries } = useContext(SeriesContext)

    function addSeries(s) {
        return setSeries([...series, { name: s.name, episode: s.episode, totalEpisodes: s.totalEpisodes }])
    }

    return {
        series,
        addSeries,
    }
}
