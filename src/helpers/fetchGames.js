export const fetchGames = async (genre, page ) => {
    const response = await fetch('https://api.miraplay.cloud/games/by_page', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page: page,
            isFreshGamesFirst: true,
            genre: genre.toUpperCase(),
            gamesToShow: 9,
        }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};
