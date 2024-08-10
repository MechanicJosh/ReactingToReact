import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Greeter from './Greeter';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <Greeter />
    </StrictMode>
);