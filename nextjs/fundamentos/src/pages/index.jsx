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
            <Navegador texto="Integração com API #01" destino="/integracao01" cor="yellow" />
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fa054a" />
        </div>
    )
}