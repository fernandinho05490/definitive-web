function cadastrar() {
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const usuario = {
    nome: nome,
    data: data,
    cpf: cpf,
    email: email,
    password: password
    };
    
    localStorage.setItem("usuario", JSON.stringify(usuario));
    }
    
    const form = document.querySelector('.login__form');
    
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const storedUsuario = JSON.parse(localStorage.getItem('usuario'));
    
    if (email === storedUsuario.email && password === storedUsuario.password) {
        window.location.href = 'home.html';
    } else {
    alert('E-mail ou senha inválidos!');
    }
    });