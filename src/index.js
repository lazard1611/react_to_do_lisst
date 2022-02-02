import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
    return (
        <h1>Hello</h1>
    )
}

const SearhPanel = () => {

    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return (
        <input
            style={searchStyle}
            placeholder = {searchText} />
    )
}

const TodoList = () => {
    const item = ['Learn React', 'Build Awesome App'];

    return (
        <ul>
            <li>{item[0]}</li>
            <li>{item[1]}</li>
        </ul>
    )
}

const App = () => {

    return (
        <div>
            <AppHeader />
            <SearhPanel />
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));