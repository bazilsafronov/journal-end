import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../views/Home/Home';
import Articles from "../views/Articles/Articles.tsx";
import ArticleDetail from "../views/ArticleDetail/ArticleDetail.tsx";

const AppRoutes: React.FC = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/id" element={<ArticleDetail />} />
            </Routes>
    );
};

export default AppRoutes;