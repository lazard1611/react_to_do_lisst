import React, { Component } from 'react';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };

    searchItem = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.searchItem(term);
    };

    render() {
        const searchText = 'Type here to search';

        return (
            <div className='search'>
                <label className='search__in'>
                    <input className='search__input'
                           type="text"
                           placeholder={searchText}
                           onChange={this.searchItem}
                           value={this.state.term}
                    />
                </label>
            </div>
        );
    };
}
