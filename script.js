$ ( documento ) . pronto ( função ( ) {
    $ ( janela ) . rolar ( função ( ) {
        if ( this . scrollY  >  20 ) {
            $ ( '.navbar' ) . addClass ( "adesivo" ) ;
        } senão {
            $ ( '.navbar' ) . removeClass ( "pegajoso" ) ;
        }
        if ( this . scrollY  >  500 ) {
            $ ( '.scroll-up-btn' ) . addClass ( "exibir" ) ;
        } senão {
            $ ( '.scroll-up-btn' ) . removeClass ( "mostrar" ) ;
        }
    } ) ;
     $ ( '.scroll-up-btn' ) . clique ( função ( ) {
         $ ( 'html' ) . animar ( { scrollTop : 0 } ) ;
     } ) ;

     var  digitado  =  novo  digitado ( ".typing" ,  {
         strings : [ "YouTuber" ,  "Desenvolvedor" ,  "Designer" ,  "Freelancer" ] ,
         tipoVelocidade : 100 ,
         velocidade de retorno : 60 ,
         ciclo : verdadeiro
     } ) ;
     var  digitado  =  novo  digitado ( ".typing-2" ,  {
        strings : [ "YouTuber" ,  "Desenvolvedor" ,  "Designer" ,  "Freelancer" ] ,
        tipoVelocidade : 100 ,
        velocidade de retorno : 60 ,
        ciclo : verdadeiro
    } ) ;

    $ ( '.menu-btn' ) . clique ( função ( ) {
        $ ( '.navbar.menu' ) . toggleClass ( "ativo" ) ;
        $ ( '.menu-btn i' ) . toggleClass ( "ativo" ) ;
    } ) ;
    $ ( '.carrossel' ) . corujaCarrossel ( {
        margem : 20 ,
        circuito : verdadeiro ,
        autoplayTimeOut : 2000 ,
        autoplayHoverPauser : verdadeiro ,
        responsivo : {
            0 : {
                itens : 1 ,
                navegação : falso
            } ,
            600 : {
                itens : 2 ,
                navegação : falso
            } ,
            1000 : {
                itens : 3 ,
                navegação : falso
            }
        }
    } ) ;
} ) ;
