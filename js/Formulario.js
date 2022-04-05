class Formulario {

    constructor(){
        // criando caixa de texto
        this.input = createInput("").attribute("placehoder","Digite seu nome");
        this.button = createButton("Jogar");
        this.inicio = createImg("./assets/TITULO.png");
        this.boasvindas = createElement("h2");
        
    }
    // escondeno elementos
    hide(){

        this.button.hide();
        this.inicio.hide();
        this.boasvindas.hide();
        
    }
    setElementsPosition(){
        this.inicio.position(120,50);
        this.input.position(width/2-110,height/2-80);
        this.button.position(width/2-90,height/2-20);
        this.boasvindas.position(width/2-300,height/2-100);

    }

    setElementsStyle(){
        this.inicio.class("inicio");
        this.input.class("customInput");
        this.button.class("customButton");
        this.boasvindas.class("boasvindas");

    }
    show(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();

    }
    handleMousePressed(){
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var message = ` Olá ${this.input.value()} </br>espere o outro jogador entrar...`; 
            this.boasvindas.html(message);
            playerCount = playerCount+1
            jogador.nome = this.input.value();
            jogador.index = playerCount;
            jogador.adcionarJogadores();
            jogador.atualizarQuantidadedeJogadores(playerCount);
        })



    }
}