var pets = [];

document.addEventListener("DOMContentLoaded", function () {
    console.log('Inicializando o JavaScript');
  
    // Obtém o caminho da URL atual
    var path = document.location.pathname;
  
    // Verifica se é a página de cadastro
    if (path.endsWith('cadastro-pet.html')) {
      // Adiciona o event listener apenas para o botão de cadastro
      console.log('Página de cadastro de pet');
      var btnInsert = document.getElementById('btnInsert');
      console.log('btnInsert:', btnInsert);
      if (btnInsert) {
        btnInsert.addEventListener('click', cadastrarPet);
      }
    }
  });

// Função para cadastrar o usuário
function cadastrarPet() {
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
   var dataNascimento = document.getElementById('dataNascimento').value;
   var sexoPet = document.getElementById('sexoPet').value;
   var email = document.getElementById('email').value;
   var number = document.getElementById('number').value;
   var descricao = document.getElementById('descricao').value;    
   
 
   // Limpar os campos do formulário
   document.getElementById('firstname').value = '';
   document.getElementById('dataNascimento').value = '';
   document.getElementById('sexoPet').value = '';
   document.getElementById('email').value = '';
   document.getElementById('number').value = '';
   document.getElementById('descricao').value = '';  
 
   // Exibir mensagem de sucesso em um popup
   alert('Cadastro do pet realizado com sucesso!');
 
   // Redirecionar para a página de login
   window.location.href = "../html/pagina-de-sucesso.html";
 }
 