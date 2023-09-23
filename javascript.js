function aggiungiAlCarrello() {
  var carrello = document.getElementById("carrello");
  var numero = parseInt(carrello.innerHTML);
  numero++;
  carrello.innerHTML = numero;
}
function rimuoviDalCarrello() {
  var carrello = document.getElementById("carrello");
  var numero = parseInt(carrello.innerHTML);
  numero--;
  carrello.innerHTML = numero;
}
function svuotaCarrello() {
  var carrello = document.getElementById("carrello");
  carrello.innerHTML = 0;
}


/*menu*/
var Menu = {
  el: {
    menu: $('.menu'),
    menuTop: $('.menu-top'),
    menuClose: $('.menu-close'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom'),
    menuText: $('.menu-text')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.menu
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-expand expand');
    Menu.el.menuMiddle.toggleClass('menu-middle-expand expand');
    Menu.el.menuBottom.toggleClass('menu-bottom-expand expand'); 
    Menu.el.menuText.toggleClass('menu-text-expand');
    Menu.el.menuClose.toggleClass('menu-close-visible');
  }
};
  
  //Stop menu item click closing the menu
  $(".menu .menu-global").click(function(e) {
      e.stopPropagation();
});

Menu.init();



/*swiper*/
var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },)

/*jQuery ready compatto*/
    $(function
    ()
    {
    $("h1").click(function
    ()
    {
    $("#prodotto1").slideDown();
    $("#prodotto2").slideDown("slow");
    $("#prodotto3").slideDown(3000);
    });
    });


                                               // prodotti
// Esempio di dati del carrello (caffettiere)
const cartItems = [
    { id: 1, name: "Caffettiera Moka Express", price: 25 },
    { id: 2, name: "Caffettiera a filtro automatica", price: 45 },
    { id: 3, name: "Caffettiera Aeropress", price: 30 }
];

// Funzione per aggiornare il carrello
function updateCart() {
    const cartElement = document.getElementById("cart");
    const totalElement = document.getElementById("total");
    let total = 0;

    // Pulisci il contenuto del carrello
    cartElement.innerHTML = "";

    // Aggiungi gli elementi del carrello
    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.id = `cart-item-${item.id}`;
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price} €</span>
        `;
        cartElement.appendChild(cartItem);
        total += item.price;
    });

    // Aggiorna il totale
    totalElement.textContent = total;
}

// Aggiungi un evento al pulsante di pagamento
const checkoutButton = document.getElementById("checkout");
checkoutButton.addEventListener("click", () => {
    alert("Pagamento effettuato con successo!");
});

// Aggiorna il carrello inizialmente
updateCart();
