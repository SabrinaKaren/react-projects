import DiretaFilho from './DiretaFilho';

const fun = props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true} />
            <DiretaFilho nome="Gabriel" idade={17} nerd={false} />
        </div>
    )
}

export default fun;