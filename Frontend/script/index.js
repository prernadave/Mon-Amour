

var img = document.getElementById('img');

var slides = ["https://assets.ajio.com/cms/AJIO/WEB/Top-D-Fashionation-5090-1440x470.gif", 'https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-MainBanner-P3-JPLCAvaasa-UpTo700OffOn1000.jpg', 'https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-MainBanner-P4-BestsellingWedding-AureliaW-Flat65.jpg', 'https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-MainBanner-P6-Handbags-LavieBaggit-Under999.jpg', 'https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-MainBanner-P7-SmartWorkwear-VanHeusenAllenSolly-Min40.jpg', "https://assets.ajio.com/cms/AJIO/WEB/Top-D-Fashionation-5090-1440x470.gif"];

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
var img1 = document.getElementById('img1');

var slides1 = ["https://assets.ajio.com/cms/AJIO/WEB/Paytm-1440x128pppp.jpg", "https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-offers-payupto3AJIOpoints.jpg", "https://assets.ajio.com/cms/AJIO/WEB/1440x128--p.jpg"]
var Start1 = 0;
function slider1() {
    if (Start1 < slides1.length) {
        Start1 = Start1 + 1;
    }
    else {
        Start1 = 1;
    }
    console.log(img1);
    img1.innerHTML = "<img src=" + slides1[Start1 - 1] + ">";

}
setInterval(slider1, 3000);

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (50000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);

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

var img3= document.getElementById('img3')
var slides3 = ["https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P1-BestOfInternationalBrands-FCUKTrendyol-Upto60.jpg", "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P2-Cultsport-Min60.jpg","https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P3-WinterIsComing-BullmerBelleFille-Starting299Extra30.jpg", "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P4-MnS-Upto40Extra35.jpg", "https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P5-GAP-20Offon2.jpg"]
var start3=0
function slider3(){
    if (start3 < slides3.length) {
        start3 = start3 + 1;
    }
    else {
        start3 = 1;
    }
    console.log(img2);
    img3.innerHTML = "<img src=" + slides3[start3 - 1] + ">";


}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




