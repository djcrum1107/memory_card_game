const Card = ({ card, onClick }) => {

    return (
        <div className='card' onClick={() => onClick(card.id)}>
            <h1>{card.id}</h1>
            <h1>{card.img}</h1>
            <p>{card.text}</p>
        </div>
    )
}

export default Card;