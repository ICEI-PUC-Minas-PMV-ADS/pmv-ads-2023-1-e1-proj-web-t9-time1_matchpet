# Registro de Testes de Software

A seguir, são apresentados os resultados dos testes de software.   


### CT-01 Visualizar pets disponíveis para adoção.
### Gabriel Victor: Responsável pelo ct-o1.

Caso de teste: Visualizar pets disponíveis para adoção. 
- Entrada: Entrar na página principal 
- Saída esperada: Visualizar animais disponiveis   

![Caso Teste 01](/src/imagens/caso-teste-vizualizar-pet/ct01-vizua-pet.png)
<center> Figura 1 - CT-01</center>  


### CT-02 Visualizar perfil do pet.
### Gabriel Victor: Responsável pelo ct-o2.

Caso de teste: Visualizar perfil do pet. 
- Entrada: Entrar na "Home", em seguida na página “animais para adoção” e Clicar no animal desejado
- Saída esperada: Visualizar perfil do animal.   

![Caso Teste 02](/src/imagens/caso-teste-vizualizar-pet/ct02-ver-perfil-pet.png)
<center> Figura 2 - CT-02</center> 






### CT-03 Fazer login
### Renata Gonzaga: Responsável pelo ct-o3
Caso de teste: Login bem-sucedido. 
- Entrada: username = "jperes", password = "159357" 
- Saída esperada: Alerta exibindo "Usuário logado!"   

![Caso Teste 03](/src/imagens/caso-teste-login/ct03-login-logado.png)
<center> Figura 3 - CT-03 </center>  


### CT-04 Senha incorreta
### Renata Gonzaga: Responsável pelo ct-o4
Caso de teste: Senha incorreta.  
- Entrada: username = "jperes, password = "wron123” 
- Saída esperada: Alerta exibindo "Senha incorreta!"   

![Caso Teste 04](/src/imagens/caso-teste-login/ct04-senhaincorreta.png)
<center> Figura 4 - CT-04 </center>    



### CT-05 Usuário inexistente.
### Renata Gonzaga: Responsável pelo ct-o5
Caso de teste: Usuário inexistente.  
- Entrada: username = "jane", password = "password456" 
- Saída esperada: Alerta exibindo "Usuário não existe!"    

![Caso Teste 05](/src/imagens/caso-teste-login/ct05-user-nao-existe.png)
<center> Figura 5 - CT-05 </center>    



### CT-06 Dados vazios. 
### Renata Gonzaga: Responsável pelo ct-o6
Caso de teste: Dados vazios.  
- Entrada: username = "", password = ""  
- Saída esperada: Alerta exibindo "Usuário não existe!"     

![Caso Teste 06](/src/imagens/caso-teste-login/ct06-dados-vazios.png)
<center> Figura 6 - CT-06 </center>  


### CT-07 Usuário encontrado, senha vazia.
### Renata Gonzaga: Responsável pelo ct-o7
Caso de teste: Usuário encontrado, senha vazia  
- Entrada: username = " jperes", password = ""   
- Saída esperada: Alerta exibindo "Senha incorreta!"      

![Caso Teste 07](/src/imagens/caso-teste-login/ct07-senha-vazia.png)
<center> Figura 7 - CT-07 </center>  


### CT-08 Recuperar password.
### Renata Gonzaga: Responsável pelo ct-o8
Caso de teste: Recuperar password.  
- Entrada: Digite o seu e-mail abaixo para receber as instruções de como recuperar sua senha: = " jperes@nomail.com "   
- Saída esperada: Alerta exibindo "Um e-mail de recuperação foi enviado para jperes@nomail.com ".      

![Caso Teste 08](/src/imagens/casos-testes-recuperar-senha/ct08-recuperar-password.png)
<center> Figura 8 - CT-08 </center>      



### CT-09 Recuperar password: Campos vazios.
### Renata Gonzaga: Responsável pelo ct-o9
Caso de teste: Recuperar password: Campos vazios.  
- Entrada: Digite o seu e-mail abaixo para receber as instruções de como recuperar sua senha: = ""    
- Saída esperada: Alerta exibindo " Preencher este campo ".      

![Caso Teste 07](/src/imagens/casos-testes-recuperar-senha/ct09-dados-vazios.png)
<center> Figura 9 - CT-09 </center>   



### CT-10 Recuperar password: Formato incorreto.
### Renata Gonzaga: Responsável pelo ct-10
Caso de teste: Recuperar password: Formato incorreto   
- Entrada: Digite o seu e-mail abaixo para receber as instruções de como recuperar sua senha: = "jperesnomail.com"   
- Saída esperada: Alerta exibindo "Inclua um @ no endereço de e-mail.” jperesnomail.com” está com um @ faltando".        

![Caso Teste 10](/src/imagens/casos-testes-recuperar-senha/ct10-formato-incorreto.png)
<center> Figura 10 - CT-10 </center>    




### CT-11 Redirecionamento para a página de sucesso após o cadastro
### Renata Gonzaga: Responsável pelo ct-11
Caso de teste: Redirecionamento para a página de sucesso após o cadastro   
- Entrada: Submeter o formulário de cadastro com todos os campos preenchidos corretamente   
- Saída esperada: O usuário é redirecionado para a página de sucesso após o cadastro do pet.
  
![Caso Teste 11](/src/imagens/caso-teste-cadastro-pet/teste-cadPet.png)
<center> Figura 11 - CT-11 </center>     

  


<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
