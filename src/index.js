import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App'; // Assuming App is the root component of your application
import './App.css'

// Wrap the rendering with createRoot instead of ReactDOM.render
// Note: The second argument is optional and can be used for callback function or options
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);




