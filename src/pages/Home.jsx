import { useEffect } from "react";
import { useState } from "react";
import ShowCard from "../components/ShowCard";
import "../styles/style.css"
import useShows from "../hooks/useShows";

const Home = () => {
   const {shows} = useShows()


    return (
        <main className="container">
            {
                shows.map((show, key) => <ShowCard key={key} show={show} />)
            }
        </main>
    );
};

export default Home;