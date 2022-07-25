import React from 'react'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { markAsDone, markAsPending, remove } from '../main/actions'
import { bindActionCreators } from 'redux'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(item => (
            <tr key={item._id}>
                <td className={item.done ? 'markedAsDone' : ''}>{item.description}</td>
                <td>
                    <IconButton
                        style='success'
                        icon='check'
                        hide={item.done}
                        onClick={() => props.markAsDone(item)}
                    />
                    <IconButton
                        style='warning'
                        icon='undo'
                        hide={!item.done}
                        onClick={() => props.markAsPending(item)}
                    />
                    <IconButton
                        style='danger'
                        icon='trash-o'
                        hide={!item.done}
                        onClick={() => props.remove(item)}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )

}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)