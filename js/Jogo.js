class Jogo{

    constructor(){
    }

    elementos(){

        formulario.hide();
        formulario.inicio.position(40,50);
        formulario.inicio.class("gameTitleAfterEffect");
        
    } 
    
    play(){

        this.elementos();
        Jogador.infdejogadores();
        if(allplayer!==undefined ){
            drawSprites();
            //desenando img
            image(imagePista,0,-height*5,widht,height*6);
        }

    }

    start(){
        jogador = new Jogador();
        playerCount = jogador.obterQuantidadesdeJogadores();
        formulario = new Formulario();
        formulario.show();
        carro1 = createSprite(widht/2-50,height-100);
        carro1.addImage(imagCarro1);
        carro2 = createSprite(widht/2+100,height-100);
        carro2.addImage(imagCarro2);
        
        matrizdoCarro = [carro1,carro2];
    }
    ativarEstadodejogo(){
        //"ref" localiza a informação do banco de dados.
        var estadodejogoReferencia = database.ref("estadodejogo");
        //"on" ele vai ler o valor no banco de dados e salva.
        estadodejogoReferencia.on("value",function(data){
            estadodejogo2 = data.val();
        })

    }
    atualizarEstadodejogo(gamestate){

        database.ref("/").update({estadodejogo2:gamestate})
    }
}