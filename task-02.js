const ingredients = [ "Potatoes", "Mushrooms", "Garlic", "Tomatoes", "Herbs", "Condiments", ];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach(function(ingredient){
    const itt = document.createElement("li");

    itt.textContent = ingredient;

    itt.classList.add("item");

    ingredientsList.appendChild(itt);
});
