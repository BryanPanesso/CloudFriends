document.addEventListener('DOMContentLoaded', () => {
    fetchMeals();
});

async function fetchMeals() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        displayMeals(data.meals);
    } catch (error) {
        console.error('Error fetching meals:', error);
    }
}

function displayMeals(meals) {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = ''; // Clear existing content

    // Limitando el número de productos a 6
    meals.slice(0, 9).forEach(meal => {
        const mealCard = document.createElement('div');
        mealCard.className = 'col-md-4 mb-4';

        mealCard.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.substring(0, 150)}...</p>
                    <button class="btn btn-primary" disabled>Ver Receta</button>
                </div>
            </div>
        `;

        menuList.appendChild(mealCard);
    });
}
// ________________________________

