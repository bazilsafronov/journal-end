// pages/index.tsx
import React from 'react';
import UserList from "../views/UserList.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <h1>Добро пожаловать на главную страницу!</h1>
            <UserList />
        </div>
    );
};

export default Home;
