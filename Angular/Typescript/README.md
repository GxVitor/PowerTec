# Aprendendo TypeScript

## Instalando o TypeScript
<br>
<img src="https://i.pinimg.com/564x/66/d5/23/66d5238900aab3d7b86dc5e53a77c817.jpg" width="50px" height="50">

<br>

**Para A Instalação do TypeScript é Necessario o Node.js, pois a instalação do TS(TypeScript) é instalado pela dependência do npm,fio ou pnpm**
<br>
## Colocando TS no Projeto

*Para colocar o TS no seu projeto Primeiro vamos colocar o Node.Js no projeto*

~~~Node.js
npm init
~~~

*com esse codigo ira iniciar um novo projeto Node e pedirar algumas informação sobre o projeto, e ira Criar um arquivo Chamado **package.json**, nesse arquivo você pode gerenciar as dependência do projeto como nome, versão, e scripts*

**Como facilitar você pode usar o comando já na pasta desejada**
~~~Node.js
npm init -y
~~~
*Esse comando fara a mesma coisa que o **npm init** mais com o -y ele não ira pedi informação do projeto e dando Yes em todas as perguntas do projeto, e irar criar o arquivo **package.json** onde vc poderar alterar algumas informação se necessario*
___

## Instalando o TypeScript no Projeto

*Depois de temos iniciado um projeto node vamos colocar o typescript no projeto podemos fazer isso de alguns jeitos vou mostrar 2 jeitos*

~~~Node.Js
npm install typescript
npm install typescript -D
            Ou
npm install -g typescript
~~~

**Qual a diferença entrer esses comandos?**

*No comando **npm install typescript** vocẽ irar instalar o pacote Typescript somente no local onde foi executado o comando, sendo assim apenas localmente*

*No comando **npm install typescript -D** irar instalar o pacote Typescript, -D indica que o pacote será instalado("devDependecy") em um projeto NOde.js*

*No comando **npm install -g typescript** irar instalar o pacote TYpescript,o parâmetro -g significa "global" e indica que o pacote TypeScript será instalado em um local global no sistema, em vez e ser instalado localmente em um projeto especifico.Isso permite vocẽ compilar Typescript em qualquer projeto ou diretório, sem precisar instalá-lo localmente em cada projeto*

<h2 style="color:red">Aviso</h2>

*Importante lembrar que a instalação global do Typescript pode causar problemas de compatibilidade ou conflitos de versão, especialmente se você trabalha em vários projetos que usam versões diferentes do TypeScript. é recomendável que instale o Typescript localmente em cada projeto, usando uns dos comandos acima*

**Desistalar o Typescript Global**
~~~Terminal
    npm uninstall -g typescript
~~~
*Esse comando desistalar o typescript do seu sistema global.*

___
### Criando e Consigurando um Projeto Typescript

*Agora para criar um arquivo em Typescript, basta somente criar um arquivo com a extenção .ts*

**Exemplo**
~~~
index.ts
~~~
*O Ts indica que o arquivo é do tipo Typescript*

## Compilando Seus Projetos Typescript
<br>

*para compilar o seus projetos em Typescript, e bem simples você irar usar esse comando na pasta onde estar seu arquivo*
~~~
npx tsc
~~~
*E ele irar compilar seus Arquivos **Ts** para **js**.*

<br>

## Configurando o Typescript

*Como configuramos o Typescript usaremos o seguinte comando*
~~~
npx tsc --init
~~~

*logo depois de executar esse comando no seu projeto irar criar um arquivo chamado **tsconfig.json**, nesse aquivo json contem as configuração do Seu Ts onde vc poderar alterar a pasta raiz do seu projeto Ts, ou a onde os projetos que serão compilador iram ir, entrer outrar configuração que vc pode mudar*
