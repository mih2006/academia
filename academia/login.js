function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var nome = document.getElementById('nome').value;
    var tel = document.getElementById('tel').value;
    var mail = document.getElementById('mail').value;

    if (login == "admin" && senha == "admin") {
        alert('Sucesso');
        location.href = "home.html";
    } else {
        alert('Usuario ou senha incorretos');
    }

}

function salvar cadastro (Event) {
    Event.Preventdefault ();

    var login= Document.getElementById ('login').value;
    var senha= document.getElementById ('senha').value;

    if ('login'||'senha') {
        alert ('preencha todos os campos');
        return;
    }

    set (ref (DB, 'usuário')+ login),{
        login: login,
        senha: senha
    };

    .Then (()=>{
        alert("usuário cadastrado com sucesso!");
        location.href = "home.html"
    })

    .Catch (1 error => {
        console.error ("erro ao salvar", error);
        alert("erro ao cadastrar.");
    })
 
}