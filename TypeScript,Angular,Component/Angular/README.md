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

## Routes com Angular

O Arquivo para configurar o router é App-routing.module.ts

nele vai ter um importe Routes que vai ser um tipo definito na varivel logo abaixo, e vai receber um Array

e logo depois vai imports o tipo do router
e exports o router para pode ser usado em outra partes do projeto.

<br>

## Configurando Objetos de Rotas

No Array do Tipo Routes no Arquivo App-routing.module.ts vamos passar um Array de objetos passando o Path:'como vai ficar na url' o Component: Nelecionar o componenet, e vc pode passar outro parametro que é o pathMatch:'full' or 'prefix' como padrão ele vem com o prefix, a diferença entre o full e prefix é que o full tem que ter exatamento isso o path para ele achar o caminho já o prefix não, ent no seu coigo ficara assim

~~~ng
const routes: Routes = [
  {path:'', component: Componenet, pathMatch:'full'},
  {path:'123', component: Component, pathMatch:'prefix'}
];
~~~
Se o path não tiver nada ele vai jogar para um Component que vc definer, agr já se Endereço/123 ele irar ir para outro component.

### Rota Coringa

Na Rota coringa tudo que o usúario digitar e não ser um rota que vc definiu vai jogar sempre para um caminho especifico para fazer isso só criar mais um objeto dentro no routes desse jeito

~~~ng
{path:"**" redirectTo:""}
~~~

o Path:"**" vai pegar tudo que não tenho um caminho no paths, e vai jogar para o redirectTo:"", dentro do redirectTo você vai passar uma String indicanto em que path o usúaria sera redirecionado 

## Usando o RouterLInk para navegar entre páginas

Para usar o Router Link vai vai trocar no seu HTML a tag href="" por um router link.

~~~html
<a href="/portifolio"></a>
trocar por 
<a [routerLink]="['/portifolio']">Portifolio</a>
~~~
dentro do Routerlink vc vai colocar o path que vc configuro no App-routing

## Router Link com classe

com o routerLinkActive você pode passar um class de css para a rota em que se encontra o site
~~~ng
[routerLinkActive]="['ClassDoCss']"
~~~
E para pegar exatamente a rota, tudo igual vc pode usar o routerLinkActiveOptions

~~~ng
[routerLinkActiveOptions]="{exact: true}
~~~
quando a rota for exatamente igual vai atribuir a class no elemento

## Rotas com parâmetros

Dentro do Path vc vai colocar um /:nomeDoParemetro por exemplo
~~~ng
{path:'portifolio/:id', component: CardComponent, pathMatch:'prefix'},
~~~

nesse exemplo estou passando o parametro id agora para pode dar um get nesse parametro a gente vai no component que esta no path no caso acima esta no CardComponent, e dentro do metodo contrudor fazer criar um varivel do tipo ActivatedRoute e vamos puxar os parametros dele como no exemplo abaixo

~~~ng
constructor(private activeRoute: ActivatedRoute){
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )
  }
~~~
Nesse coigo ele estar resgantando o parametro e printando no console.

### QueryParams de rotas 

Dentro do contructor vc vai chamar o nome que vc deu para o activeRoute e puxar com o queryParams
Por Exemplo:
~~~ng
this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
~~~

ele vai puxar o meu QueryParams e vai printar no console 

## Redirecionamento por Component

Dentro do Componenet no metodo contrudor vai chamar um tipo de dado Router

~~~ng
private navegador: Router
~~~

para navegar é só chamar o nome do que vc deu para o tipo Router e colocar .navigata(['path'])

Exemplo:
~~~ng
this.navegador.navigate(['/'])
~~~

## Rotas Children

Dentro do App-Routing pode fazer um Path dentro de outro path como nos exemplos acima o path portifolio não existem mais sem o id podemos fazer assim

~~~ng
{path:'portifolio', component: CardComponent , children:[
    {path:':id', component: CardComponent},
  ]},
~~~

puxar os params de rota filho

~~~ng
this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )
~~~