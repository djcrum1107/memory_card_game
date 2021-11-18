const Card = ({ card, onClick }) => {

    return (
        <div className='card' onClick={() => onClick(card.id)}>
            <img src={card.img} alt={card.alt}/>
        </div>
    )
}

export default Card;