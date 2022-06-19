const fun = props => {
    const { min, max } = props;
    const sorteado = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor aleatório</h2>
            <p><strong>Valor mínimo: </strong> {min}</p>
            <p><strong>Valor máximo: </strong> {max}</p>
            <p><strong>Valor sorteado: </strong> {sorteado}</p>
        </div>
    )
}

export default fun;