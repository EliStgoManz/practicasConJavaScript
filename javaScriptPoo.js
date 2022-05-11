/*aprendiendo programación orientada a objetos con javaScript*/

/*primero creamos una clase*/

class miClase{
    //creamos el constructor de la clase
    constructor(primero,segundo){
        //atributos
        this.uno=primero;
        this.dos=segundo;
        this.tres="Hola a todos";
    };


    miMetodoUno(){
    return this.uno;

    };
    
    //aquí creamos un metodo que contiene dos parametros
    miMetodoDos(parametroUno,parametroDos){
        document.write(
            "El parametro uno es:" + parametroUno+
            "<br>El parametro Dos es:"+parametroDos
        );
    };
};

//observaremos el tema de herencia
class miClaseDos extends miClase{
    constructor(uno,dos,cuarto){
        super(uno,dos);
        this.cuatro=cuarto;
    };
};

var ObjetoTres=new miClaseDos("Elí","Oaxaca de juaréz",1994);
document.write( ObjetoTres.dos );

