function mostrar()
{
//Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
//nombre
//Tipo curasada("libre";"presencial";"remota")
//cantidad de materias( mas de cero y menos de 8)
//Sexo ( femenino , masculino , no binario)
//Nota promedio (entre 0 y 10)
//edad (validar)
//se debe informar de existir, o informar que no existe , en el caso que corresponda.
//a) El nombre del mejor promedio que no sea masculino
//b) El nombre del mas joven de los alumnos entre los que la dan libre
//d) El promedio de nota por sexo
//f) La edad y nombre del que cursa mas materias que no sean en forma remota
}

//Variables
var nombre;
var tipoCursada;
var cantidadMaterias;
var sexo;
var nota;
var edad;
var respuesta = "si";
var MaxCantidadDeMateriasPresencial;
var nombreMayorCantidad;
var alumnoMasJoven;
var nombreMasJoven;


//acumuladores
var acumuladorNotaNoBinario = 0;
var acumuladorNotaFemenino = 0;
var acumuladorMasculino = 0;
var acumuladorMaterias;

//contadores
contadorFememenino = 0;
contadorNoBinario = 0;
contadorMasculino = 0;


do{

  nombre = prompt("Ingrese nombre");
  while(isNaN(nombre)==true)
  {
    nombre = prompt("Reingrese el nombre")
  }

  tipoCursada = prompt("Ingrese tipo de cursada: libre,presencial,remota");
  while(tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota")
  {
    tipoCursada =prompt ("Reingrese tipo de cursada");
  }
  
  cantidadDeMaterias = prompt(" Ingrese cantidad de Materias");

  while(cantidadMaterias > 0 || cantidadMaterias < 8)
  {
    cantidadMaterias = prompt(" Reingrese cantidad de materias")
  }
  sexo = prompt("Ingrese el sexo ");
  while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
  {
    sexo = prompt("Reingrese sexo");
  }

  nota = prompt("Ingrese nota promedio");
  while(nota < 0 || nota >= 10)
  {
    nota = prompt("Reingrese nota");
  }

  edad = prompt("Ingrese edad");
  while (edad > 18)
  {
    edad = prompt("Reingrese edad")
  }

  switch (sexo) {
    case "masculino":
      contadorMasculino++;
      acumuladorMasculino += notaPromedio;
      promedioMasculino = acumuladorMasculino/ contadorMasculino; //Promedio de nota por sexo
     
      break;


    case "no binario":
      contadorNoBinario++;
      acumuladorNotaNoBinario += notaPromedio;
      promedioNoBinario = acumuladorNotaNoBinario/ contadorNoBinario;
      if (promedio > mejorPromedioNoBinario)
      {
        mejorPromedioNoBinario = promedio;
        nombreMejorpromedioNoBinario = nombre;    //Mejor Promedio No binario
      }

      break;
    case "femenino":
      contadorFemenino;
      acumuladorNotaFemenino += notaPromedio;
      promedioFemenino = acumuladorNotaFemenino/ contadorFemenino;
      if (promedio > mejorPromedioFemenino)
      {
        mejorPromedioFemenino = promedio;
        nombreMejorpromedioFemenino = nombre;    //Mejor Promedio femenino
      }

      break;		
  }

  switch (tipoCursada) {
    case "Libre":
      contadorLibre++
      acumuladorMaterias+= cantidadMaterias;
      if(contadorLibre == 1 || cantidadMaterias > MaxCantidadDeMateriasLibre)
      {
        MaxCantidadDeMateriasLibre = cantidadMaterias;
        NombreMayorCantidad = nombre;
        edadMayorCantidad = edad;
      }

      if(edad > edadDelMasJoven)
      {
        edadDelMasJoven = edad;
        nombreMasJoven = nombre;

      }
     
      break;

    case "presencial":
     contadorPresencial++
     acumuladorMaterias+= cantidadMaterias;
      if(contadorPresencial == 1 || cantidadMaterias > MaxCantidadDeMateriasPresencial)
      {
        MaxCantidadDeMateriasPresencial = cantidadMaterias;
        nombreMayorCantidadPresencial= nombre;
        edadMayorCantidadPresencial = edad;
      }
      break;
    case "remota":
     contadorRemoto++

      break;		
  }




} while (respuesta == "si");






