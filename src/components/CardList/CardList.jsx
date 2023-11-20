import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Card from '../Card/Card';
import css from './CardList.module.css';
import { useSelector } from 'react-redux';

const CardList = ({ error, load }) => {
    const games = useSelector(state => state.games.games);

    return (
        <>
            {load && (
                <Stack sx={{ width: '100%', color: 'green.500' }} spacing={2}>
                    <LinearProgress color="success" />
                </Stack>
            )}
            {error && <div>{error}</div>}

            <ul className={css.CardList}>
                {games?.map(
                    ({
                        _id,
                        commonGameName,
                        gameDescription,
                        gameImage,
                        genre,
                        inTop,
                    }) => {
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
                    }
                )}
            </ul>
        </>
    );
};

export default CardList;
