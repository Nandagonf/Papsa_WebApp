let mail = document.getElementById("floatingMail")
let key = document.getElementById("floatingSenha")
let send = document.getElementById("btn-send")


send.addEventListener('click', function () {

    if (mail.value === "nanda@teste.com" && key.value != "") {

        alert("Bem Vindo!")
        window.location = 'user.html'

    } else {
        alert("Login Invalido!")
    }

})

