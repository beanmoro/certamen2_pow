@extends("layouts.master")


@section("contenido")
    <div class="row mt-4">
        <div class="col-12 col-md-3 col-lg-3 mx-auto pb-4">
            <div class="card">

                <div class="card-header bg-dark text-white">
                    <span>Filtro de Tabla</span>

                </div>

                <div class="card-body">
                    <select class="form-select" id="filtro-input">
                        <option value="-1">Todos</option>
                        <option value="kW">kiloWatts</option>
                        <option value="W">Watts</option>
                        <option value="C">Temperatura</option>
                    </select>

                </div>




            </div>
        </div>

        <div class="col-12 col-md-8 col-lg-8 mx-auto">
            <table class="table table-hover table-bordered table-striped table-responsive table-dark">
                <thead class="">
                    <tr>
                        <td>Fecha</td>
                        <td>Hora</td>
                        <td>Medidor</td>
                        <td>Valor</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody id="tbody-mediciones">

                </tbody>
            </table>
        </div>
    </div>


@endsection

@section("javascript")
    <script src="{{asset('js/services/MedidasService.js')}}"></script>
    <script src="{{asset('js/mediciones_existentes.js')}}"></script>
@endsection