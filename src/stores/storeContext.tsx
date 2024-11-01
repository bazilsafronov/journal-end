// StoreContext.tsx
import React from 'react';
import userStore from './UserStore'; // Убедитесь, что путь правильный

const StoreContext = React.createContext(userStore);

interface StoreProviderProps {
    children: React.ReactNode; // Добавляем тип для children
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    return (
        <StoreContext.Provider value={userStore}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => React.useContext(StoreContext);
