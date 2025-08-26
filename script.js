const products = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 40 }
];

const cart = [];

function loadProducts() {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = "";
    products.forEach(product => {
        const productEl = document.createElement("div");
        productEl.classList.add("product");
        productEl.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productEl);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById("cart-count").textContent = cart.length;
    updateCart();
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("open");
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
}

function checkout() {
    alert("Proceeding to checkout...");
}

window.onload = loadProducts;
