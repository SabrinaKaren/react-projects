import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import axios from "axios";

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(res => {
                this.setState({
                    ...this.state,
                    description,
                    list: res.data
                })
            })
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(_ => this.refresh())
    }

    handleRemove(item) {
        axios.delete(`${URL}/${item._id}`)
            .then(_ => this.refresh(this.state.description))
    }

    handleMarkAsDone(item) {
        axios.put(`${URL}/${item._id}`, { ...item, done: true })
            .then(_ => this.refresh(this.state.description))
    }

    handleMarkAsPending(item) {
        axios.put(`${URL}/${item._id}`, { ...item, done: false })
            .then(_ => this.refresh(this.state.description))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }

}