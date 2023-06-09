//--------------------------------------------------------------------------------------------------------
//cadastro.js
// Objetivo: Arquivo responsável por realizar o cadastro de usuários e salvar os dados em um arquivo JSON
//--------------------------------------------------------------------------------------------------------
var usuarios = [];

document.addEventListener("DOMContentLoaded", function () {
  console.log('Inicializando o JavaScript');

  // Obtém o caminho da URL atual
  var path = document.location.pathname;

  // Verifica se é a página de cadastro
  if (path.endsWith('cadastro.html')) {
    // Adiciona o event listener apenas para o botão de cadastro
    console.log('Página de cadastro');
    var btnInsert = document.getElementById('btnInsert');
    console.log('btnInsert:', btnInsert);
    if (btnInsert) {
      btnInsert.addEventListener('click', cadastrarUsuario);
    }
  }

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


// Função para cadastrar o usuário
function cadastrarUsuario() {
   // Obter o elemento do formulário
   var form = document.getElementById('form-contato');
   // Verificar a validade do formulário usando o método checkValidity()
   if (!form.checkValidity()) {
     // O formulário é inválido, interrompa o processamento
     form.reportValidity();
     return;
   }
  // Obter os valores dos campos do formulário
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var number = document.getElementById('number').value;
  var cpf = document.getElementById('cpf').value;
  var password = document.getElementById('password').value;
  var petAction = document.getElementById('petAction').value;

  // Criar um objeto com os dados do usuário
  var usuario = {
    firstname: firstname,
    lastname: lastname,
    username: username,
    email: email,
    number: number,
    cpf: cpf,
    password: password,
    petAction: petAction
  };

  // Adicionar o usuário ao array de usuários
  usuarios.push(usuario);

  // Limpar os campos do formulário
  document.getElementById('firstname').value = '';
  document.getElementById('lastname').value = '';
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('number').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('password').value = '';
  document.getElementById('petAction').selectedIndex = 0;

  // Chamar a função para salvar os usuários no arquivo JSON
  salvarUsuarios();
  // Exibir mensagem de sucesso em um popup
  alert('Usuário cadastrado com sucesso!');

  // Redirecionar para a página de login
  window.location.href = "../html/login.html";
}

// Função para salvar os usuários no arquivo JSON localmente
function salvarUsuarios() {
  // Criar o objeto com os dados dos usuários
  var data = {
    "data": usuarios
  };

  // Converter o objeto para uma string JSON
  var jsonData = JSON.stringify(data);


  // Criar um objeto Blob com a string JSON
  var blob = new Blob([jsonData], { type: "application/json" });

  // Criar uma URL temporária para o objeto Blob
  var url = URL.createObjectURL(blob);

  // Criar um link para download do arquivo JSON
  var link = document.createElement("a");
  link.href = url;
  link.download = "usuarios.json";
  link.click();

  // Faz a requisição POST para salvar o arquivo JSON
  /*
  fetch('http://127.0.0.1:8080/data/usuarios.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonData
  })
  .then(function(response) {
      if (response.ok) {
          console.log('Arquivo JSON salvo com sucesso!');
      } else {
          console.log('Erro ao salvar o arquivo JSON:', response.status);
      }
  })
  .catch(function(error) {
      console.log('Erro ao salvar o arquivo JSON:', error);
  });
  */
}

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
