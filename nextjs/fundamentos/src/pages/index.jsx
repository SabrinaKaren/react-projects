import Navegador from "../components/Navegador";

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" cor="#9400d3" />
            <Navegador texto="Exemplo" destino="/exemplo" />
            <Navegador texto="Navegação #01" destino="/navegacao" cor="crimson" />
            <Navegador texto="Navegação #02" destino="/cliente/sp-99/123" cor="green" />
            <Navegador texto="Componente com Estado" destino="/estado" cor="pink" />
        </div>
    )
}