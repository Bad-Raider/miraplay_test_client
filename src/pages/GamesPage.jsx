import Container from '../components/Container/Container';
import CardList from '../components/CardList/CardList';
import TitleGamesList from '../components/TitleGamesList/TitleGamesList';
import { useState } from 'react';
import { fetchGames } from '../helpers/fetchGames';
import { useQuery } from 'react-query';

const GamesPage = () => {
    const [selectedGenre, setSelectedGenre] = useState(null);
    const { isLoading, isError, data } = useQuery(
        ['games', selectedGenre],
        () => (selectedGenre ? fetchGames(selectedGenre) : null)
    );
    console.log(data);
    const handleClick = genre => {
        setSelectedGenre(genre);
    };
    return (
        <section>
            <Container>
                <TitleGamesList handleClick={handleClick} />
                <CardList />
            </Container>
        </section>
    );
};

export default GamesPage;
