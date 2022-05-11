/*aprendiendo programación orientada a objetos con javaScript*/

/*primero creamos una clase*/

class miClase{
    //creamos el constructor de la clase
    constructor(primero,segundo){
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

//crear un objeto en base a una clase(instanciar una clase)
var objetoUno=new miClase("Elí",77777);
//recuperar los datos que he instanciado
objetoUno.miMetodoDos("soy Elí",1994);