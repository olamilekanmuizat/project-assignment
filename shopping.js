const products = [
    { name: "Laptop", price: 300000 },
    { name: "Phone", price: 200000 },
    { name: "Headphone", price: 20000 },
    { name: "Keyboard", price: 15000 },
    { name: "Mouse", price: 10000 }
];
let cart = [];

const productsDiv = document.getElementById("products")
const cartDiv = document.getElementById("cart");
const totalSpan = document.getElementById("total");

products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>#${product.price}</p>
        <button>Add to Cart</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
            addToCart(product);
    });
    productsDiv.appendChild(div);
});

// add item
function addToCart(product) {
    cart.push(product);
    renderCart();
}

// remove item
function removeFromCart(index){
    cart.splice(index, 1);
    renderCart();
}

// Display cart and total
function renderCart() {
    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            ${item.name} - #${item.price}
            <button onclick="removeFromCart(${index})">
            Remove
            </button>
        `;
        cartDiv.appendChild(div);
    });
    totalSpan.textContent = total;
}