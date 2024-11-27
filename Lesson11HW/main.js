fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(data => {
        const container = document.createElement('div');
        data.carts.forEach(cart => {
            const cartDiv = document.createElement('div');

            const cartId = document.createElement('h2');
            cartId.textContent = `Cart ID: ${cart.id}`;
            cartDiv.appendChild(cartId);

            const userId = document.createElement('p');
            userId.textContent = `User ID: ${cart.userId}`;
            cartDiv.appendChild(userId);

            const totalProducts = document.createElement('p');
            totalProducts.textContent = `Total Products: ${cart.totalProducts}`;
            cartDiv.appendChild(totalProducts);

            const totalQuantity = document.createElement('p');
            totalQuantity.textContent = `Total Quantity: ${cart.totalQuantity}`;
            cartDiv.appendChild(totalQuantity);

            const total = document.createElement('p');
            total.textContent = `Total: ${cart.total}`;
            cartDiv.appendChild(total);

            const discountedTotal = document.createElement('p');
            discountedTotal.textContent = `Discounted Total: ${cart.discountedTotal}`;
            cartDiv.appendChild(discountedTotal);

            const productsHeader = document.createElement('h3');
            productsHeader.textContent = 'Products:';
            cartDiv.appendChild(productsHeader);

            cart.products.forEach(product => {
                const productDiv = document.createElement('div');

                const productId = document.createElement('p');
                productId.textContent = `Product ID: ${product.id}`;
                productDiv.appendChild(productId);

                const title = document.createElement('p');
                title.textContent = `Title: ${product.title}`;
                productDiv.appendChild(title);

                const price = document.createElement('p');
                price.textContent = `Price: ${product.price}`;
                productDiv.appendChild(price);

                const quantity = document.createElement('p');
                quantity.textContent = `Quantity: ${product.quantity}`;
                productDiv.appendChild(quantity);

                const productTotal = document.createElement('p');
                productTotal.textContent = `Total: ${product.total}`;
                productDiv.appendChild(productTotal);

                const discountPercentage = document.createElement('p');
                discountPercentage.textContent = `Discount Percentage: ${product.discountPercentage}`;
                productDiv.appendChild(discountPercentage);

                const discountedTotal = document.createElement('p');
                discountedTotal.textContent = `Discounted Total: ${product.discountedTotal}`;
                productDiv.appendChild(discountedTotal);

                const thumbnail = document.createElement('img');
                thumbnail.src = product.thumbnail;
                thumbnail.alt = product.title;
                productDiv.appendChild(thumbnail);

                cartDiv.appendChild(productDiv);
            });

            container.appendChild(cartDiv);
        });
        document.body.appendChild(container);
    })
    .catch(error => console.error('Error fetching carts:', error));

// -------------------------------------------------------------
fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
        const block = document.createElement('div');
        data.recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');

            const recipeName = document.createElement('h2');
            recipeName.textContent = recipe.name;
            recipeDiv.appendChild(recipeName);

            const cuisine = document.createElement('p');
            cuisine.innerHTML = `<strong>Cuisine:</strong> ${recipe.cuisine}`;
            recipeDiv.appendChild(cuisine);

            const difficulty = document.createElement('p');
            difficulty.innerHTML = `<strong>Difficulty:</strong> ${recipe.difficulty}`;
            recipeDiv.appendChild(difficulty);

            const prepTime = document.createElement('p');
            prepTime.innerHTML = `<strong>Preparation time:</strong> ${recipe.prepTimeMinutes} хвилин`;
            recipeDiv.appendChild(prepTime);

            const cookTime = document.createElement('p');
            cookTime.innerHTML = `<strong>Cook time:</strong> ${recipe.cookTimeMinutes} хвилин`;
            recipeDiv.appendChild(cookTime);

            const servings = document.createElement('p');
            servings.innerHTML = `<strong>Servings:</strong> ${recipe.servings}`;
            recipeDiv.appendChild(servings);

            const calories = document.createElement('p');
            calories.innerHTML = `<strong>Calories:</strong> ${recipe.caloriesPerServing}`;
            recipeDiv.appendChild(calories);

            const ingredientsHeader = document.createElement('h3');
            ingredientsHeader.textContent = 'Ingredients:';
            recipeDiv.appendChild(ingredientsHeader);

            const ingredientsList = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const item = document.createElement('li');
                item.textContent = ingredient;
                ingredientsList.appendChild(item);
            });
            recipeDiv.appendChild(ingredientsList);

            const instructionsList = document.createElement('ul');
            recipe.instructions.forEach(instruction => {
                const item = document.createElement('li');
                item.textContent = instruction;
                instructionsList.appendChild(item);
            });
            recipeDiv.appendChild(instructionsList);

            const image = document.createElement('img');
            image.src = recipe.image;
            image.alt = recipe.name;
            recipeDiv.appendChild(image);

            block.appendChild(recipeDiv);
        });
        document.body.appendChild(block);
    })
    .catch(error => console.error('Error fetching recipes:', error));



