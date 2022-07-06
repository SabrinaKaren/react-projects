import { useParams } from 'react-router-dom';

const Fun = _ => {
    const { id } = useParams();
    return (
        <div className="Param">
            <h1>Início</h1>
            <h2>Param: {id}</h2>
        </div>
    );
}

export default Fun;