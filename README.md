# 

![Logo3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t9-time1_matchpet/blob/main/src/imagens/logo-matchpet.png)

<br>

`TECNÓLOGO EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS`

`Projeto - Desenvolvimento de Aplicação Web Front-End`

`SEMESTRE 1/2023`

Página web para adoção de animais.

# Integrantes

* Bruno Nery da Silva
* Gabriel Victor Miranda de Oliveira
* Marcela Ratton Santos Silva
* Renata Gonzaga Barbosa

# Orientador

* Marco Rodrigo Costa

# Instruções de utilização


Este é um formulário de cadastro HTML que permite aos usuários preencherem informações pessoais e se cadastrarem. Os dados inseridos são salvos em um arquivo JSON.

## Configuração
Antes de usar o formulário de cadastro, você precisa configurar um ambiente de servidor HTTP para executar o arquivo HTML e o arquivo JavaScript corretamente. Você pode usar um servidor local como o ´http-server`para isso. Siga as instruções abaixo para configurar o ambiente:
Certifique-se de ter o Node.js instalado em seu sistema. Você pode fazer o download e instalar o Node.js a partir do site oficial: https://nodejs.org
Abra o terminal ou prompt de comando e instale o pacote ´http-server´ globalmente usando o seguinte comando:

```console
npm install -g http-server
```
## Executando o servidor
Depois de instalar o´http-server`, Navegue até a pasta /src do projeto usando o terminal do VScode ou o prompt de comando.  
```console
cd src
```
Inicie o servidor HTTP executando o seguinte comando no terminal do VSCode ou prompt de comando:

```console
npx http-server
```
Isso iniciará o servidor HTTP na porta padrão`8080`. 
O `http-server` iniciará um servidor local e fornecerá um endereço IP e uma porta (por exemplo, http://127.0.0.1:8080 ). Você pode acessar o projeto abrindo esse endereço no seu navegador.

Observação: Certifique-se de que o comando seja executado no diretório correto onde o arquivo `index.html` está localizado.

Se você deseja usar uma porta diferente, pode especificá-la adicionando uma opção `-p` seguida do número da porta. Por exemplo, para usar a porta`3000`, execute o seguinte comando:
```console
npx http-server -p 3000
```
## Acessando o formulário de cadastro
Com o servidor HTTP em execução, você pode acessar o formulário de cadastro abrindo um navegador web para o seguinte endereço:

http://localhost:8080/html/cadastro.html


Se você estiver usando uma porta diferente, substitua `8080` pelo número da porta que você especificou ao iniciar o servidor.

Preenchendo o formulário de cadastro
No formulário de cadastro, preencha todos os campos obrigatórios indicados com um asterisco (*). Os campos obrigatórios incluem:

Após preencher os campos, clique no botão "Cadastrar". Se todos os campos obrigatórios forem preenchidos corretamente, você receberá uma mensagem de sucesso em uma janela pop-up e será redirecionado para a página de login.

## Executando o Chrome com CORS desabilitado [GitHub link](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t9-time1_matchpet/src/)
O CORS (Cross-Origin Resource Sharing) é uma política de segurança implementada pelos navegadores que impede solicitações de recursos (como arquivos JavaScript, imagens, fontes, etc.) de diferentes origens, a menos que essas origens tenham explicitamente permitido o acesso. Isso é feito para proteger os usuários contra ataques de cross-site scripting (XSS) e outros problemas de segurança relacionados.

Quando você desabilita o CORS, está permitindo que o Chrome faça solicitações de recursos de qualquer origem, mesmo que essas origens não tenham permitido explicitamente o acesso. Isso pode ser útil em certos casos, como desenvolvimento de aplicativos da web, depuração ou testes, quando você precisa contornar temporariamente as restrições de segurança impostas pelo CORS.

Como o nosso projeto salva e lê um arquivo JSON para simular a escrita dos dados numa base de dados fake, é necessário desabilitar o CORS para executar corretamente o javascript que realiza essas operações. 

### Passos
Abra o terminal ou prompt de comando do seu sistema operacional.
Navegue até o diretório onde o executável do Google Chrome está localizado. Por exemplo, se você estiver usando o Windows, o caminho padrão pode ser "C:\Program Files\Google\Chrome\Application".
Execute o seguinte comando, substituindo <caminho-do-diretório-de-dados> pelo caminho completo para o diretório onde você deseja armazenar os dados do usuário temporários:
```console
chrome.exe --user-data-dir="<caminho-do-diretório-de-dados>" --disable-web-security --disable-site-isolation-trials
```
Exemplo: chrome.exe --user-data-dir="C://chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials

Pressione Enter para executar o comando.
O Google Chrome será iniciado com as configurações de segurança do CORS desabilitadas



# Documentação

<ol>
<li><a href="docs/01-Documentação de Contexto.md"> Documentação de Contexto</a></li>
<li><a href="docs/02-Especificação do Projeto.md"> Especificação do Projeto</a></li>
<li><a href="docs/03-Metodologia.md"> Metodologia</a></li>
<li><a href="docs/04-Projeto de Interface.md"> Projeto de Interface</a></li>
<li><a href="docs/05-Arquitetura da Solução.md"> Arquitetura da Solução</a></li>
<li><a href="docs/06-Template padrão do Site.md"> Template padrão do Site</a></li>
<li><a href="docs/07-Programação de Funcionalidades.md"> Programação de Funcionalidades</a></li>
<li><a href="docs/08-Plano de Testes de Software.md"> Plano de Testes de Software</a></li>
<li><a href="docs/09-Registro de Testes de Software.md"> Registro de Testes de Software</a></li>
<li><a href="docs/10-Apresentação do Projeto.md"> Apresentação do Projeto</a></li>
<li><a href="docs/11-Referências.md"> Referências</a></li>
</ol>

# Hospedagem

* https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e1-proj-web-t9-time1_matchpet/src/ 

# Armazenamento do Código-Fonte

* <a href="src/README.md">Código Fonte</a>

# Armazenamento da Apresentação

* <a href="presentation/README.md">Apresentação da solução</a>
