const Card = ({ card, onClick }) => {

    return (
        <div className='card' onClick={() => onClick(card.id)}>
            <h1>{card.id}</h1>
            <h1>{card.img}</h1>
            <h1>{card.text}</h1>
        </div>
    )
}

export default Card;