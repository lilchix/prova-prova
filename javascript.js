// Esempio di dati dei prodotti
const productsData = [
    { id: 1, name: "Caffettiera Moka Express", price: 25, image: "moka.jpg", description: "Una caffettiera classica per il caffè espresso." },
    { id: 2, name: "Caffettiera a filtro automatica", price: 45, image: "filtro.jpg", description: "Per un caffè filtrato fresco e aromatico." },
    { id: 3, name: "Caffettiera Aeropress", price: 30, image: "aeropress.jpg", description: "Un sistema di estrazione versatile per il caffè." }
];

// Dati del carrello
const cartItems = [];

// Funzione per creare un elemento di prodotto
function createProductElement(product) {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Prezzo: ${product.price} €</p>
        <button class="add-to-cart" data-id="${product.id}">Aggiungi al carrello</button>
    `;
    return productElement;
}

// Funzione per aggiornare il carrello
function updateCart() {
    const cartElement = document.getElementById("cart");
    const cartCountElement = document.getElementById("cart-count");
    const cartTotalElement = document.getElementById("cart-total");
    let total = 0;

    // Pulisci il contenuto del carrello
    cartElement.innerHTML = "";

    // Aggiungi gli elementi del carrello
    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p>${item.name}</p>
                <p>Prezzo: ${item.price} €</p>
                <p>Quantità: ${item.quantity}</p>
            </div>
            <button class="remove-from-cart" data-id="${item.id}">Rimuovi</button>
        `;
        cartElement.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    // Aggiorna il conteggio del carrello e il totale
    cartCountElement.textContent = cartItems.length;
    cartTotalElement.textContent = `Totale: ${total} €`;
}

// Aggiungi event listener per il pulsante "Carrello"
const cartButton = document.getElementById("cart-button");
cartButton.addEventListener("click", () => {
    const cartElement = document.getElementById("cart");
    cartElement.classList.toggle("show-cart");
});

// Aggiungi event listener per i pulsanti "Aggiungi al carrello"
const productsElement = document.getElementById("products");
productsElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
        const productId = parseInt(event.target.getAttribute("data-id"), 10);
        const product = productsData.find(product => product.id === productId);

        if (product) {
            const cartItem = cartItems.find(item => item.id === productId);

            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cartItems.push({ ...product, quantity: 1 });
            }

            updateCart();
        }
    }
});

// Aggiungi event listener per i pulsanti "Rimuovi"
const cartElement = document.getElementById("cart");
cartElement.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-from-cart")) {
        const productId = parseInt(event.target.getAttribute("data-id"), 10);
        const index = cartItems.findIndex(item => item.id === productId);

        if (index !== -1) {
            const cartItem = cartItems[index];

            if (cartItem.quantity > 1) {
                cartItem.quantity -= 1;
            } else {
                cartItems.splice(index, 1);
            }

            updateCart();
        }
    }
});

// Popola la pagina con i prodotti
const productsContainer = document.getElementById("products");
productsData.forEach(product => {
    const productElement = createProductElement(product);
    productsContainer.appendChild(productElement);
});
