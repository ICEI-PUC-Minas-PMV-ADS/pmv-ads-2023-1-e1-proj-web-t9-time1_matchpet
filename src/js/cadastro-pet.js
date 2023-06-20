document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores dos campos do formulário
    var nomePet = document.getElementById("firstname").value;
    var sexoPet = document.getElementById("sexoPet").value;
    var cidadePet = document.getElementById("nomeCidade").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("number").value;

    // Realizando a validação dos campos
    if (nomePet === "" || sexoPet === "" || cidadePet === "" || email === "" || telefone === "") {
        // Exibindo mensagem de erro
        alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
        // Simulando uma resposta de API falsa
        var fakeApiResponse = {
            status: "sucesso",
            mensagem: "Cadastro do pet realizado com sucesso!"
        };

        // Verificando o status da resposta simulada
        if (fakeApiResponse.status === "sucesso") {
            // Exibindo mensagem de sucesso no elemento <div>
            document.getElementById("mensagem").textContent = fakeApiResponse.mensagem;
            alert('Cadastro do pet realizado com sucesso!');

            // Limpa os campos do formulário
            document.getElementById("firstname").value = "";
            document.getElementById("sexoPet").value = "";
            document.getElementById("nomeCidade").value = "";
            document.getElementById("email").value = "";
            document.getElementById("number").value = "";

            // Redirecionando para a página desejada após o cadastro
            window.location.href = "pagina-de-sucesso.html";
        } else {
            // Exibindo mensagem de erro no elemento <div>
            document.getElementById("mensagem").textContent = "Erro ao cadastrar o pet: " + fakeApiResponse.mensagem;
        }
    }
});
