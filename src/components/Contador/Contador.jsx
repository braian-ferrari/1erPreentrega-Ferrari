import { useState } from "react";

function Contador() {
    //definir un estado
    const [contador, setContador]= useState(0);

    return(
        <div>
        <div>{contador}</div>
        <button onClick={() => setContador(contador + 1)}>➕</button>
        <button onClick={() => setContador(contador - 1)}>➖</button>
    </div>
    );
    
}
export default Contador;