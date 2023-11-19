import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container/Container';
import CardList from '../components/CardList/CardList';
import TitleGamesList from '../components/TitleGamesList/TitleGamesList';
import { fetchGames } from '../helpers/fetchGames';
import { setGames, setGenre } from '../redux/gamesSlice';
import css from '../components/TitleGamesList/TitleGamesList.module.css';

const GamesPage = () => {
    const gamesListLength = useSelector(state => state.games.gamesListLength);
    const dispatch = useDispatch();
    const [selectedGenre, setSelectedGenre] = useState('FREE');
    const [page, setPage] = useState(1);
    const { isLoading, isError, data } = useQuery(
        ['games', selectedGenre],
        () => (selectedGenre ? fetchGames(selectedGenre, page) : null)
    );

    let totalPages = Math.ceil(gamesListLength / 9);

    useEffect(() => {
        dispatch(setGames(data));
        dispatch(setGenre(selectedGenre));
    }, [dispatch, data, selectedGenre]);

    const handleClick = genre => {
        setSelectedGenre(genre);
        setPage(1);
    };

    const handleLoadMore = async () => {
        const newData = await fetchGames(selectedGenre, page + 1);
        dispatch(setGames(newData));
        setPage(page + 1);
    };

    return (
        <section>
            <Container>
                <TitleGamesList handleClick={handleClick} />
                {selectedGenre === 'ALL' ? (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'spaceAround',
                            marginTop: '50px',
                            marginBottom: '50px',
                            fontSize: '30px',
                        }}
                    >
                        Упс, з цим фільтром щось пішло не так, спробуйте інший
                    </div>
                ) : (
                    <>
                        <CardList error={isError} load={isLoading} />
                        <button
                            className={css.GanreItems}
                            onClick={handleLoadMore}
                            style={{
                                display: page >= totalPages ? 'none' : 'flex',
                                margin: '40px auto 40px',
                            }}
                        >
                            Завантажити ще...
                        </button>
                    </>
                )}
            </Container>
        </section>
    );
};

export default GamesPage;
