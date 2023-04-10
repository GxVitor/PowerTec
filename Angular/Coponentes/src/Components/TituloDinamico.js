class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //base do compont
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        

        //estilizar compont
        const sytle = document.createElement("style");
        sytle.textContent = `
        h1{
            color: red;
        }
        `;

        //enviar para shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(sytle);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);