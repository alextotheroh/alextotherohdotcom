import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapped from './AppWrapped';
import registerServiceWorker from './registerServiceWorker';
import './styles/Homepage.css';
import './styles/SiteDirectory.css';
import './styles/Portfolio.css';
import './styles/Photos.css';
import './styles/ViewSourceButton.css';
import "react-image-gallery/styles/css/image-gallery.css";

ReactDOM.render(<AppWrapped />, document.getElementById('root'));
registerServiceWorker();
