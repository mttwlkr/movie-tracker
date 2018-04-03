export const addToFavorites = async (movie) => {

  try {
    const response = await fetch('/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'content-type': 'application/json'
      }
    });
    const favoriteData = await response.json();
    return favoriteData;
  } catch (error) {
    throw error;
  }
};