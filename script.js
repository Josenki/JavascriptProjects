debugger
let respuesta = prompt("Tengo agujas y no se coser, tengo numeros y no se leer.:");
respuesta = parseInt(respuesta)

while (respuesta != "reloj") {
    alert("leelo otra vez");

    respuesta = prompt("Tengo agujas y no se coser, tengo numeros y no se leer.:");

    if(respuesta == "reloj"){
        alert("Al primer intento")
        break
       
    }
}


