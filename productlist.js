const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h1").textContent = product.productdisplayname;
  copy.querySelector("p.price").textContent = "€ " + product.price;
  // copy.querySelector("p.discount").textContent = product.discount;
  copy.querySelector("a").href = `product.html?id=${product.id}`;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }

  copy.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("img.productimage").alt = product.productdisplayname;

  const parent = document.querySelector("section");
  parent.appendChild(copy);
}

/* <template id="smallProductTemplate"><article class="smallProduct onSale">
          <a href="product.html"
            ><img src="images/plist1.jpg" alt="Sunglasses"
          /></a>
          <p>Sunglasses</p>
          <p class="price">€ 20</p>
          <div class="sold">
            <p>SOLD OUT</p>
          </div>
          <div class="discount">
            <p>25%</p>
          </div>
        </article></template> */
