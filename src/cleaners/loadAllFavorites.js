export const loadAllFavorites = async (userId) => {

  try {
    const response = await fetch(`/api/users/${userId}/favorites/`);
    const favoriteData = await response.json();
    return favoriteData.data;
  } catch (error) {
    throw error;
  }
};