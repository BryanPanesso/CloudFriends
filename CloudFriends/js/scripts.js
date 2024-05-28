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

document.addEventListener('DOMContentLoaded', () => {
    fetchMeals();

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores de los campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const privacyPolicy = document.getElementById('privacy-policy').checked;

        // Validar los campos
        let errorMessage = '';

        if (!name) {
            errorMessage += 'El campo Nombre completo es obligatorio.<br>';
        }
        if (!email) {
            errorMessage += 'El campo Email es obligatorio.<br>';
        } else if (!validateEmail(email)) {
            errorMessage += 'Por favor, ingresa un Email válido.<br>';
        }
        if (!message) {
            errorMessage += 'El campo Comentarios es obligatorio.<br>';
        }
        if (!privacyPolicy) {
            errorMessage += 'Debes aceptar la política de privacidad.<br>';
        }

        // Mostrar mensajes de error si los hay
        const errorDiv = document.getElementById('error-message');
        if (errorMessage) {
            errorDiv.innerHTML = errorMessage;
            errorDiv.classList.remove('d-none');
        } else {
            errorDiv.classList.add('d-none');
            // Aquí puedes enviar el formulario si todos los campos son válidos
            form.submit(); // Descomentar para enviar el formulario
            alert('Formulario enviado correctamente!');
        }
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

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
