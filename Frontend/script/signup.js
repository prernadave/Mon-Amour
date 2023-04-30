
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
    fetch("http://localhost:4000/register", {
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

})

