## APP DE RICK AND MORTY

### Temas de estudio

-Hooks:
    -UseState.
    -UseEffect.

-Peticiones http con axios.
-Asincronismo.
-Renderizado condicional.

### Estructura

La aplicación cuenta con los siguientes componentes principales o que se renderizan en el componente App.

#### SearchBox

Este componente se encarga de controlar el valor ingresado por el usuario en el input, y enviarlo por medio de un set al componente principal App y hacer la petición a la api por medio de la función getByType.

La aplicación permite hacer busquedas de acuerdo al id, nombre, type o dimensión, sin embargo, se debe tener en cuentra que los valores ingresados para la busqueda deben estar correctamente escritos.


#### LocationContainer

Este componente es el contenedor de la información sobre la ubicación deseada, la información se renderiza a traves de su componente hijo llamado LocationInfo.


#### ResidentContainer

Este componente es el contenerdor de todos los residentes encontrados por ubicación ingresada. El componente tiene dos funcionalidades que son renderizar la información de cada residente utilizando su componente hijo ResidentInfo y hacer la pqginación la cual hace a traves de un función llamada sliceGroupResidents que lo único que hace es dividir el arreglo en grupos que puedan ser renderizados por partes.


##### ResidentInfo

Este componente es el encargado de renderizar las tarjetas con la información de los residentes de acuerdo a la localización; recibe la url de cada recidente y utilizando la función getResidents se hace una petición a la API para obtener la información del residente.



