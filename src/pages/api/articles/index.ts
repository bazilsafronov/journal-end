import type { NextApiRequest, NextApiResponse } from 'next';
import { getArticles, addArticle } from '../../../services/articles.ts';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const articles = await getArticles();
            console.log('Статьи из базы данных:', articles); // Лог для проверки
            res.status(200).json(articles);
        } catch (error) {
            console.error('Ошибка при загрузке статей:', error.message);
            res.status(500).json({ message: 'Ошибка сервера' });
        }
    } else if (req.method === 'POST') {
        try {
            const articleData = req.body;
            const newArticle = await addArticle(articleData);
            res.status(201).json(newArticle);
        } catch (error) {
            console.error('Ошибка при создании статьи:', error.message);
            res.status(500).json({ message: 'Ошибка сервера', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Метод ${req.method} не разрешен`);
    }
}

