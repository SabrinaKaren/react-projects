import Layout from '../components/Layout';
import { useState } from 'react';

export default function Integracao() {

    const [codigo, setCodigo] = useState(1);
    const [cliente, setCliente] = useState({});

    function obterCliente() {
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(res => res.json())
            .then(dados => setCliente(dados));
    }

    return (
        <Layout>
            <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)} />
            <button onClick={obterCliente}>Obter cliente</button>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )

}