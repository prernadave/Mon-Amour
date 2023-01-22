document.querySelector("form").addEventListener("submit", fnLogin);
  function fnLogin(event) {
    event.preventDefault();

    var cardNumber = document.querySelector(".cardNumber").value;
    var cvv = document.querySelector(".CVV").value;
    var expDate = document.querySelector(".expDate").value;

    if (cardNumber == 12345678 && cvv == 123 && expDate == "12/25") {
      window.location.href = "otp.html";
      alert("Redirecting to OTP page");
    } else {
      alert("Details incorrect!");
    }
  }