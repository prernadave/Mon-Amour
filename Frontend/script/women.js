let maleproducts = []
let url = "http://localhost:4000/female"
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        maleproducts = data
        console.log(data);
        displayproduct(data)

    });

function displayproduct(data) {
    let parent = document.getElementById("product-container");
    parent.innerHTML = "";
    data.map((elem) => {
        let product = document.createElement("div")
        product.setAttribute("class", "femalediv");

        let photo = document.createElement("img");
        photo.setAttribute("class", "product-img");
        photo.setAttribute("src", elem.imageURL);

        let brand = document.createElement("p")
        brand.setAttribute("class", "product-brand");
        brand.innerHTML = elem.brand;

        let title = document.createElement("p")
        title.setAttribute("class", "product-title");
        title.innerHTML = elem.product;

        let price_container = document.createElement("div")
        price_container.setAttribute("class", "price-container");


        let price = document.createElement("p")
        price.setAttribute("class", "price");
        price.innerHTML = `₹${elem.price}`;

        let striked = document.createElement("p")
        striked.setAttribute("class", "striked-price");
        striked.innerHTML = `₹${elem.strikedOffPrice}`;


        let offer = document.createElement("p")
        offer.setAttribute("class", "offer");
        let offerValue = Math.floor(
            ((elem.strikedOffPrice - elem.price) / elem.strikedOffPrice) * 100
        );
        offer.innerHTML = `(${offerValue}% off)`;

        price_container.append(price, striked, offer)
        product.append(photo, brand, title, price_container)
        parent.append(product);

        photo.addEventListener("click", function () {
            addToCart(elem);
        });
    });



}

var x = JSON.parse(localStorage.getItem("prernacart"));
    if (x == null) {
       cartarr= [];
    } else {
        var cartarr = JSON.parse(localStorage.getItem("prernacart"));
    }

    // On Click function
    function addToCart(item) {
        if (cartarr.length == 1) {
            cartarr.pop();
        }
        cartarr.push(item);

        localStorage.setItem("prernacart", JSON.stringify(cartarr));

        window.location.href = "clicked.html";
    }



// sort-products-option
let sort = document.getElementById("sort-products-option")
console.log(sort);
sort.addEventListener("change", SORT)
function SORT() {
    let sorting = document.getElementById("sort-products-option").value
    console.log(sorting);
    if (sorting == "Discount") {
        window.location.reload()
    } else if (sorting == "lowtohigh") {
        maleproducts.sort((a, b) => a.price - b.price)
        displayproduct(maleproducts)
    } else if (sorting == "hightolow") {
        maleproducts.sort((a, b) => b.price - a.price)
        displayproduct(maleproducts)
    }

}

function filterProducts() {
    // Filtering Based On Gender
    let menFilter = document.getElementById("menFilter");
    let womenFilter = document.getElementById("womenFilter");
    let kidFilter = document.getElementById("kidsFilter");

    if (menFilter.checked == true) window.location.href = "./men.page.html";

    if (womenFilter.checked == true) window.location.href = "./women.page.html";

    if (kidFilter.checked == true) window.location.href = "./kidsStyles.html";

    // Filtering based on Categories
    let queryURL = "http://localhost:4000/filter?items=[";
    let filterQuery = [];
    let shirtFilter = document.getElementById("shirtFilter");
    let tshirtFilter = document.getElementById("tshirtFilter");
    let jacketFilter = document.getElementById("jacketFilter");
    let trouserFilter = document.getElementById("trouserFilter");
    let shortsFilter = document.getElementById("shortsFilter");
    let topsFilter = document.getElementById("topsFilter");
    let kurtasFilter = document.getElementById("kurtasFilter");
    let sareeFilter = document.getElementById("sareeFilter");
    
    let jeans = document.getElementById("jeans")


    if (shirtFilter.checked == true) filterQuery.push("shirts");
    if (tshirtFilter.checked == true) filterQuery.push("T-shirts");
    if (jacketFilter.checked == true) filterQuery.push("jackets");
    if (trouserFilter.checked == true) filterQuery.push("pants");
    if (shortsFilter.checked == true) filterQuery.push("shorts");
    if (topsFilter.checked == true) filterQuery.push("top");
    if (kurtasFilter.checked == true) filterQuery.push("kurta");
    if (sareeFilter.checked == true) filterQuery.push("saree");
    


    filterQuery.map((elem) => {
        queryURL = queryURL + elem + ",";
    });
    queryURL = queryURL.slice(0, -1);
    queryURL += "]";

    filteredData(queryURL);
}

async function filteredData(queryURL) {
    let res = await fetch(queryURL);
    let data = await res.json();
    data = data.products;
    console.log(data);
    displayproduct(data);
}

let button = document
    .getElementById("filterButton")
    .addEventListener("click", filterProducts);
