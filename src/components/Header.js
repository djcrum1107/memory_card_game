
const Header = ({title, score, highScore}) => {

    return(
        <div className='header'>
            <div className='header-text'>
                <h1>{title}</h1>
                <h2>The memory card game is all about remembering which cards you have already selected and selecting a unclicked card</h2>
            </div>
            <div className='heading-score'>
                <h1>Current Score: {score}</h1>
                <h1>High Score: {highScore}</h1>
            </div>
        </div>
    );
};

Header.defaultProps = {
    title: "Defaulted Title",
    score: 0,
    highScore: 0,
}

export default Header;