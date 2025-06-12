import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
/*
    1.html-be a js-ek importálása
    2. product.js létrehozása a javascript mappán belül az első 3 termékkel
    3. foreach ciklussal végigmenni a products listán és a tartalmát kiíratni
    4. egy változó létrehozása ami a generált html kódot fogja tartalmazni
    5. az egyes termékek adatainak beírása a generálandó html kódba
    6. innerHTML használatával a generált html kód feltöltése az amazon.html-be
*/
contCart();
let htmlkod = '';
products.forEach((item)=>{

    htmlkod += 
        `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${item.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${item.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${item.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${item.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(item.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${item.id}">
            Add to Cart
          </button>
        </div>`
})


document.querySelector('.products-grid').innerHTML = htmlkod;

document.querySelectorAll('.js-add-to-cart').forEach((gomb) =>{
  gomb.addEventListener('click', ()=>{
    cart.push(gomb.dataset.productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    contCart();
  })
});


function contCart(){
  let countC = 0;
  cart.forEach((item)=>{
    countC += 1;
  });
  document.querySelector('.cart-quantity').innerHTML = countC;
}
    