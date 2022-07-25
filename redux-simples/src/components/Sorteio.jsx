import Card from './Card'

const Soma = props => {

    const { min, max } = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title="Sorteio de um Números" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )

}

export default Soma