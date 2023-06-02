import { Link, useParams } from "react-router-dom";
import useShows from "../hooks/useShows";



const ShowDetails = () => {
    const {id} = useParams()
    const {shows} = useShows()

    const show = shows.find(show => show?.show?.id === +id)
    // const {id ,name, image, premiered, status} = show?.show
    console.log(show,id)
    return (
        <main className="show-details container">
            <section>
                <button className="back-btn"><Link to="/">Back To Home</Link></button>
                <img src={show?.show?.image?.medium} alt="" />
            </section>
            <section className="details-card">
                <h2 className="my-3">{show?.show?.name}</h2>
                <p className="my-3"><span className="font-bold">language: </span> {show?.show?.language}  </p>
                <p className="my-3"><span className="font-bold">type: </span> {show?.show?.type}  </p>
                <p className="my-3"><span className="font-bold">premiered: </span> {show?.show?.premiered}  </p>
                <p className="my-3"><span className="font-bold">ended: </span> {show?.show?.ended || "not available"}  </p>
                <p className="my-3"><span className="font-bold">time: </span> {show?.show?.schedule?.time}  </p>
                <p className="my-3"><span className="font-bold">days: </span> {show?.show?.schedule?.days}  </p>
                <p className="my-3"><span className="font-bold">rating: </span> {show?.show?.rating?.average || "not available"} </p>
                {show?.show?.summary}
                <button className="my-3 btn">book a movie ticket</button>
            </section>
        </main>
    );
};

export default ShowDetails;