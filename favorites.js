document.addEventListener('DOMContentLoaded', function () {
    const favoritesContainer = document.getElementById('favoritesContainer');


    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];


    function createFavoriteCarItem(car) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="images/car${car.id}.jpg" alt="${car.name}">
            <h2>${car.name}</h2>
            <p>Price: ${car.price}</p>
        `;
        return listItem;
    }


    favorites.forEach(favorite => {
        favoritesContainer.appendChild(createFavoriteCarItem(favorite));
    });


    const addToFavoritesButton = document.getElementById('addToFavorites');
    if (addToFavoritesButton) {
        addToFavoritesButton.addEventListener('click', function () {
  
            const carDetails = JSON.parse(localStorage.getItem('carDetails')) || {};


            if (!favorites.find(favorite => favorite.id === carDetails.id)) {
                favorites.push(carDetails);

                localStorage.setItem('favorites', JSON.stringify(favorites));


                favoritesContainer.appendChild(createFavoriteCarItem(carDetails));
            }
        });
    }
});
