function getBaseImageUrl() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth
  || document.body.clientWidth;
  return screenWidth < 600 ? 'https://restaurant-api.dicoding.dev/images/small/' : 'https://restaurant-api.dicoding.dev/images/large/';
}

const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: getBaseImageUrl(),
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurant-list-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
};

export default CONFIG;
