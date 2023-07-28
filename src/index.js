import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './context/navigation';
import { store } from './store';
import { Provider } from 'react-redux';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <Provider store={store}>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </Provider>
);