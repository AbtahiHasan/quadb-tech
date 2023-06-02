import { Link } from "react-router-dom";

const ShowCard = ({show}) => {
    const {id ,name, image, premiered, status} = show?.show
    return (
        <article className='show-card'>
            <img className='card-img' src={image?.medium} alt="" />
            <h2 className='my-3'>{name}</h2>
            <p className='my-3'><span className="font-bold">Premiered: </span> {premiered} </p>
            <p className='my-3'><span className="font-bold">Status: </span>{status}</p>
            <Link to={`/show/${id}`}>
                <button className="btn">Details</button>
            </Link>
        </article>
    );
};

export default ShowCard;