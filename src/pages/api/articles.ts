import type { NextApiRequest, NextApiResponse } from 'next';
import {addArticle, getArticles} from "../../services/articles.ts";
import { Article } from "../../types/article.ts";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const articles = await getArticles();
            res.status(200).json(articles);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else if (req.method === 'POST') {
        try {
            const articleData: Article = req.body;
            const newArticle = await addArticle(articleData);
            res.status(201).json(newArticle);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
