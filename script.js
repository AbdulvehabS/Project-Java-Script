document.addEventListener('DOMContentLoaded', function () {
    const carListContainer = document.getElementById('carListContainer');
    const showMoreButton = document.getElementById('showMoreButton');
    const searchBar = document.getElementById('searchBar');

    const carsData = [
        { id: '1', name: 'BMW', price: '$65,000' },
        { id: '2', name: 'Audi Q8', price: '$73,000' },
        { id: '3', name: 'Mercedes CLE', price: '$65,000' },
        { id: '4', name: 'Skoda superb', price: '$30,000' },
        { id: '5', name: 'Golf 8', price: '$18,000' },
        { id: '6', name: 'Bentley', price: '$210,000' },
    ];

    
    function createCarListItem(car) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="car-details.html?id=${car.id}">
                <img src="images/car${car.id}.jpg" alt="${car.name}">
                <h2>${car.name}</h2>
                <p>Price: ${car.price}</p>
            </a>
        `;
        return listItem;
    }

    function renderCars(startIndex, endIndex) {
        for (let i = startIndex; i < endIndex; i++) {
            const car = carsData[i];
            carListContainer.appendChild(createCarListItem(car));
        }
    }


    renderCars(0, 3);


    showMoreButton.addEventListener('click', function () {
        const currentCarCount = carListContainer.children.length;
        const remainingCars = carsData.length - currentCarCount;
        const nextCarsToShow = Math.min(3, remainingCars);

        renderCars(currentCarCount, currentCarCount + nextCarsToShow);


        if (currentCarCount + nextCarsToShow === carsData.length) {
            showMoreButton.style.display = 'none';
        }
    });

    searchBar.addEventListener('input', function () {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredCars = carsData.filter(car => car.name.toLowerCase().includes(searchTerm));


        carListContainer.innerHTML = '';


        renderCars(0, Math.min(filteredCars.length, 3));


        if (filteredCars.length > 3) {
            showMoreButton.style.display = 'block';
        } else {
            showMoreButton.style.display = 'none';
        }
    });
});
