import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PhoneConfirmation from './components/PhoneConfirmation';
import CodeConfirm from './components/CodeConfirm';
import AllowNotification from './components/AllowNotification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/invite" element={<PhoneConfirmation />} />
        <Route path="/code_confirm" element={<CodeConfirm />} />
        <Route path="/allow_notification" element={<AllowNotification />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
