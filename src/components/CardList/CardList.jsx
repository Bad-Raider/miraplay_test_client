import Card from '../Card/Card';
import css from './CardList.module.css';



const CardList = () => {
    return (
        <>
            <ul className={css.CardList}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ul>
        </>
    );
};

export default CardList;
