let carts = document.querySelector('.cart')
carts.addEventListener('click', () => {
    if (localStorage.getItem('Token')) {
        window.location.href = "cart.html"
    } else {
        alert('Please Login First or Create a new account!')
        window.location.href = 'login.html'
    }
})
const registeration_form = document.querySelector("form")

registeration_form.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")




    const object = {
        name: name.value,
        email: email.value,
        password: password.value,
    }

    console.log(object);
    fetch("https://faithful-elk-sweatsuit.cyclic.app/register", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object),
    }).then((response) => {
        return response.json()
    }).then((data) => {
        //   console.log(data);

        alert(`${data.name} successfully created`)
    }).catch((error) => {
        console.log({ "error": error });
    })

});

let cart = document.querySelector('.cart')
cart.addEventListener('click', () => {

    window.location.href = "cart.html"

});