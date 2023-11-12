import Container from '../Container/Container';
import Card from '../Card/Card';
import css from './CardList.module.css';

const CardList = () => {
    return (
        <section className={css.SectionGameList}>
            <Container>
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
            </Container>
        </section>
    );
};

export default CardList;
