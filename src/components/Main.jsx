import React from "react";

const Main = () => {
    return(

        <div>
            <input type="text" placeholder="Ingrese su DNI" class="border-success"/><br /><br />
            <input type="text" placeholder="Ingrese su usuario" class="border-success" /><br /><br />
            <input type="text" placeholder="Ingrese su clave" class="border-success" /><br /><br />
            <input type="checkbox" />
            <label><p>Recordar usuario</p></label><br /><br />
            <button class="btn btn-success">Ingresar</button>
        </div>

    );
}

export default Main;