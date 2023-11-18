export const fetchGames = async genre => {
    const response = await fetch('https://api.miraplay.cloud/games/by_page', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page: 0,
            isFreshGamesFirst: true,
            genre: genre.toUpperCase(), // Переконайтеся, що жанр у верхньому регістрі
            gamesToShow: 9,
        }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    return response.json();
};
