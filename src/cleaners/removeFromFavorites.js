export const removeFromFavorites = async (userId, movieId) => {
  const movieInfo = { 
    user_id: userId, 
    movie_id: movieId 
  };

  try {
    const response = await fetch(`/api/users/${userId}/favorites/${movieId}/`, {
      method: 'DELETE',
      body: JSON.stringify(movieInfo),
      headers: {
        'content-type': 'application/json'
      }
    });
    const removedData = await response.json();

    return removedData;
  } catch (error) {
    throw error;
  }
};