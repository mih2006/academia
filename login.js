function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    if (login == "admin" && senha == "admin") {
        alert('Sucesso');
        location.href = "home.html";
    } else {
        alert('Usuario ou senha incorretos');
    }

    console.log("Email: " + email);
    console.log("Telefone: " + telefone);
}