document.querySelector("form").addEventListener("submit", submitOTP);

function submitOTP(event){
    event.preventDefault();

    var otp = document.querySelector(".otp").value;

    if(otp == 1212){
        alert("Order Placed Successfully.")
        alert("Payment Successful, redirecting to Home");
        window.location.href = "index.html"

    } else{
        alert("Wrong OTP!")
    }
}