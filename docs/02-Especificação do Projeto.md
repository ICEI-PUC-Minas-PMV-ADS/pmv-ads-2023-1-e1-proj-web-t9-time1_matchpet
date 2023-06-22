# Especificações do Projeto

A identificação do problema e dos aspectos mais relevantes a serem abordados neste projeto foi realizada por meio de pesquisas e observação dos usuários. Para detalhar esses aspectos, foram utilizados personas e histórias de usuários. 

## Personas

As personas criadas durante o processo de compreensão do problema estão apresentadas nas figuras abaixo. 

|Cristina Fernanda      | Informações:                       |                                        |
|--------------------|----------------------------------|--------------------------------------|
| ![persona1](/src/imagens/persona1.jpg) | **Idade:** 65 <br> **Ocupação:** Servidora pública aposentada. |**Aplicativos:**<br>● Facebook  <br>● Instagram<br>● WhatsApp   |
|**Motivações:**<br>● Sempre desejou de ter um cachorro;<br>● Ter um cachorro para acompanhá-la em seu cotidiano. |**Frustrações:**<br>● Se sente sozinha; <br>● Filhos moram em outro Estado. |**Hobbies, História:**<br>● Viúva; <br>● Mora sozinha; <br>● Viaja a lazer com frequência. |

|Maria Lucia         | Informações:                       |                                        |
|--------------------|----------------------------------|--------------------------------------|
| ![persona2](/src/imagens/persona2.jpg) | **Idade:** 40 <br> **Ocupação:** Administradora, trabalha em uma ONG, sendo responsável por cuidar de animais que estão sob tutela da organização. |**Aplicativos:**<br>● Facebook  <br>● Instagram<br>● OLX   |
|**Motivações:**<br>● Ajudar animais em situação de abandono e/ou maus tratos a encontrarem tutores amorosos e responsáveis. |**Frustrações:**<br>● Dificuldade em encontrar tutores para os animais da ONG; <br>● Superlotação de animais na ONG. |**Hobbies, História:**<br>● Trabalhar em projetos filantrópicos; <br>● Passear no parque; <br>● Trekking.|

|Juliana Freitas       | Informações:                       |                                        |
|--------------------|----------------------------------|--------------------------------------|
| ![persona3](/src/imagens/persona3.jpeg) | **Idade:** 26 <br> **Ocupação:** Servidora pública aposentada. |**Aplicativos:**<br>● Facebook  <br>● Instagram<br>● Twitter    |
|**Motivações:**<br>● Realizar o sonho de ter um gato;<br>● Ter a companhia de um pet para auxiliar no tratamento do Transtorno de Ansiedade Generalizada (TAG).  |**Frustrações:**<br>● Se sente sozinha; <br>● Sua família nunca permitiu que tivesse um gato. |**Hobbies, História:**<br>● Está em tratamento do TAG; <br>● Mora sozinha; <br>● Gosta de cozinhar e Ler. |

|David Luiz        | Informações:                       |                                        |
|--------------------|----------------------------------|--------------------------------------|
| ![persona4](/src/imagens/persona4.png) | **Idade:** 32 <br> **Ocupação:**  Desenvolvedor de software. |**Aplicativos:**<br>● Facebook  <br>● Instagram<br>|
|**Motivações:**<br>● Encontrar uma família para todos os filhotes de sua cadela. |**Frustrações:**<br>● A cadela teve cinco filhotes;<br>● Não tem condições de ficar com seis animais em sua casa.|**Hobbies, História:**<br>● Adotou uma cadela prenha e ferida que estava na rua de sua casa; <br>● Mora sozinha; <br>● Casou-se recentemente. |


## Histórias de Usuários

A partir das personas, podemos registrar as seguintes histórias de usuário.  

