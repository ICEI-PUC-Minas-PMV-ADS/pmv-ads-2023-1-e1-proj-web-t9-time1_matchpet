//--------------------------------------------------------------------------------------------------------
//login.js
// **************Não está finalizado, farei alterações...Separando login do cadastro************
//--------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  console.log('Inicializando o JavaScript');

  // Obtém o caminho da URL atual
  var path = document.location.pathname;

  // Verifica se é a página de login e se o elemento btnLogin existe
  if (path.endsWith('login.html')) {
    // Adiciona o event listener apenas para o botão de login
    console.log('Página de login');
    var btnLogin = document.getElementById('btnLogin');
    console.log('btnLogin:', btnLogin);
    if (btnLogin) {
      btnLogin.addEventListener('click', login);
    }
  }
});

// Função para fazer o login
function login() {
  // Obtém os valores inseridos nos campos de login
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  //Console.log para verificar se os valores estão sendo obtidos    
  console.log('Valores de login:', username, password);

  // Faz a requisição para o arquivo JSON
  fetch('http://127.0.0.1:8080/data/usuarios.json')
    .then(function (response) {
      console.log('Response:', response);
      return response.json();
    })
    .then(function (data) {
      console.log('Data:', data);
      // Verifica se o usuário existe e se a senha está correta
      var usuarioEncontrado = false;
      var senhaCorreta = false;
      for (var i = 0; i < data.data.length; i++) {
        if (data.data[i].username === username) {
          usuarioEncontrado = true;
          if (data.data[i].password === password) {
            senhaCorreta = true;
            break;
          }
        }
      }

      // Exibe o popup correspondente
      if (usuarioEncontrado && senhaCorreta) {
        alert('Usuário logado!');
        // Redirecionar para a página de login
        window.location.href = "../html/cadastro-pet.html";
      } else if (usuarioEncontrado && !senhaCorreta) {
        alert('Senha incorreta!');
      } else {
        alert('Usuário não existe!');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
