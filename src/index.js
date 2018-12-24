import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapped from './AppWrapped';
import registerServiceWorker from './registerServiceWorker';
import './styles/Homepage.css';
import './styles/SiteDirectory.css';
import './styles/Portfolio.css';
import './styles/Bruno.css';
import './styles/ViewSourceButton.css';

ReactDOM.render(<AppWrapped />, document.getElementById('root'));
registerServiceWorker();
