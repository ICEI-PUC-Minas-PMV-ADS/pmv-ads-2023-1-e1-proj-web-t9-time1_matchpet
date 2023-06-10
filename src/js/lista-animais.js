    // Função para processar a busca
    function processarBusca(event) {
        event.preventDefault(); // Evita o envio do formulário
        var $ = jQuery.noConflict();

        // Obtém os valores selecionados nos campos
        const especie = $('#especie').val();
        const sexo = $('#sexo').val();
        const tamanho = $('#tamanho').val();
        const estado = $('#estado').val();
        const cidade = $('#cidade').val();

        // Monta os parâmetros de busca
        const parametros = {
            especie: especie,
            sexo: sexo,
            tamanho: tamanho,
            estado: estado,
            cidade: cidade
        };

        // Faz a solicitação AJAX
        $.ajax({
            url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/MG/municipios/3106200',
            type: 'GET',
            data: parametros,
            success: function (resultados) {
                // Lógica para manipular os resultados da busca
                // Aqui você pode atualizar o conteúdo da página com os resultados
                console.log(resultados); // Exemplo de uso: exibe os resultados no console
            },
            error: function (error) {
                // Lógica para lidar com erros da solicitação AJAX
                console.log('Ocorreu um erro na busca:', error);
            }
        });
    }

    // Adiciona um ouvinte de evento ao formulário de busca    
    formBusca.addEventListener('submit', processarBusca);

