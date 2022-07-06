import './Menu.css';
import { Link } from 'react-router-dom';

const Fun = _ => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/param/123">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/abc">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/naoExiste">Não existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Fun;