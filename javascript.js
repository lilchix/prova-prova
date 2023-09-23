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
var quantity1Input = document.getElementById("quantity1");
var quantity2Input = document.getElementById("quantity2");
var quantity3Input = document.getElementById("quantity3");
var totalCost1Output = document.getElementById("totalCost1");
var totalCost2Output = document.getElementById("totalCost2");
var totalCost3Output = document.getElementById("totalCost3");
var subTotalOutput = document.getElementById("subTotal");
var shippingCostOutput = document.getElementById("shippingCost");
var grandTotalOutput = document.getElementById("grandTotal");

quantity1Input.addEventListener("input", updateCosts);
quantity2Input.addEventListener("input", updateCosts);
quantity3Input.addEventListener("input", updateCosts);

function updateCosts() {
  var quantity1 = parseInt(quantity1Input.value);
  var quantity2 = parseInt(quantity2Input.value);
  var quantity3 = parseInt(quantity3Input.value);
  
  var cost1 = 20;
  var cost2 = 13;
  var cost3 = 15;
  
  var totalCost1 = quantity1 * cost1;
  var totalCost2 = quantity2 * cost2;
  var totalCost3 = quantity3 * cost3;
  
  totalCost1Output.textContent = "€" + totalCost1;
  totalCost2Output.textContent = "€" + totalCost2;
  totalCost3Output.textContent = "€" + totalCost3;
  
  var subTotal = totalCost1 + totalCost2 + totalCost3;
  var shippingCost = 8;
  var grandTotal = subTotal + shippingCost;
  
  subTotalOutput.textContent = "€" + subTotal;
  shippingCostOutput.textContent = "€" + shippingCost;
  grandTotalOutput.textContent = "€" + grandTotal;
}
