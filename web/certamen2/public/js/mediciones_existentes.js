
const borrarMedida = async function(){

    let id = this.idMedida;
    let notificacion = await SVGFEDropShadowElement.fire({
        title: "Eliminar Medicion",
        text: "Esta usted seguro de eliminar esta medicion?",
        icon: "error",
        showCancelButton:true

    });

    if(notificacion.isConfirmed){

        if(await eliminarMedida(id)){
            cargarMediciones(await getMedidas());
            Swal.fire("Medicion Eliminada!", "La medicion ha sido eliminada exitosamente!", "info");
        }else{

            Swal.fire("Error", "No se púdo eliminar la medida", "error");
        }
    }

}




const cargarMediciones = (medidas)=>{

    let tbody = document.querySelector("#tbody-mediciones");
    tbody.innerHTML = "";

    for(let i = 0; i < medidas.length; i++){
        let tr = document.createElement("tr");

        let tdFecha = document.createElement("td");
        tdFecha.innerText = medidas[i].fecha;
        let tdHora = document.createElement("td");
        tdHora.innerText = medidas[i].hora;
        let tdMedidor = document.createElement("td");
        tdMedidor.innerText = medidas[i].medidor;
        let tdValor = document.createElement("td");

        let valor = medidas[i].valor;
        tdValor.innerText = medidas[i].valor + " " + medidas[i].tipomedida;

        let icon = document.createElement("i");


        icon.classList.add("fas", "fa-burn", "text-danger");

        if (valor >= 100 && medidas[i].tipomedida == "C"){

            tdValor.appendChild(icon);
        }

        tdAccion = document.createElement("td");

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Descartar Lectura";
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.idMedida = medidas[i].id;
        deleteButton.addEventListener("click", borrarMedida);
        tdAccion.appendChild(deleteButton);

        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdValor);
        tr.appendChild(tdAccion);

        tbody.appendChild(tr);


    }


};

document.querySelector("#filtro-input").addEventListener("change", async()=>{

    let filter = document.querySelector("#filtro-input").value;
    let medidas = await filtrarMedidas(filter);
    cargarMediciones(medidas);

})