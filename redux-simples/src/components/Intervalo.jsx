import Card from './Card'
import './Intervalo.css'

const Intervalo = props => {

    const { min, max } = props

    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input
                        type="number"
                        value={min}
                        onChange={e => props.onMinChange(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input
                        type="number"
                        value={max}
                        onChange={e => props.onMaxChange(+e.target.value)}
                    />
                </span>
            </div>
        </Card>
    )

}

export default Intervalo