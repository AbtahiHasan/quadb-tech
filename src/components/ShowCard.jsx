const ShowCard = ({show}) => {
    const {name, image} = show?.show
    return (
        <article className=''>
            <img className='' src={image?.medium} alt="" />
            <h2 className=''>{name}</h2>
        </article>
    );
};

export default ShowCard;