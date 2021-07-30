<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Medida;

class MedidaController extends Controller
{
    public function registrarMedida(Request $request){

        $input = $request->all();

        $medida = new Medida();
        $medida->fecha = $input["fecha"];
        $medida->hora = $input["hora"];
        $medida->medidor = $input["medidor"];
        $medida->direccion = $input["direccion"];
        $medida->valor = $input["valor"];
        $medida->tipomedida = $input["tipomedida"];

        $medida->save();
        return $medida;
    }

    public function getMedidas(){

        $medidas = Medida::all();
        return $medidas;
    }


    //public function eliminarMedida(Request $request){
    //
    //    $input = $request->all();
    //    $id = $input["id"];

    //    $medida = Medida::findOrFail($id);

    //    $medida->delete();

    //    return "OP";
   // }
}
