import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import AddItem from "./components/add-item";

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Learn React'),
            this.createTodoItem('Build Awesome App'),
            this.createTodoItem('Drink coffee'),
        ],
        term: ''
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [ ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1) ];
            return {
                todoData: newArray
            }

        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            }
        });
    }

    onToggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem,
            [propName]: !oldItem[propName]};

        return  [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.onToggleProperty(todoData, id, 'important')
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.onToggleProperty(todoData, id, 'done')
            }
        });
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    searchItem = (term) => {
        this.setState({ term })
    };

    render() {
        const { todoData, term } = this.state;
        const visibleItem = this.search(todoData, term)
        const doneCount= todoData
            .filter((el) => el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <main className="wrapper">
                <section className="section">
                    <div className="section__in">
                        <div className="todo_list_wrap">
                            <AppHeader toDo={ todoCount }
                                       done={ doneCount }
                                       searchItem={ this.searchItem }
                            />
                            <TodoList
                                todos={ visibleItem }
                                onDeleted={ this.deleteItem }
                                onToggleImportant={ this.onToggleImportant }
                                onToggleDone={ this.onToggleDone }
                            />
                            <AddItem onAddItem = { this.addItem }/>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));