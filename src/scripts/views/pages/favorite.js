import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

// import { createRestaurantListTemplate } from '../templates/template-creator';

// const Favorite = {
//   async render() {
//     return `
//       <div class="content">
//         <h2 class="explore__label">Your Favorite Restaurants</h2>
//         <div id="restaurants" class="restaurants">
//         </div>
//       </div>
//     `;
//   },

//   async afterRender() {
//     const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
//     const restaurantsContainer = document.querySelector('#restaurants');

//     restaurants.forEach((restaurant) => {
//       restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
//     });
//   },
// };

export default Favorite;
