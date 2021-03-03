//Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
//de cada una debo obtener los siguientes datos:
//el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
//el precio (validar entre 100 y 300),
//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
//el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
//Se debe Informar al usuario lo siguiente:
//a) El promedio de cantidad por tipo de producto/
//b) El tipo de inflamable con más cantidad de unidades en total de la compra
//c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
//d) la marca y tipo del más caro de los productos

function mostrar()
{
	//Variables

	var nombreDeProducto;
	var tipoDeProducto; //alcohol.IAS,QUAT
	var precioProducto; //entre 100 y 300
	var cantidadUnidades;
	var tipoInflamable;
	var marcaInflamable;
	var totalTipoProductos;
	var promedioTipoProductos;
	var precioMasCaro;
	var mayorTipo;
	var flagProducto;
	var tipoCaro;
	var MarcaCaro;
	

	//contadores
	var contadorAlcohol = 0;
	var contadorIac = 0;
	var contadorQuat = 0;
	var contadorPrecioBajoIac = 0;
	var contadorInsifugo = 0;
	var contadorCombustible = 0;
	var contadorExplosvo = 0;



	//Acumuladores
	var acumuladorAlcohol = 0;
	var acumuladorIac = 0;
	var acumuladorQuat = 0;
	var acumuladorInsifugo = 0;
	var acumuladorCombustible = 0;
	var acumuladorExplosivo = 0;


	for(i = 0; i< 5 ; i++)

	{
		nombreDeProducto = prompt("Ingrese nombre del producto");
		while(isNaN(nombreDeProducto)==true)
		{
			nombreDeProducto = prompt("Reingrese nombre del producto");
		}

		tipoDeProducto = prompt("Ingrese tipo de producto");
		while(isNaN(tipoDeProducto)==true && tipoDeProducto != "alcohol" && tipoDeProducto != "iac" && tipoDeProducto != "quat")
		{
			tipoDeProducto = prompt("Reingrese tipo de producto");
		}

		precioProducto = prompt("Ingrese precio del producto");
		while(isNaN(precioProducto)==false | precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = prompt("ingrese precio producto nuevamente");
		}

		cantidadUnidades = prompt("Ingrese cantidad de unidades: entre 1 y 1000");
		while(isNaN(cantidadUnidades)==false || cantidadUnidades <= 0 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt(" Reingrese cantidad de unidades");
		}
		
		tipoInflamable = prompt("Ingrese tipo de inflamable:('ignífugo', 'combustible', 'explosivo')");
		while(isNaN(tipoInflamable)==true && tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo")
		{
			tipoInflamable = prompt("Reingrese tipo de inflamable. Recuerde: 'ignífugo', 'combustible', 'explosivo'");
		}

		marcaInflamable = prompt("Ingrese marca de inflamable");
		while(isNaN(marcaInflamable)==true)
		{
			marcaInflamable=prompt("Reingrese marca de inflamable");
		}


		switch (tipoDeProducto) {
			case 'alcohol':
				acumuladorAlcohol += cantidadUnidades;
				contadorAlcohol++
				break;
		
			case  "iac":
				acumuladorIac += cantidadUnidades;
				contadorIac++
				if (precio <= 200)
				{
					contadorPrecioBajoIac++ //C.
				}
				break;
			
				case "quat":
				acumuladorQuat += cantidadUnidades;
				contadorQuat++
				break;
		}

		switch (tipoInflamable) {   //"ignífugo", "combustible", "explosivo"
			case 'insifugo':
				acumuladorInsifugo += cantidadUnidades;
				contadorInsifugo++
				break;
		
			case  "combustible":
				acumuladorCombustible += cantidadUnidades;
				contadorCombustible++
				break;
		
			
			case "explosivo":
				acumuladorExplosivo += cantidadUnidades;
				contadorExplosvo++
				break;
		
		}

	}

	//A. promedio
	totalTipoProductos = contadorAlcohol + contadorIac + contadorQuat;
	porcentaje = acumuladorAlcohol + acumuladorIac + acumuladorQuat/totalTipoProductos;

	//Mayor tipo de Inflamable

	if (acumuladorIgnifugo > acumuladorCombustible && acumuladorIgnifugo > acumuladorExplosivo)
	{

        mayorTipo = "insifugo"                              
        promedioxcantidad = acumuladorInsifugo/contadorIgnifugo;
    }
    else if (acumuladorCombustible > acumuladorExplosivo)
	{

        mayorTipo = "combustible"
        promedioxcantidad =  acumuladorCombustible/contadorCombustible;                             
    } 
    else {

        mayorTipo = "explosivo"
        promedioxcantidad = acumuladorExplosivo/ contadorExplosivo; 
	}

	if (flagProducto == 1 && precioProducto > precioMasCaro) // Precio mas caro 
	{
		tipoCaro = tipoProducto;
		marcaCaro = marcaProducto;
		precioMasCaro = precioProducto;
	}


	
	
	

 


}
