import { useState } from "react";
import "./Input.css";

const Fun = props => {

    const [valor, setValor] = useState("Inicial");

    function quandoMudar(e) {
        setValor(e.target.value);
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <input value={valor} onChange={quandoMudar} /> {/* componente controlado */}
                <input value={valor} readOnly /> {/* componente readOnly */}
                <input value={undefined} /> {/* componente não controlado */}
            </div>
        </div>
    )

}

export default Fun;