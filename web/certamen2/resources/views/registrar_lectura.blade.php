@extends("layouts.master")


@section("contenido")
    <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-dark text-white">
                    <span>Registrar Lectura</span>
                </div>

                <div class="card-body">
                    <div class="mb-3">
                        <label for="fecha-date" class="form-label">Fecha</label>
                        <input type="date" id="fecha-date" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label for="hora-input" class="form-label">Hora</label>
                        <input type="text" id="hora-input" class="form-control">
                        
                    </div>

                    <div class="mb-3">
                        <label for="medidor-input" class="form-label">Medidor</label>
                        <select class="form-select" id="medidor-input">
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                          </select>
                    </div>

                    <div class="mb-3">
                        <label for="direccion-input" class="form-label">Direccion</label>
                        <input type="text" class="form-control" id="direccion-input">
                    </div>

                    <div class="mb-3">
                        <label for="valor-input" class="form-label">Valor</label>
                        <input type="number" class="form-control" id="valor-input">
                    </div>


                    <div class="mb-3">
                        <label for="tipomedida-input" class="form-label">Tipo de Medida</label>
                        <select class="form-select" id="tipomedida-input">
                            <option value="kw">Kilowatts</option>
                            <option value="w">Watts</option>
                            <option value="c">Temperatura</option>

                          </select>
                    </div>

                </div>

                <div class="card-footer d-grid gap-1">
                    <button id="registrar-btn" class="btn btn-dark text-light">Registrar</button>
                </div>

            </div>
        </div>
    </div>    



@endsection

@section("javascript")
    <script src="{{asset('js/services/MedidasService.js')}}"></script>
    <script src="{{asset('js/registrar_lectura.js')}}"></script>
@endsection