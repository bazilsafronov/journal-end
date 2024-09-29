import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './styles/globals.sass';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
      <Router>
      <div>
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <footer>
          <p>© 2024 Мое приложение</p>
        </footer>
      </div>
      </Router>
  );
};

export default App;
