
const registrarMedida = async(medida)=>{

    let respuesta = await axios.post("api/medidas/post", medida, { //ERROR 500 :C

        headers:{

            'Content-Type':'application/json'
        }
    });
    return respuesta.data;
}




const getMedidas = async ()=>{


    let medida = await axios.get("api/medidas/get");
    
    return medida.data;
};




const eliminarMedida = async(id)=>{


    try{
        let accion = await axios.post("api/medidas/delete", {id},{

            headers:{

                'Content-Type':'application/json'
            }
        });
        return accion.data == "OP";

    }catch(e){

        return false;
    }
}

const filtrarMedidas = async(filter)=>{

    let respuesta = await axios.get("api/medidas/filter", {filter}, {
        headers:{
            'Content-Type':'application/json'
        }
    });
    return respuesta.data;
}