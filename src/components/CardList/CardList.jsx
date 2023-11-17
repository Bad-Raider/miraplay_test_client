import Card from '../Card/Card';
import css from './CardList.module.css';

// https://api.miraplay.cloud/games/by_page


const CardList = () => {
    return (
        <>
            <h2 className={css.Title}>Всі ігри</h2>
            <div className={css.Ganre}>
                <ul className={css.GanreList}>
                    <li className={css.GanreItems}>ALL</li>
                    <li className={css.GanreItems}>FREE</li>
                    <li className={css.GanreItems}>MOBA</li>
                    <li className={css.GanreItems}>SHOOTERS</li>
                    <li className={css.GanreItems}>LAUNCHERS</li>
                    <li className={css.GanreItems}>MMORPG</li>
                    <li className={css.GanreItems}>STRATEGY</li>
                    <li className={css.GanreItems}>FIGHTING</li>
                    <li className={css.GanreItems}>RACING</li>
                    <li className={css.GanreItems}>SURVIVAL</li>
                    <li className={css.GanreItems}>ONLINE</li>
                </ul>
            </div>
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
