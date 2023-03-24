## Conhecendo JavaScript

#**JavaScript**

__#Começando Do Basico__

[__Projetos de Js Na Web__](https://github.com/GxVitor/PowerTec/tree/main/PrimeiraAula/Projetos/PokeDexJS)

![JavaScript](https://i.pinimg.com/564x/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg)

# Api

## Requisição HTTP

**Na Requisição http é por meio de uma URL**
**Nessa URL contem Endereço/Path**

Endereço = dominio local onde o site de encontra

Path = caminho sobre o diretorio do dominio

---
<br>

## Request Method HTTP


- ## Get <img src="https://cdn-icons-png.flaticon.com/512/6384/6384846.png" width="50px" height="50px"/>

  - É usado para solicitar dados de um recurso específico na web. Ele é bastante comum em navegadores quando você digita um URL e espera que uma página seja carregada. O método GET envia dados através da URL e é limitado em termos de quantidade de dados que podem ser enviados. Ele é considerado "seguro" porque não altera o estado do servidor

<br>

- ## Post <img src="https://cdn-icons-png.flaticon.com/512/5735/5735252.png" width="50" height="50px">
  - É usado para enviar dados para serem processados pelo servidor. O método POST envia dados no corpo da solicitação, permitindo que envie uma quantidade maior de dados do que o método GET. Ele é frequentemente usado em formulários da web, onde os usuários inserem informações que precisam ser processadas. O método POST não é considerado "seguro" porque pode alterar o estado do servidor

<br>

- ## Put <img src="https://cdn-icons-png.flaticon.com/512/7069/7069812.png" width="50" height="50px">
  - É usado para atualizar ou modificar um recurso existente na web. O método PUT é usado quando você deseja atualizar ou modificar uma parte específica de um recurso, como uma imagem em uma página da web. Ele envia o novo conteúdo no corpo da solicitação e o servidor o usa para atualizar o recurso existente. O método PUT é considerado "seguro" porque ele não deve alterar o estado do servidor

<br>

- ## Delete <img src="https://cdn-icons-png.flaticon.com/512/5514/5514093.png" width="40" height="40px">
  - É usado para remover um recurso específico na web. O método DELETE é usado quando você deseja remover um recurso específico, como um post em um blog. O método DELETE é considerado "não seguro" porque ele altera o estado do servidor

<br>

- ## Patch <img src="https://cdn-icons-png.flaticon.com/512/913/913356.png" width="50" height="50px">
  - É usado para modificar parcialmente um recurso na web. O método PATCH é semelhante ao método PUT, mas em vez de enviar todo o novo conteúdo, ele envia apenas as alterações que devem ser feitas. O método PATCH é considerado "seguro" porque não deve alterar o estado do servidor.

<br>

- ## Options <img src="https://cdn-icons-png.flaticon.com/512/5784/5784702.png" width="50" height="50px">
  - É usado para retornar os métodos HTTP suportados em um servidor. O método OPTIONS é usado para descobrir quais métodos de solicitação são suportados por um servidor específico. Ele envia uma solicitação vazia ao servidor e o servidor responde com os métodos HTTP suportados.

<br>

- ## Head <img src="https://cdn-icons-png.flaticon.com/512/2061/2061822.png" width="50" height="50px">
  - É usado para solicitar apenas os cabeçalhos de uma resposta HTTP. O método HEAD é usado para descobrir informações sobre um recurso sem receber o corpo completo da resposta. Ele é útil para verificar se um recurso existe ou se foi modificado recentemente.

---
## Falando UM Pouco Sobre Query String
<br>
<div align="center">
Uma query string é uma parte de uma URL que contém informações adicionais sobre os parâmetros de uma solicitação HTTP. A query string geralmente aparece no final de uma URL após o símbolo de interrogação (?), e pode incluir um ou mais pares de chave/valor separados por um símbolo de igual (=) e separados por um símbolo de ampersand (&).
</div>

```
https://www.sitequalquer.com/search?q=apple&category=fruits&page=1
```
- **q=apple indica que a pesquisa é para a palavra "apple"**

- **category=fruits indica que a pesquisa deve se limitar à categoria "frutas"**

- **page=1 indica que a página atual é a primeira.**

<div align="center">
A query string é usada principalmente para enviar dados para um servidor da Web, que pode processá-los e retornar resultados relevantes para o cliente que fez a solicitação. Por exemplo, ao fazer uma pesquisa em um mecanismo de busca, a query string pode incluir o termo de pesquisa que o usuário digitou e outros parâmetros como a página atual ou o idioma desejado. O servidor da Web pode usar esses parâmetros para retornar uma lista de resultados relevantes que correspondem à consulta do usuário.
</div>

---

<br>

## Request Headers <img src="https://cdn-icons-png.flaticon.com/512/7065/7065322.png" width="50px">

Request headers são informações adicionais que são enviadas juntamente com uma solicitação (request) HTTP. Essas informações geralmente incluem informações sobre o navegador do usuário, o tipo de conteúdo que o cliente (usuário) está solicitando, o tipo de codificação aceita pelo cliente e outras informações importantes que o servidor pode usar para determinar como processar a solicitação.

Os cabeçalhos de solicitação (request headers) podem incluir informações como o tipo de navegador, idioma, tipo de conteúdo solicitado, autenticação, informações de cache e outras informações relacionadas à solicitação.

Os cabeçalhos de solicitação são enviados no início da solicitação HTTP antes do corpo da solicitação (request body). O servidor da web usa essas informações para processar a solicitação e determinar a melhor maneira de responder ao cliente.

Em Outras Palavras é a configuração da API.

---
<br>

## Response Heahers <img src="https://cdn-icons-png.flaticon.com/512/6008/6008062.png" width="50px">

Response headers são informações adicionais que são enviadas junto com a resposta (response) HTTP. Essas informações geralmente incluem informações sobre o servidor, o tipo de conteúdo que está sendo enviado, a codificação usada e outras informações importantes que o cliente (usuário) pode usar para processar a resposta.

Os cabeçalhos de resposta (response headers) podem incluir informações como a data e hora em que a resposta foi enviada, o tipo de servidor da web que está sendo usado, o tipo de conteúdo que está sendo enviado, o status da resposta (como 200 OK, 404 Not Found, etc.), informações de cache e outras informações relacionadas à resposta.

Os cabeçalhos de resposta são enviados no início da resposta HTTP antes do corpo da resposta (response body). O cliente da web usa essas informações para processar a resposta e determinar a melhor maneira de exibir ou utilizar o conteúdo recebido.

Em Outras Palavras é a configuração da API.





