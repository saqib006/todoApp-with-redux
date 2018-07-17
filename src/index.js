import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './store/index';

ReactDOM.render(<Provider store={store}><Todo /></Provider>, document.getElementById('root'));
registerServiceWorker();
