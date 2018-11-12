import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/Routes';

const App = () => <Routes />;

const div = document.createElement('div');
ReactDOM.render(<App />, div);
