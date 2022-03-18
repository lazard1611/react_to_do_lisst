// import React, { Component } from 'react';
import React from 'react';

import TodoListItem from "./todo-list-item";
// import AddItem from "./add-item";

// export default class TodoList extends Component {
//     // addItem = (text) => {
//     //     console.log('Add', text);
//     // }
//
//     render() {
//
//         const elements = todos.map((item) => {
//             // const { id, ...itemProps } = item;
//
//             return (
//                 <li className="todo_list__item">
//                     <TodoListItem
//                         label = { item.label }
//                         important = { item.important }
//                         id = { item.id }
//                     />
//                 </li>
//             );
//         })
//
//         return (
//             <div>
//                 <ul className="todo_list">
//                     { elements }
//                 </ul>
//                 {/*<AddItem onAddItem = { this.addItem }/>*/}
//             </div>
//         )
//     }
// }

const TodoList = ({ onDeleted, todos, onToggleImportant, onToggleDone }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li className="todo_list__item" key={id}>
                <TodoListItem
                    {...itemProps}
                    onDeleted={ () => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );
    })

    return (
        <div>
            <ul className="todo_list">
                { elements }
            </ul>
        </div>
    )
}

export default TodoList;
