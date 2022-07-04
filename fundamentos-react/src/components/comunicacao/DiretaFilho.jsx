const fun = props => {
    return (
        <div>
            <span>{props.nome}, </span>
            <span>
                <strong>{props.idade}</strong>
                <span>, </span>
            </span>
            <span>{props.nerd ? 'Verdadeiro' : 'False'}!</span>
        </div>
    )
}

export default fun;