import foto from '../../images/fotoCard.jpg';
import css from './Card.module.css';

const Card = () => {
    return (
            <li className={css.GameCard_item}>
                <img className={css.GameCard_img} src={foto} alt="" />
                <div className={css.GameCard_wraper}>
                    <h4 className={css.GameCard_title}>Wargaming</h4>
                    <p className={css.GameCard_description}>
                        Wargaming.net Game Center — платформа дистрибуції
                        (додаток для запуску ігор), в якому зібрані всі ваші
                        ігри Wargami...
                    </p>
                </div>
                <div className={css.GameCard_wraperGenre}>
                    <p className={css.GameCard_top}>TOP</p>
                    <p className={css.GameCard_genre}>LAUNCHERS</p>
                </div>
                <p className={css.GameCard_free}>БЕЗКОШТОВНО</p>
            </li>
    );
};

export default Card;
