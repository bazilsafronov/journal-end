import React from 'react';
import Navbar from "./Navbar/Navbar.tsx";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
      <div>
        <Navbar />
        <main>
            {children}
        </main>
        <footer>
          <p>© 2024 Мое приложение</p>
        </footer>
      </div>
  );
};

export default Layout;
