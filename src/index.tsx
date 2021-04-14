import React from 'react';
import ReactDOM from 'react-dom';

const reactApp = document.querySelector('#react-app');

const App = () => (
    <div>Hello, World!</div>
);

ReactDOM.render(App(), reactApp)
