import { ganres } from '../../helpers/gamesGanres';
import css from './TitleGamesList.module.css';

const TitleGamesList = ({handleClick}) => {

    const handleGenreClick = (genre) => {
        console.log("Clicked genre:", genre);
        handleClick(genre);
    };


    return (
        <>
            <h2 className={css.Title}>Всі ігри</h2>

            <ul className={css.GanreList}>
                {ganres.map((el, index) => {
                    return (
                        <li
                            onClick={() => handleGenreClick(el.name)}
                            className={css.GanreItems}
                            key={index}
                        >
                            {el.name}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default TitleGamesList;
