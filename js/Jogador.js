class Jogador {

    constructor(){
        //"mull" é vazio
        this.nome = mull;
        this.index = mull;
        this.positionX = 0;
        this.positionY = 0;
    }

    obterQuantidadesdeJogadores(){
        var referenciadeJogadores = database.ref("quantidadedejogadores");
        referenciadeJogadores.on("value",data =>{playerCount = data.val()});
    }

    atualizarQuantidadedeJogadores(count){
        //“/” é usado em updateCount para se referir ao diretório raiz.
        database.ref("/").update({playerCount:count});
        

    }
    adcionarJogadores(){
        //criando hierárquia do jogadores
        var jogadorID = "players/player" + this.index;
        
        if(this.index == 1){
            this.positionX = width/2-100;

        }
        else{
            this.positionX = width/2+100;
        }
        //atualizando banco de dados
        database.ref(jogadorID).set({nome:this.nome,positionX:this.positionX,positionY:this.positionY})
        //>databaseReference.set() criará e salvará a referência do banco de dados.
    }
    static infdejogadores(){
        //função estatica não se prende ao objeto mas sim a classe 
        var referenciadejogador = database.ref("jogadores");
        //criando um ouvinte
        referenciadejogador.on("value",data=>allplayer=data.val());
    }
}