import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import FetchInfo from './components/FetchInfo/Fetch-info';
import App from './App';
// import Root from './Routes/Root';
import reportWebVitals from './reportWebVitals';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Le reste de ton code reste inchangé
reportWebVitals();
