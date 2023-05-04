var y = JSON.parse(localStorage.getItem("Allcartproduct"));
if (y == null) {
  ArrOfAllCartproduct = [];
}
else {
  var ArrOfAllCartproduct = JSON.parse(localStorage.getItem("Allcartproduct"));
}
// var cartItemArr = [];



var cartItemArr = JSON.parse(localStorage.getItem("prernacart"))

cartItemArr.map(function (item) {
  document
    .querySelector(".main_image>img")
    .setAttribute("src", cartItemArr[0].imageURL);


  var brand1 = document.createElement("h3");
  brand1.setAttribute("class", "brand_name")
  brand1.textContent = item.brand;

  var category1 = document.createElement("div");
  category1.setAttribute("class", "category-div")
  category1.textContent = item.category;

  var gender1 = document.createElement("div");
  gender1.setAttribute("class", "gender")
  gender1.textContent = item.gender;


  var product1 = document.createElement("h3");
  product1.setAttribute("class", "title")

  product1.textContent = item.product;

  var price1 = document.createElement("h2");
  price1.textContent = "₹" + item.price;

  var strikedOffPrice1 = document.createElement("h4");
  strikedOffPrice1.setAttribute("class", "striked")
  strikedOffPrice1.textContent = "MRP" + " " + "₹" + item.strikedOffPrice;

  var priceincl = document.createElement("h5");
  priceincl.textContent = "Price inclusive of all taxes";


  document
    .querySelector(".right_content")
    .append(brand1, category1, gender1, product1, price1, strikedOffPrice1, priceincl);



  
    document.querySelector(".btn1").addEventListener("click", function () {
      
      if (!localStorage.getItem('Token')) {
        alert('Please Login First');
        window.location.href = "login.html";
      }else{
      addToCart(item);
      alert("Added to cart");
      window.location.href = "cart.html";
      }
    });



  
});
console.log(ArrOfAllCartproduct.length)



function addToCart(item) {
  ArrOfAllCartproduct.push(item);
  localStorage.setItem("Allcartproduct", JSON.stringify(ArrOfAllCartproduct));

}


let cart = document.querySelector('.cart')
  cart.addEventListener('click', () => {

    window.location.href = "cart.html"

  })

