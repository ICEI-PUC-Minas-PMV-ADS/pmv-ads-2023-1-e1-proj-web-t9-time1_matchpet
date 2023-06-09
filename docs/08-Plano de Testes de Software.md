# Plano de Testes de Software
Foi feita a instalação do Node.js e do servidor web http-server, disponível para instalação via pacote npm, a fim de realizar testes locais. 

Abaixo estão descritas as etapas dos testes funcionais: 
|Casos de Teste |CT-01 – Visualizar pets disponíveis para adoção  |
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-05 - Ao selecionar um animal da lista, o site deve exibir uma página de perfil do animal.  |
|Objetivo do Teste       | Visualizar a página de perfil do pet. |
|Passos                  | 1)  Acessar o Navegador |
|                        | 2)  Informar o endereço do Site |
|                        | 3)  Visualizar a página principal |
|                        | 4)  Clicar em “Animais para adoção” ||
| Critérios de êxito     | O sistema permite que o usuário visualizar os animais disponíveis. |

|Casos de Teste |CT-02 – Visualizar perfil do pet.  |
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-06 - A página de perfil do animal deve conter todos os dados cadastrados do pet e os dados para contato do responsável |
|Objetivo do Teste       | Ver o perfil do pet. |
|Passos                  | 1)  Acessar o Navegador |
|                        | 2)  Informar o endereço do Site |
|                        | 3)  Visualizar a página principal |
|                        | 4)  Clicar em “Animais para adoção” |
|                        | 5)  Clicar na imagem do animal pretendido |
| Critérios de êxito     | O sistema permite que o usuário vizualize o perfil do pet, bem como seus dados. |


|Casos de Teste |CT-03 – Realizar Login  |
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-07 - O site deve exibir uma página para login ao clicar no botão “Entrar”. |
|Objetivo do Teste       | Efetuar login no site. |
|Passos                  | 1)  Acessar o Navegador |
|                        | 2)  Informar o endereço do Site |
|                        | 3)  Visualizar a página principal |
|                        | 4)  Clicar em “Entrar” |
|                        | 5)  Na página de login informar: username: “jperes” e password: “159357” |
|                        | 6) Clicar no botão "Entrar”.  |
| Critérios de êxito     | O sistema permite que o usuário efetue o login com os dados informados e apresenta a mensagem “Usuário logado!”. |


|Casos de Teste |CT-04 – Senha incorreta   |
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-07 - O site deve exibir uma página para login ao clicar no botão “Entrar”. |
|Objetivo do Teste       | Apresentar mensagem de senha incorreta. |
|Passos                  | 1)  Acessar o Navegador |
|                        | 2)  Informar o endereço do Site |
|                        | 3)  Visualizar a página principal |
|                        | 4)  Clicar em “Entrar” |
|                        | 5)  Na página de login informar: username: “jperes” e  password: “wron123”|
|                        | 6) Clicar no botão "Entrar”.  |
| Critérios de êxito     | O sistema deve apresentar na tela a mensagem “Senha incorreta!” para ao usuário. |


|Casos de Teste |CT-05– Senha inexistente   |
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-07 - O site deve exibir uma página para login ao clicar no botão “Entrar”. |
|Objetivo do Teste       | Apresentar mensagem de usuário não existe. |
|Passos                  | 1)  Acessar o Navegador |
|                        | 2)  Informar o endereço do Site |
|                        | 3)  Visualizar a página principal |
|                        | 4)  Clicar em “Entrar” |
|                        | 5)  Na página de login informar: username: “jperes” e password: “wron123” |
|                        | 6) Clicar no botão "Entrar”.  |
| Critérios de êxito     | O sistema deve apresentar na tela a mensagem “Usuário não existe!”. |


|Casos de Teste |CT-06– Dados vazios    |
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-07 - O site deve exibir uma página para login ao clicar no botão “Entrar”. |
|Objetivo do Teste       | Verificar se um alerta é exibido.  |
|Passos                  | 1)  Acessar o Navegador |
|                        | 2)  Informar o endereço do Site |
|                        | 3)  Visualizar a página principal |
|                        | 4)  Clicar em “Entrar” |
|                        | 5)  Na página de login informar: username: “”  e  password: “” |
|                        | 6) Clicar no botão "Entrar”.  |
| Critérios de êxito     | O sistema deve apresentar na tela a mensagem “Usuário não existe!”.  |


