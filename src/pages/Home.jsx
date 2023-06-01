import { useEffect } from "react";
import { useState } from "react";
import ShowCard from "../components/ShowCard";
import "../styles/style.css"

const Home = () => {
    const [shows, setShows] = useState([])
    const getShows =  async () => {
        const res = await fetch("https://api.tvmaze.com/search/shows?q=all")
        const data = await res.json()
        setShows(data)
    }

    console.log(shows)

    useEffect(() => {
        getShows()
    }, [])


    return (
        <main className="">
            {
                shows.map((show, key) => <ShowCard key={key} show={show} />)
            }
        </main>
    );
};

export default Home;