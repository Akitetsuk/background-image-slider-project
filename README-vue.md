- Que estado de la app necesitamos
- Que eventos hemos de capturar y en que elementos del DOM ponerlos
- Que atributos HTML tenemos que obtener dinámicamente en función del estado

## Atributos

- Tenemos que asignar dinámicamente la propiedad style.backgroundImage al elemento .img-container

## Estado

- Índice del elemento del array en el que estamos actualmente: index

## Computed property

- Nos devuelve la posición del array en función del a variable de estado index : getUrl

## Eventos

- En el boton .btn-left asociar evento click
   - Actualizar this.index-- ; 
- En el botón .btn-right asociar evento click
   - Actualizar this.index++ ;
- PROBLEM: Cuidado con salirse del array. Necesitais ifs para controlar esto. 
            Modo BONUS: utilizar el módulo adecuadamente para no salirse nunca del array.




