//console.log("Hozzá van csatolva!");
let htmlkod = "";
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
              src="images/ratings/rating-${item.rating.stars*10}.png">
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

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`;
});
//console.log(htmlkod);
document.querySelector(".products-grid").innerHTML = htmlkod;

document.querySelector(".add-to-cart-button").addEventListener('click',()=>{
    console.log(this.document.querySelector(".product-name").innerHTML);
    this.document.querySelector(".added-to-cart").style.opacity = 100;
    if(document.querySelector(".cart-quantity").innerHTML == 0){
      document.querySelector(".cart-quantity").innerHTML = 1;
    }else{
      document.querySelector(".cart-quantity").innerHTML = Number(document.querySelector(".cart-quantity").innerHTML) += 1;
    }

  });



