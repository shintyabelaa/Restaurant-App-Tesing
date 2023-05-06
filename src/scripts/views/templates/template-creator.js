import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant_name">${restaurant.name}</h2>
    <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
      <h3>Information</h3>
      <h4>Alamat</h4>
      <p>${restaurant.address}</p>
      <h4>Kota</h4>
      <p>${restaurant.city} minutes</p>
      <h4>Menu Makanan</h4>
      <p>${restaurant.foods}</p>
      <h4>Menu Minuman</h4>
      <p>${restaurant.drinks}</p>
      <h4>Costumer Reviews</h4>
      <p>${restaurant.customerReviews}</p>
    </div>
    <div class="restaurant_description">
      <h3>Description</h3>
      <p>${restaurant.description}</p>
    </div>
`;

const createRestaurantListTemplate = (restaurant) => `
  <div id="restaurant-item">
    <div class="restarant-list__header">
      <img class="restarant-list__header__image" alt="${restaurant.name}"
           src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-list__header__rating">
        <h2>⭐️<span class="restaurant-list__header__rating__score">${restaurant.rating}</span></h2>
      </div>
    </div>
    <div class="restaurant-list__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${`${restaurant.description.slice(0, 250)} ...`}</p>
    </div>
  </div>
`;

export { createRestaurantListTemplate, createRestaurantDetailTemplate };
