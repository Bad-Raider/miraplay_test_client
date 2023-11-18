import Card from '../Card/Card';
import css from './CardList.module.css';

const CardList = ({ error, load, data }) => {
    const { games, gamesListLength } = data;
    
    
    return (
        <>
            {load && <div>Loading...</div>}
            {error && <div>{error}</div>}
            
                <ul className={css.CardList}>
                {games?.map(({_id, commonGameName, gameDescription, gameImage, genre, inTop}) => {
                    return (
                        <Card 
                        key={_id}
                        img={gameImage}
                        description={gameDescription}
                        genre={genre}
                        top={inTop}
                        name={commonGameName}

                        />
                    );
                })}
                </ul>
            
        </>
    );
};

export default CardList;
