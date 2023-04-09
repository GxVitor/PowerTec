class CardNews extends HTMLElement{
    //Vai contruir o Meu D.O.M 
    constructor(){
        super();

        //Criano a Sombra e colocando que ela é open
        const shadow = this.attachShadow({mode: "open"});
        //colocando os elementos e estilo dentro da sombra
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    //função que vai criar os elementos 
    build(){
        //Criando a minha Div principal e colocando uma class nela
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        //Criando minha div Esquerda e colocando setando a class dela
        const lado_Esquedor = document.createElement("div");
        lado_Esquedor.setAttribute("class", "lado_Esquedor");

        //Criando Os Elementos da minha Div Esquerda e colocando os valores Dinamicos
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const titulo = document.createElement("h1");
        titulo.textContent = this.getAttribute("title") || "Arte Sem Nome";

        const conteuto = document.createElement("p");
        conteuto.textContent = this.getAttribute("contet") || "Sem nada A Dizer";

        //colocando os elementos na Div
        lado_Esquedor.appendChild(autor);
        lado_Esquedor.appendChild(titulo);
        lado_Esquedor.appendChild(conteuto);

        //Criando minha div Direita e colocando setando a class dela
        const lado_Direito = document.createElement("div");
        lado_Direito.setAttribute("class", "lado_Direito");

        //Criando os Elementos da Div da Direita
        const newsImage = document.createElement("img");

        //Pegando atributos que já vem com a tag
        newsImage.src = this.getAttribute("foto") || "assets/fotoPadrão.jpg";

        //colocando os Elementos Criando Dentro da Div Direita
        lado_Direito.appendChild(newsImage);



        //colocando as minha div dentro na minha Div Pricipal
        componentRoot.appendChild(lado_Esquedor);
        componentRoot.appendChild(lado_Direito);

        //Vai Retorna tudo dentro do ComponentRoot
        return componentRoot;
    }

    //função que vai estilizar os meus Elementos
    style(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 50%;
            box-shadow: 30px 24px 20px 0px rgba(0,0,0,0.1),14px 29px 15px -3px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-radius: 50px;
        }
        
        .lado_Esquedor{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .lado_Esquedor > span{
            font-weight: 400;
        }
        
        .lado_Esquedor > h1 {
            margin-top: 15px;
            font-size: 25px;
        }
        
        .lado_Esquedor > p{
            color: gray;
        }
        
        .lado_Direito img{
            width: 240px;
            border-radius: 50px;
        }
        `

        return style;
    }

}

customElements.define("card-news", CardNews);