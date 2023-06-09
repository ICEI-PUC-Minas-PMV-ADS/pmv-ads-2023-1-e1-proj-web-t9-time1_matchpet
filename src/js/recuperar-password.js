document.getElementById('recoveryForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    var emailInput = document.getElementById('email');
    var messageDiv = document.getElementById('message');

    // Necessário colocar a lógica para enviar o e-mail
    // Nesse código,apenas exibi uma mensagem de sucesso

    messageDiv.textContent = 'Um e-mail de recuperação foi enviado para ' + emailInput.value;
    emailInput.value = '';
});
