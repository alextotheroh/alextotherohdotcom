import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage';
import registerServiceWorker from './registerServiceWorker';
import './styles/Homepage.css';

ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();
