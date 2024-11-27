fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(data => {
        const container = document.createElement('div');
        for (let i = 0; i < data.carts.length; i++) {
            const cart = data.carts[i];
            const cartDiv = document.createElement('div');
            cartDiv.innerHTML = `
        <h2>Cart ID: ${cart.id}</h2>
        <p>User ID: ${cart.userId}</p>
        <p>Total Products: ${cart.totalProducts}</p>
        <p>Total Quantity: ${cart.totalQuantity}</p>
        <p>Total: ${cart.total}</p>
        <p>Discounted Total: ${cart.discountedTotal}</p>
        <h3>Products:</h3>
      `;
            for (let j = 0; j < cart.products.length; j++) {
                const product = cart.products[j];
                const productDiv = document.createElement('div');
                productDiv.innerHTML = `
          <p>Product ID: ${product.id}</p>
          <p>Title: ${product.title}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity: ${product.quantity}</p>
          <p>Total: ${product.total}</p>
          <p>Discount Percentage: ${product.discountPercentage}</p>
          <p>Discounted Total: ${product.discountedTotal}</p>
          <img src="${product.thumbnail}" alt="${product.title}">
        `;
                cartDiv.appendChild(productDiv);
            }
            container.appendChild(cartDiv);
        }
        document.body.appendChild(container);
    })
    .catch(error => console.error('Error fetching carts:', error));
// -------------------------------------------------------------
fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
        const block = document.createElement('div');
        for (let i = 0; i < data.recipes.length; i++) {
            const recipe = data.recipes[i];
            const recipeDiv = document.createElement('div');
            recipeDiv.innerHTML = `
        <h2>${recipe.name}</h2>
        <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
        <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
        <p><strong>Preparation time:</strong> ${recipe.prepTimeMinutes} хвилин</p>
        <p><strong>Cook time:</strong> ${recipe.cookTimeMinutes} хвилин</p>
        <p><strong>Servings:</strong> ${recipe.servings}</p>
        <p><strong>Calories:</strong> ${recipe.caloriesPerServing}</p>
        <h3>Ingredients:</h3>
      `;
            const ingredients = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const item = document.createElement('li');
                item.textContent = ingredient;
                ingredients.appendChild(item);
            });
            recipeDiv.appendChild(ingredients);

            const instructions = document.createElement('ul');
            recipe.instructions.forEach(instruction => {
                const item = document.createElement('li');
                item.textContent = instruction;
                instructions.appendChild(item);
            });
            recipeDiv.appendChild(instructions);

            const image = document.createElement('img');
            image.src = recipe.image;
            image.alt = recipe.name;
            recipeDiv.appendChild(image);

            block.appendChild(recipeDiv);
        }
        document.body.appendChild(block);
    })
    .catch(error => console.error('Error fetching recipes:', error));