|Casos de Teste |CT-07– Usuário encontrado, senha vazia     |
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-07 - O site deve exibir uma página para login ao clicar no botão “Entrar”. |
|Objetivo do Teste       | Apresentar um alerta de senha incorreta.   |
|Passos                  | 1)  Acessar o Navegador |
|                        | 2)  Informar o endereço do Site |
|                        | 3)  Visualizar a página principal |
|                        | 4)  Clicar em “Entrar” |
|                        | 5)  Na página de login informar: username: “jperes” e password: “” |
|                        | 6) Clicar no botão "Entrar”.  |
| Critérios de êxito     | O sistema deve apresentar na tela a mensagem “Senha incorreta!” para ao usuário. |


|Casos de Teste | CT-08– Recuperar password    |
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-11 - O site deve permitir a recuperação de senhas por meio do e-mail cadastrado. |
|Objetivo do Teste       | Apresentar mensagem de recuperação de senha.   |
|Passos                  | 1)  Acessar o Navegador |
|                        | 2)  Informar o endereço do Site |
|                        | 3)  Visualizar a página principal |
|                        | 4)  Clicar em “Entrar” |
|                        | 5)  Na página de login iclicar em: "Esqueceu a senha?" |
|                        | 6)  Digitar seu e-mail: "email": "jperes@nomail.com"  |
|                        | 7)  Clicar no botão "Enviar”.|
| Critérios de êxito     | O sistema deve apresentar na tela a mensagem “Um e-mail de recuperação foi enviado para jperes@nomail.com” para ao usuário. |


|Casos de Teste | CT-09 – Recuperar password: Campos vazios    |
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-11 - O site deve permitir a recuperação de senhas por meio do e-mail cadastrado. |
|Objetivo do Teste       | Apresentar uma mensagem de preenchimento de campos.    |
|Passos                  | 1)  Acessar o Navegador |
|                        | 2)  Informar o endereço do Site |
|                        | 3)  Visualizar a página principal |
|                        | 4)  Clicar em “Entrar” |
|                        | 5)  Na página de login iclicar em: Esqueceu a senha?  |
|                        | 6)  Não digitar seu e-mail: "email": ""  |
|                        | 7)  Clicar no botão "Enviar”.|
| Critérios de êxito     | O sistema deve apresentar na tela a mensagem “Preencher este campo” para ao usuário. |


|Casos de Teste | CT-10 – Recuperar password: Formato incorreto    |
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-11 - O site deve permitir a recuperação de senhas por meio do e-mail cadastrado. |
|Objetivo do Teste       | Apresentar mensagem para digitar o e-mail conforme o esperado.     |
|Passos                  | 1)  Acessar o Navegador |
|                        | 2)  Informar o endereço do Site |
|                        | 3)  Visualizar a página principal |
|                        | 4)  Clicar em “Entrar” |
|                        | 5)  Na página de login clicar em: Esqueceu a senha?  |
|                        | 6)  Digitar seu e-mail: "email": "jperesnomail.com"  |
|                        | 7)  Clicar no botão "Enviar”.|
| Critérios de êxito     | O sistema deve apresentar na tela a mensagem “Inclua um @ no endereço de e-mail.” jperesnomail.com” está com um @ faltando” para ao usuário. |




|Casos de Teste | CT-11 – Cadastrar pet: Redirecionamento    |
|:--------------:        |---------------------------------------|
|Requisitos associados   | RF-10 - No menu de cadastro de animais deve permitir o cadastro das seguintes informações espécie, nome, sexo, data nascimento, características do animal, história, cuidados específicos, estado e cidade. |
|Objetivo do Teste       | Testar o redirecionamento para a página de sucesso após o cadastro. |
|Passos                  | 1)  Acessar o Navegador |
|                        | 2)  Informar o endereço do Site |
|                        | 3)  Visualizar a página principal |
|                        | 4)  Clicar em “Entrar” |
|                        | 5)  Digitar seu e-mail: "email": "jperesnomail.com" e password: “159357”|
|                        | 6)  Clicar no botão "Entrar" |
|                        | 7)  Visualizar a página “cadastrar-pet” |
|                        | 8)  Preencher campos obrigatórios do formulário |
|                        | 9)  Clicar no botão "Cadastrar Pet"  |
|                        | 10) Verificar se não há mensagens de erro exibidas. |
|                        | 11) Verificar se o usuário é redirecionado automaticamente para a página de sucesso. |
| Critérios de êxito     | O usuário é redirecionado para a página de sucesso após o cadastro do pet.  |



<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
