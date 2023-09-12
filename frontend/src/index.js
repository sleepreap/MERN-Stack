import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <App />
      {/* need to wrap app with custom context so that the whole app can use the context 
      and it will be rendered */}
    </WorkoutsContextProvider>
  </React.StrictMode>
);

