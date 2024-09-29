import type { NextApiRequest, NextApiResponse } from 'next';
import { getArticleBySlug } from '../../../services/articles.ts'; // Убедитесь, что путь правильный

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query;

    if (req.method === 'GET') {
        if (typeof slug === 'string') { // Проверяем, что slug — это строка
            try {
                const article = await getArticleBySlug(slug); // Получаем статью по slug
                if (article) {
                    res.status(200).json(article);
                } else {
                    res.status(404).json({ message: 'Статья не найдена' });
                }
            } catch (error) {
                console.error('Ошибка при загрузке статьи:', error.message);
                res.status(500).json({ message: 'Ошибка сервера' });
            }
        } else {
            res.status(400).json({ message: 'Неверный запрос' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Метод ${req.method} не разрешен`);
    }
}
