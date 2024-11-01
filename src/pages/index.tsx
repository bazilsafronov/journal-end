import React from 'react';
import UserList from "../views/UserList.tsx";

const Home: React.FC = () => {
    return (
        <>
            <h1>Where developers
                suffer together
            </h1>
            <p>
                We know how hard it is to be a developer. It doesn’t have to be.
                Personalized news feed, dev communities and search, much better than what’s out there. Maybe ;)
            </p>
            <UserList />
        </>
    );
};

export default Home;
