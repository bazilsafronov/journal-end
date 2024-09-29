import connect from '../utils/db';
import mongoose from 'mongoose';
import {Article} from "../types/article.ts";

const articlesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

const Articles = mongoose.models.Articles || mongoose.model('Articles', articlesSchema);

export const getArticles = async () => {
    await connect();
    return Articles.find({});
}
export const addArticle = async (article: Article) => {
    await connect();
    const newArticle = new Articles(article);
    if (!article.imageUrl || !isValidUrl(article.imageUrl)) {
        throw new Error("Неверный URL изображения");
    }
    try {
        await newArticle.save();
        return newArticle;
    } catch (error) {
        console.error('Ошибка при сохранении статьи:', error.message);
        throw error;
    }
}

const isValidUrl = (url: string) => {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
};