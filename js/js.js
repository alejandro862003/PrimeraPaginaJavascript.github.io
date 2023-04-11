window.onload = function() {
  alert("¡Bienvenido a la calculadora!");
  
  for (var i = 1; i <= 1; i++) {
    let edad = prompt("¿Que edad tenes?");
    
    if (edad < 18) {
      alert("Sos menor para las Operaciones");
    } else if (edad >= 18 && edad < 60) {
      alert("Sos mayor para las Operaciones");
    } else {
      alert("Sos muy adulto para las Operaciones");
    }
  }
  let nombreIngresar = prompt("Escribi tu nombre para ingresar");
  
  let apellidoIngresar = prompt("Ingresa tu apellido para ingresar");
  
  let ingresar = nombreIngresar + " " + apellidoIngresar +" "+ ",Bienvenido a la Sala de Operaciones "; 
  alert(ingresar);
  
  console.log(ingresar);
}

function calcular() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;
  
    let resultado;
  
    switch (operacion) {
      case "sumar":
        resultado = num1 + num2;
        break;
      case "restar":
        resultado = num1 - num2;
        break;
      case "multiplicar":
        resultado = num1 * num2;
        break;
      case "dividir":
        resultado = num1 / num2;
        break;
      default:
        resultado = "Operación no válida";
    }
  
    document.getElementById("resultado").innerHTML = `El resultado es: ${resultado}`;
  }
  