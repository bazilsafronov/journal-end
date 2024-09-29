import connect from '../utils/db';
import mongoose from 'mongoose';
import { Article } from "../types/article.ts";
import { slugify } from "../utils/slugify.ts";

const articlesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: false, default: null },
    slug: { type: String, required: true, unique: true }, // Добавляем поле slug
});

const Articles = mongoose.models.Articles || mongoose.model('Articles', articlesSchema);

// Получение всех статей
export const getArticles = async () => {
    await connect();
    return Articles.find({});
}

// Получение статьи по slug
export const getArticleBySlug = async (slug: string) => {
    await connect();
    return Articles.findOne({ slug });
}

// Добавление новой статьи
export const addArticle = async (article: Article) => {
    await connect();
    const newArticle = new Articles({
        ...article,
        slug: slugify(article.title), // Генерируем slug при создании статьи
    });

    try {
        await newArticle.save();
        return newArticle;
    } catch (error) {
        console.error('Ошибка при сохранении статьи:', error.message);
        throw error;
    }
}
