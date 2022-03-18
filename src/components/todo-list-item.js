import React, { Component } from 'react';
import MainButton from "./main-button";
import Icon from "./icon";

export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

        let classItem = "todo_list__title";
        if (done) {
            classItem += ' todo_list__title--done'
        }
        if (important) {
            classItem += ' todo_list__title--important'
        }

        return (
            <div className= 'todo_list__item_in' >
                <span className= {classItem} onClick= { onToggleDone }> { label } </span>
                <div className="icon_btn_wrap">
                    <div onClick= { onToggleImportant } className="icon_btn icon_btn--main">
                        <MainButton props = <Icon icon = 'main'/> />
                    </div>
                    <div className="icon_btn icon_btn--delete" onClick= { onDeleted }>
                        <MainButton props = <Icon icon = 'delete'/> />
                    </div>
                </div>
            </div>
        )
    }
}