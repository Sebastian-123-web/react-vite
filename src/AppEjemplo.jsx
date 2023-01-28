 import { useState } from 'react';

 /*
 el primer paso a definir un componente es el nombre
 el nombre de un campo debe iniciar siempre en mayuscula
 ahora un componente basicamente es una funcion, por
 ende podemos crearlos usando funciones 
 -flecha 
 -aninima
 -declarativa
 */

const PrimerComponente = () => {
    /*
        react tiene una funcion llamada useState
        useState es una funcion interna de react, la
        cual se encarga de manipular el estado de las 
        varianbles

        al usar useState la forma en el cual debemos
        crear la variable 
        count : es la variable que usaremos para mostrar un valor
        serCount : es la funcion que se encarga de poder asignarle ese valor

        para poder definir esta variable como parte de useState debemos iniciar
        el valor
        de esta variable usamos useState
        ojo el valor que va dentro de useState sera ek valor inicial de la variable

        const[count,setCount] = useState(0);

        esta funcion retorna una vista
        en react usamos return() para indicar que lo que este dentro de los parentesis
        sera el objeto visual que vamos a retornar
        algo importante 
    */

        const[count,setCount] = useState(0);/* HOOK */

        const sumar = () => setCount( count + 1 );
        const restar = () => setCount( count - 1 );
        const reset = () => setCount( 0 );

        return (
            <div>
                <h1>FUNCION DE EJEMPLO</h1>
                <h4>Hola desde mi componente {count} </h4>
                {/* vamos a crear dos botones uno para sumar y otro para restar */}
                <button onClick={sumar} className="mr sumar">Sumar</button>
                <button onClick={restar} className="mr resta">Restar</button>
                <button onClick={reset} className="reset">reset</button>
            </div>
        )
}

export default PrimerComponente;