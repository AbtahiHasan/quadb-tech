import { useEffect, useState } from "react";


const useShows = () => {
    const [shows, setShows] = useState([])
    const getShows =  async () => {
        const res = await fetch("https://api.tvmaze.com/search/shows?q=all")
        const data = await res.json()
        setShows(data)
    }

    useEffect(() => {
        getShows()
    }, [])

    return {shows}
};

export default useShows;