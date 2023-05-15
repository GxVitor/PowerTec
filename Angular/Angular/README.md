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

---

## Criando um Porjeto em Angular

Vai no diretorio que deseja criar o projeto e no terminal executer o comando

~~~cmd
ng new (nome-do-projeto)
~~~

Ele irar criar um pasta com o nome que foi dado para o projeto e dentra da pasta tera tudo que o angular precisar para começar a funcionar 

---

## Iniciando Serve Angular

Para pode ver as alterações em tempo de execução vamos ter que iniciar um Angular Serve, isso é facil o proprio ng faz isso para nós basta ir na pasta raiz do projeto e Executar o comando no terminal
~~~cmd
ng serve
~~~

Com esse commando você vai pode visualizar o seu projeto em Run Time ou em tempo de execução então toda alteração feita no code ele altera na visualização pelo browser, apos executar o comando ser for a primeira vez ele pode demorar um pouco, e vai perguntar algumas coisa no seu terminal.

---

## Ng generate

o ng generate pode gerar ou modificar algumas pasta do projeto mais vamos usar para gerar um comenent no angular é muito mais rapido e facil criar um component pelo <strong>ng</strong> para criar um component com o ng basta executar o comando
~~~cmd
ng generate component (Nome_Do_Component)
~~~
apos executar esse comando ele vai criar um pasta com o nome do component com o html,css,ts,spec, e vai adicionar o seu component no module de forma automatica facilitanto assim a criação de component.

A generate pode criar outros tipos de schematic tbm como
  - app-shell
  - application
  - class
  - config
  - directive
  - enum
  - environments
  - guard
  
Entre outras para poder ver tudo oque o generate pode criar ou modificar voce pode dar o comando
~~~cmd
ng generate --help
~~~
para obter mais informações sobre o generate.

---

## Life Cycle Hooks ou Hooks
- ngOnInit()
  - assim que o Component for chamado ele ativo o OnInit e executar o codigo dentro dele

  <br>
- ngOnChanges()
  - esse evento é chamando assim que alguma propriedade de entrada do component é alterada 

  <br>
- ngDoCheck()
  - Dentro do DoCheck Existem alguns SubEvento como:
    - ngAfterContentInit()
    - ngAfterContentChecked()
    - ngAfterViewInit()
    - ngAfterViewChecked()

  <br>
- ngOnDestroy()
  - é chamado quando o component é destruido.

---

## Diretivas
Diretiva são uma maneira como o Angular Manipula e altera a DOM dinâmicamente

## Diretivas de Atributo
Alteram a aparência do comportamento ded um elemento, componente ou outra Diretiva
 - NgClass - Adiciona ou remove conjunto de classes CSS
 - NgStyle - Adiciona ou remove um conjuto de estilos ao HTML
 - NgModel - Adiciona vinculação de dados bidirecional a um elemento de um formulário
 - NgModel - Faz a comunicação do HTML com o TypeScript
 - NgTemplate - Permite Criar um conjunto de elemento e só vai aparecer na tela se a condição dele for TRUE
 - NgContent - consegue puxar elemento de um content pai

## Diretivas Estruturais
Moldam ou remodelam a estrutura da DOM, adicionando ou removendo elementos na tela
 - NgIf - Condicional que verifica se modelo deve ser visualizado ou não
 - NgFor - repete um elemento para cada item em uma lista
 - NgSwitch - Utilizado para alterar entre comportamentos alternativos

## NgModule

Gerando um Module
~~~cmd
ng generate module [nomeDoMudulo]
  ou
ng g m [nomeDoMudulo]
~~~

Para importa um module para outro só dar exports:[component] dentro do ngModule
