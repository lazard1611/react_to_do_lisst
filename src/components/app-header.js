import React, { Component } from 'react';

import SearchPanel from "./search-panel";

export default class AppHeader extends Component {

    render() {
        const { toDo, done, searchItem } = this.props

        const headButton = [
            {props: 'All', id: 1},
            {props: 'Active', id: 2},
            {props: 'Done', id: 3},
        ]

        const el = headButton.map((item) => {
            return (
                <li className= "list_btn__item" key={ item.id }>
                    <button type="text" className="btn_base">{ item.props }</button>
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
                            { el }
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
};
