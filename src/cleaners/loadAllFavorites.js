const url = process.env.REACT_APP_DATABASE_URL;

export const loadAllFavorites = async (userId) => {

  try {
    const response = await fetch(`${url}/api/v1/users/${userId}/favorites`);
    if (response.status === 404) {
      return {};
    }
    const favoriteData = await response.json();
    
    return favoriteData;
  } catch (error) {
    throw error;
  }
};