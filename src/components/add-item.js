import React, { Component } from 'react';

export default class AddItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="add_item"
                  onSubmit={this.onSubmit}>
                <label className="add_item__in">
                    <input type="text"
                           className="add_item__input"
                           onChange={ this.onLabelChange }
                           placeholder="What need to be done"
                           value={this.state.label}
                    />
                </label>
                <div className="add_item__btn_wrap">
                    <button type="submit" className="add_item__btn">add item</button>
                </div>
            </form>
        );
    }
}

