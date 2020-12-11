import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { globalStore, globalStoreContext } from './store/GlobalStore';

ReactDOM.render(
    <globalStoreContext.Provider value={globalStore}>
        <App />
    </globalStoreContext.Provider>,
    document.getElementById('root')
);