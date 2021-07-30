document.querySelector("#registrar-btn").addEventListener("click", async()=>{

    let fecha = document.querySelector("#fecha-date").value;
    let hora = document.querySelector("#hora-input").value;
    let medidor = parseInt(document.querySelector("#medidor-input").value);
    let direccion = document.querySelector("#direccion-input").value;
    let valor = parseInt(document.querySelector("#valor-input").value);
    let tipomedida = document.querySelector("#tipomedida-input").value;

    if ((hora.indexOf(":") != -1 && hora.length == 5) && (valor > 0 && valor <= 500)){
        let medida = {};

        medida.fecha = fecha;
        medida.hora = hora;
        medida.medidor = medidor;
        medida.direccion = direccion;
        medida.valor = valor;
        medida.tipomedida = tipomedida;

        console.log(medida);
        let respuesta = await registrarMedida(medida); //ERROR 500 :C
        await Swal.fire("EXITO!");
    }else{
        if((hora.indexOf(":") == -1 || hora.length != 5) && (valor < 0 || valor > 500)){
            Swal.fire("Error", "El formato de la hora invalido! \nFORMATO CORRECTO: XX:XX \n Y \nEl valor tiene que ser mayor que 0 y menor o igual a 500!", "error");
        }else if(hora.indexOf(":") == -1 || hora.length != 5){
            Swal.fire("Error", "El formato de la hora invalido! \nFORMATO CORRECTO: XX:XX", "error");
            
        }else{

            Swal.fire("Error", "El valor tiene que ser mayor que 0 y menor o igual a 500", "error");
            
        }
    }


});