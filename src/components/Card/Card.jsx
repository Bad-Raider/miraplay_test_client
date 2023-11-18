import foto from '../../images/fotoCard.jpg';
import css from './Card.module.css';


    
const Card = ({img, description, genre, top, name }) => {
    return (
            <li className={css.GameCard_item}>
                <img className={css.GameCard_img} src={img} alt={name} />
                <div className={css.GameCard_wraper}>
                    <h4 className={css.GameCard_title}>{name}</h4>
                    <p className={css.GameCard_description}>
                        {description}
                    </p>
                </div>
                <div className={css.GameCard_wraperGenre}>
                    <p className={css.GameCard_top}>{top &&'TOP'}</p>
                    <p className={css.GameCard_genre}>{genre}</p>
                </div>
                <p className={css.GameCard_free}>БЕЗКОШТОВНО</p>
            </li>
    );
};

export default Card;
