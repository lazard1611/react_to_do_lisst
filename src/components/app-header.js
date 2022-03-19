import React, { Component } from 'react';

import SearchPanel from "./search-panel";

export default class AppHeader extends Component {

    render() {
        const { toDo, done, searchItem, filter, onFilterChange } = this.props

        const headButton = [
            {
                label: 'All',
                name: 'all'
            },
            {
                label: 'Active',
                name: 'active'
            },
            {
                label: 'Done',
                name: 'done'
            },
        ]

        const btn = headButton.map(({ label, name }) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn_base--active' : ''
            return (
                <li className= "list_btn__item" key={ name }>
                    <button type="button"
                            className={`btn_base ${clazz}`}
                            onClick={() => onFilterChange(name)}
                    >{ label }</button>
                </li>
            );
        });

        return (
            <div className= "head">
                <h1 className="head__title">To do list</h1>
                <div className="head__descrip">{toDo} more to do, { done } done</div>
                <div className= "head__enter">
                    <SearchPanel searchItem={ searchItem }/>
                    <div className="head__enter_list">
                        <ul className= "list_btn">
                            { btn }
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
};
