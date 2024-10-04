fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('product-list');
        let htmlContent = '';

        products.forEach(product => {
            htmlContent += `
                <div class="product">
                <img src=${product.image} style="width: 210px">
                    <h4 style="color: blue";>${product.name}</h4>
                    <p>${product.description}</p>
                    <p class="price">Minutes: ${product.minutes}</p>
                </div>
            `;
        });

        productList.innerHTML = htmlContent;
    })
    .catch(error => console.error('Error loading products:', error));
