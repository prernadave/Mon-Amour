
let cart = document.querySelector('.cart')
cart.addEventListener('click', () => {
    if (localStorage.getItem('Token')) {
        window.location.href = "cart.html"
    } else {
        alert('Please Login First or Create a new account!')
        window.location.href = 'login.html'
    }
})
let user = localStorage.getItem('Name')
let userName = document.querySelector('.username')
userName.innerHTML = `Hello,${user}`
console.log(userName);


var img = document.getElementById('img');

var slides = ["https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-main-P6-AvaasaDNMX-Under599.jpg", 'https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-MainBanner-P3-JPLCAvaasa-UpTo700OffOn1000.jpg', 'https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-MainBanner-P4-BestsellingWedding-AureliaW-Flat65.jpg', 'https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-MainBanner-P6-Handbags-LavieBaggit-Under999.jpg', 'https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-MainBanner-P7-SmartWorkwear-VanHeusenAllenSolly-Min40.jpg', "https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-UHPwomen-p1-m&s-forevernew-upto50.jpg"];

var Start = 0;
function slider() {
    if (Start < slides.length) {
        Start = Start + 1;
    }
    else {
        Start = 1;
    }
    console.log(img);
    img.innerHTML = "<img src=" + slides[Start - 1] + ">";

}
setInterval(slider, 3000);

// second slider--------------------second slider------------------second slider
// 



   
   

// ------------------------------------------third slider-------------------------------------------------

var img2 = document.getElementById('img2');

var slides2 = ["https://assets.ajio.com/cms/AJIO/WEB/14012023-UHP-D-26Hrs-P2-AnubhuteeJuniperSoch-Min60.jpg", "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-26Hrs-P1-Winterwear-GAP-25Off.jpg", "https://assets.ajio.com/cms/AJIO/WEB/14012023-UHP-D-26Hrs-P3-Winterwear-USPAISceneryVeroModa-Flat70.jpg"]
var Start2 = 0;
function slider2() {
    if (Start2 < slides2.length) {
        Start2 = Start2 + 1;
    }
    else {
        Start2 = 1;
    }
    console.log(img2);
    img2.innerHTML = "<img src=" + slides2[Start2 - 1] + ">";

}
setInterval(slider2, 3000);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var img3 = document.getElementById('img3')
var slides3 = ["https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P1-BestOfInternationalBrands-FCUKTrendyol-Upto60.jpg", "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P2-Cultsport-Min60.jpg", "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P3-WinterIsComing-BullmerBelleFille-Starting299Extra30.jpg", "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P4-MnS-Upto40Extra35.jpg", "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P5-GAP-20Offon2.jpg"]
var start3 = 0
function slider3() {
    if (start3 < slides3.length) {
        start3 = start3 + 1;
    }
    else {
        start3 = 1;
    }
    console.log(img2);
    img3.innerHTML = "<img src=" + slides3[start3 - 1] + ">";


}





