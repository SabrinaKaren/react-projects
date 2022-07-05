import { useState } from "react";
import "./Mega.css";

const Fun = props => {

    const [quantidade, setQuantidade] = useState(props.quantidade || 6);
    const numerosIniciais = gerarNumeros(quantidade);
    const [numeros, setNumeros] = useState(numerosIniciais);

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);
        return array.includes(aleatorio)
            ? gerarNumeroNaoContido(min, max, array)
            : aleatorio;
    }

    function gerarNumeros(quantidade) {
        const numeros = Array(quantidade)
            .fill(0)
            .reduce((array) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, array);
                return [ ...array, novoNumero ];
            }, [])
            .sort((a, b) => a - b);

        return numeros;
    }

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de números </label>
                <input
                    type="number"
                    min={1}
                    max={15}
                    value={quantidade}
                    onChange={e => {
                        setQuantidade(+e.target.value);
                        setNumeros(gerarNumeros(+e.target.value));
                    }}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(quantidade))}>Gerar números</button>
        </div>
    )

}

export default Fun;