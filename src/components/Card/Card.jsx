import css from './Card.module.css';

const Card = ({ img, description, genre, top, name }) => {
    const truncatedDescription =
        description.length > 142
            ? `${description.slice(0, 114)}...`
            : description;
   
            const freeOrCost = genre === 'FREE';

    return (
        <li className={css.GameCard_item}>
            <img className={css.GameCard_img} src={img} alt={name} />
            <div className={css.GameCard_wraper}>
                <h4 className={css.GameCard_title}>{name}</h4>
                <p className={css.GameCard_description}>
                    {truncatedDescription}
                </p>
            </div>
            <div className={css.GameCard_wraperGenre}>
                <p
                    className={css.GameCard_top}
                    style={{ display: !top ? 'none' : 'block' }}
                >
                    {top && 'TOP'}{' '}
                </p>
                <p className={css.GameCard_genre}>{genre}</p>
            </div>
            <p
                className={css.GameCard_free}
                style={{ display: freeOrCost ? 'flex' : 'none' }}
            >
                БЕЗКОШТОВНО
            </p>
        </li>
    );
};

export default Card;
