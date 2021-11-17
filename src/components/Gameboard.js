import Card from "./Card";

const Gameboard = ({cards, onClick}) => {

    return(
        <div className='gameboard'>
            {cards.map((card) => (
                <Card key={card.id} card={card} onClick={onClick}/>
            ))}
        </div>

    )
}

export default Gameboard;