|EU COMO... `PERSONA`| QUERO/DESEJO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Cristina Fernanda   | Pesquisar animais disponíveis para adoção | Para obter informações sobre os animais antes de adotar ou visitar|
|Cristina Fernanda   | Localizar animais por região | Para encontrar animais perto da minha localização |
|Juliana Freitas     | Entrar em contato com os responsáveis pelos animais disponíveis | Para tirar dúvidas e agendar visitas |
|Maria Lucia         | Cadastrar meu abrigo no sistema, incluindo informações como espécie, raça, sexo, porte, telefone e endereço do abrigo| Para que os interessados em adotar tenham o máximo de informações possíveis sobre o animal |
|Maria Lucia         | Receber notificações de um possível adotante | Para entrar em contato com o adotante  |
|Maria Lucia         | Fazer perguntas pessoais ao adotante, abordando assuntos como, moradia, profissão e motivo da adoção | Para verificar a compatibilidade do adotante com os animais disponíveis |
|Juliana Freitas     | Visualizar informações detalhadas sobre os animais disponíveis como histórico de saúde, fotos dos animais e comportamento | Para verificar se há condições de cuidar do animal de maneira adequada |
|David Luiz          | Cadastrar animais sob minha tutela | Para encontrar potenciais adotantes  |
|David Luiz          | Ser informado quando algum possível adotante demonstrar interesse pelo animal | Para entrar em contato com o interessado em adotar  |


## Requisitos do Projeto

Os requisitos que descrevem as opções de interação dos usuários e as características gerais do sistema são apresentados a seguir. Estes definem o escopo funcional do projeto, abrangendo tanto os requisitos funcionais quanto os não funcionais. 

### Requisitos Funcionais

Na Tabela abaixo estão expostos os requisitos funcionais que o site deve atender. 

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar uma página inicial exibindo botão de cadastro de usuários, login do usuário, menu, filtros de animais e uma lista de animais disponíveis para adoção. | ALTA | 
|RF-002| O site deve exibir uma página do menu “Quem somos”. | BAIXA |
|RF-003| O site deve permitir realizar filtros de espécie, sexo, porte, estado e cidade. | MÉDIA | 
|RF-004| A lista de animais disponíveis deve conter imagem do animal, nome, cidade e estado. | MÉDIA |
|RF-005| Ao selecionar um animal da lista, o site deve exibir uma página de perfil do animal. | ALTA | 
|RF-006| A página de perfil do animal deve conter todos os dados cadastrados do pet e os dados para contato do responsável. | ALTA |
|RF-007| O site deve exibir uma página para login ao clicar no botão “Entrar”. | ALTA | 
|RF-008| O site deve exibir uma página para cadastro do usuário ao clicar no botão “Cadastre-se”. | ALTA |
|RF-009| No perfil do usuário deve exibir um menu de cadastro de animais. | ALTA | 
|RF-010| No menu de cadastro de animais deve permitir o cadastro das seguintes informações espécie, nome, sexo, data de nascimento, história, cuidados específicos e cidade. | ALTA |
|RF-011| O site deve permitir a recuperação de senhas por meio do e-mail cadastrado. | ALTA | 

### Requisitos não Funcionais

Os requisitos não funcionais foram descritos na tabela abaixo. 

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível expostas às publicamente na Internet (Repl.it, GitHub Pages, Heroku). | ALTA | 
|RNF-002| O site deve ser fácil de usar, com interface intuitiva.  |  MÉDIA |
|RNF-003| O site deve ser acessível a partir de dispositivos móveis (tablets, celulares).  | ALTA | 
|RNF-004| O site estar disponível 24 horas por dia, 7 dias por semana. |  ALTA |


## Restrições

Na tabela abaixo são expostas às restrições que restringem a realização do plano e que devem ser cumpridas para o êxito do projeto.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deve ser concluído no prazo estipulado, sem qualquer atraso. |
|RE-02| O sistema deve ser desenvolvido utilizando tecnologias básicas da Web no Front-end. |
|RE-03| O sistema deve ser desenvolvido em português para atingir o público-alvo brasileiro. |
|RE-04| A equipe responsável pelo desenvolvimento do sistema deve ser o Time 01 da disciplina de Projeto: Desenvolvimento da aplicação Web Front-End. |
|RE-05| O sistema não deve ser utilizado para promover a venda ou comércio de animais, apenas a adoção responsável. |
|RE-06| O sistema deve estar consoante às regras da disciplina. |

