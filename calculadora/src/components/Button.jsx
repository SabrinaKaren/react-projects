import "./Button.css";

const Fun = props => {
    let classNames = 'button ';
    classNames += props.operation ? 'operation' : '';
    classNames += props.double ? 'double' : '';
    classNames += props.triple ? 'triple' : '';
    return (
        <button
            className={classNames}
            onClick={_ => props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
}

export default Fun;