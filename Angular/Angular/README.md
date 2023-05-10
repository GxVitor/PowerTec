# Angular

<img src="https://i.pinimg.com/564x/10/11/c6/1011c6f3ffcdfa8c2f3f57a78d35fe1f.jpg" width="100px" height="100">

<br>

## Caracteristica Do Angular   <img src="https://i.pinimg.com/564x/6c/d0/52/6cd05284013487f72cf30db5bb1d83f8.jpg" width="50px" height="50px">

  - Angular é uma Framework baseada em Typescript
  - TypeScript como linguagem principal
  - SPAs são o seu foco
  - Componentes São base da Arquitetura
  - Estrutura Organizada e bem definida
  - Sistema de Tooling 

---

## Pré-Requesitos Pra mexer com Angular  <img src="https://i.pinimg.com/564x/37/ef/74/37ef7480a90a4524eae3abd72aa2aca1.jpg" width="50px" height="50px">
  - HTML & CSS conhecimentos basicos
  - NODE & NPM
  - JavaScript & Typescript
  - (VsCode) extenção Angular Language Service
---


## AngularJs != Angular

Existem o Angular e o AngularJs, os dois são Framework, o AngularJS é mais antigo e com foco no JavaScript, e o Angular no TypeScript.

---

## Installando Angular

~~~cmd
npm install -g @angular/cli
~~~

### Em Caso de Erro
<br>
De o comando ng help, se aparecer um list de comandos Tudo Certo, caso ou contrario Aparecer um texto em Amarelo sua maquina não estar permitindo Script do Angular, Para
 Verificar Se a Execução de Scripts esta ativa na sua maquina. No Window Você tera que ir no PowerShell como Administrador e executar o Comando:

 ~~~powershell
Get-ExecutionPolicy CurrentUser
 ~~~
 
 Se Estiver <strong> Restricted </strong> Não tem permição para Executar Scripts na Maquina, para resolver a gente vai Desistalar o Angular com o Comando:
 ~~~cmd
npm uninstall -g @angular/cli
 ~~~

 Agora vamos limpar o cache do npm para não ficar nada que possar dar confrito, para limpar o cache com o Comando:
 ~~~cmd
npm cache clean --force
 ~~~
 Para verificar se o cache foi limpo utilizar desse Comando:
 ~~~cmd
npm cache verify
 ~~~

Agora para ativar a utilização dos Scripts na maquina com o Comando:

~~~powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
~~~
E logo Em Seguida Você Digita A e dar Enter. E ponto pode Install o Angular com as Permições.


