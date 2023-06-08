/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';
/* eslint-disable no-undef */

// class FavoriteRestaurantSearchView {
//   getTemplate() {
//     return `
//       <div id="restaurant-search-container">
//       <input id="query" type="text">
//       <div class="restaurant-result-container">
//         <ul class="restaurants">
//         </ul>
//       </div>
//       </div>
//     `;
//   }

//   runWhenUserIsSearching(callback) {
//     document.getElementById('query').addEventListener('change', (event) => {
//       callback(event.target.value);
//     });
//   }
// }

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructorPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructorPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('resto a');

      expect(presenter.latestQuery).toEqual('resto a');
    });

    it('should ask the model to search for restaurants', () => {
      searchRestaurants('resto a');

      expect(favoriteRestaurants.searchRestaurants)
        .toHaveBeenCalledWith('resto a');
    });

    it('should show the found Restaurants', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);
      expect(document.querySelectorAll('.restaurant-item').length)
        .toEqual(1);

      presenter._showFoundRestaurants([{
        id: 1,
        name: 'Satu',
      }, {
        id: 2,
        name: 'Dua',
      }]);
      expect(document.querySelectorAll('.restaurant-item').length)
        .toEqual(2);
    });

    it('should show the name of the found Restaurants', () => {
      presenter._showFoundRestaurants([{
        id: 1,
        name: 'Satu',
      }]);
      expect(document.querySelectorAll('.restaurant_name')
        .item(0).textContent)
        .toEqual('Satu');
    });

    // it('should show the name of the found Restaurants', () => {
    //   presenter._showFoundRestaurants([{ id: 1, name: 'Satu' }]);
    //   expect(document.querySelectorAll('.restaurant_name').item(0).textContent)
    //     .toEqual('Satu');
    //   presenter._showFoundRestaurants([
    //     { id: 1, name: 'Satu' },
    //     { id: 2, name: 'Dua' },
    //   ]);

    //   const restaurantNames = document.querySelectorAll('.restaurant_name');
    //   expect(restaurantNames.item(0).textContent).toEqual('Satu');
    //   expect(restaurantNames.item(1).textContent).toEqual('Dua');
    // });

    // it('should show - for found restaurant without name', () => {
    //   presenter._showFoundRestaurants([{ id: 1 }]);
    //   expect(document.querySelectorAll('.restaurant_name').item(0).textContent)
    //     .toEqual('-');
    // });

    // it('should show the restaurants found by Favorite Restaurants', (done) => {
    //   document.getElementById('restaurant-search-container').addEventListener('Restaurants:searched:updated', () => {
    //     expect(document.querySelectorAll('#restaurant-item').length)
    //       .toEqual(3);
    //     done();
    //   });

    //   favoriteRestaurants.searchRestaurants.withArgs('resto a').and.returnValues([
    //     { id: 111, name: 'resto abc' },
    //     { id: 222, name: 'ada juga resto abcde' },
    //     { id: 333, name: 'ini juga boleh resto a' },
    //   ]);

    //   searchRestaurants('resto a');
    // });

    it('should show - when the restaurant returned does not contain a name', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        const restaurantNames = document.querySelectorAll('.restaurant_name');
        expect(restaurantNames.item(0).textContent).toEqual('-');

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('resto a').and.returnValues([
        { id: 444 },
      ]);

      searchRestaurants('resto a');
    });

    // it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
    //   document.getElementById('restaurant-search-container')
    //     .addEventListener('restaurants:searched:updated', () => {
    //       const restaurantNames = document.querySelectorAll('.restaurant_name');

    //       expect(restaurantNames.item(0).textContent)
    //         .toEqual('resto abc');
    //       expect(restaurantNames.item(1).textContent)
    //         .toEqual('ada juga resto abcde');
    //       expect(restaurantNames.item(2).textContent)
    //         .toEqual('ini juga boleh resto a');

    //       done();
    //     });

    //   favoriteRestaurants.searchRestaurants.withArgs('resto a')
    //     .and
    //     .returnValues([
    //       { id: 111, name: 'resto abc' },
    //       { id: 222, name: 'ada juga resto abcde' },
    //       { id: 333, name: 'ini juga boleh resto a' },
    //     ]);

    //   searchRestaurants('resto a');
    // });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurants(' ');

      expect(favoriteRestaurants.getAllRestaurants)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('resto a').and.returnValues([]);

      searchRestaurants('resto a');
    });

    it('should not show any restaurant', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(0);
        done();
      });
      favoriteRestaurants.searchRestaurants.withArgs('resto a').and.returnValues([]);
      searchRestaurants('resto a');
    });
  });
});
