const TITLE_URL ="primera funcion"
const nombre= "soprt center"

//ECMA 5
function agregarALCarrito(_nombreDeProducto, _precioProducto = 0, stockProducto, cantidadPedida) 
{ const tieneStock = validarStock(stockProducto, cantidadPedida);

  if (tieneStock) {
    console.log(`Agregaste al carrito ${nombreDeProducto} a ${precioProducto}` );
  }
    else{
      console.log("no tenemos mas para ofrecerte");
    }
}

function validarStock(stockProducto, cantidadPedida) {

          return(stockProducto> cantidadPedida);
}

agregarALCarrito("campera del barsa" ,1000, 10, 300);