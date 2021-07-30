document.querySelector("#registrar-btn").addEventListener("click", async()=>{

    let fecha = document.querySelector("#fecha-date").value;
    let hora = document.querySelector("#hora-input").value;
    let medidor = parseInt(document.querySelector("#medidor-input").value);
    let direccion = document.querySelector("#direccion-input").value;
    let valor = parseInt(document.querySelector("#valor-input").value);
    let tipomedida = document.querySelector("#tipomedida-input").value;

    let medida = {};

    medida.fecha = fecha;
    medida.hora = hora;
    medida.medidor = medidor;
    medida.direccion = direccion;
    medida.valor = valor;
    medida.tipomedida = tipomedida;

    console.log(medida);
    let respuesta = await registrarMedida(medida);
    //await Swal.fire("EXITO!");


});