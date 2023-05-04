
const emptyCartMessage = document.getElementById('empty-cart-message');
var finalcart = JSON.parse(localStorage.getItem("Allcartproduct"));
if (finalcart.length === 0) {
    // Hide cart items and show empty cart message

    emptyCartMessage.style.display = 'block';

} else {
    // Show cart items and hide empty cart message
    document.querySelector(".product_left_container").style.display = 'block';
    emptyCartMessage.style.display = 'none';



    finalcart.map(function (item, index) {
        var product_single = document.querySelector('.product-div')

        var single = document.createElement("div");

        var product_left_container = document.createElement("div");

        var detail_left = document.createElement("div");

        var product_image = document.createElement("img");
        product_image.setAttribute("src", item.imageURL);

        var price1 = document.createElement("h3");
        price1.textContent = "Rs." + " " + item.price;
        price1.setAttribute('class', 'price')

        var product1 = document.createElement("h4");
        product1.textContent = item.product;
        product1.setAttribute('class', 'product');

        var removeBtn = document.createElement("button")
        removeBtn.textContent = "Remove Product"
        removeBtn.setAttribute('class', 'btn-remove');
        removeBtn.addEventListener('click', () => {
            finalcart.splice(index, 1); // remove the item from the finalcart array
            alert('Product removed successfully')
            localStorage.setItem('Allcartproduct', JSON.stringify(finalcart)); // update the cart in local storage
            location.reload();

        })



        single.append(product_image, product1, price1, removeBtn);
        document.querySelector(".detail_left").append(single)
        document.querySelector(".product_left_container").append(detail_left);
        document.querySelector("#product_main_container").append(product_left_container);

    })
}


var finalprice = finalcart.reduce(function (acc, cv) {
    var x = Number(cv.price);
    return acc + x;
}, 0);


var bagtotal = document.createElement("p");
bagtotal.textContent = "₹" + finalprice;

var totalamount = document.createElement("p");
totalamount.textContent = "₹" + finalprice;

document.querySelector(".bag_total_price").append(bagtotal);
document.querySelector(".totalamount").append(totalamount);


console.log(finalcart.length);

let cart = document.querySelector('.cart')
cart.addEventListener('click', () => {

    window.location.href = "cart.html"

})
