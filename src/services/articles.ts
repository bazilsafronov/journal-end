import connect from '../utils/db';
import mongoose from 'mongoose';
import { Article } from "../types/article.ts";
import { slugify } from "../utils/slugify.ts";

const articlesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tag: { type: String, required: true },
    imageUrl: { type: String, required: false, default: null },
    author: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
});

const Articles = mongoose.models.Articles || mongoose.model('Articles', articlesSchema);


export const getArticles = async () => {
    await connect();
    return Articles.find({});
}


export const getArticleBySlug = async (slug: string) => {
    await connect();
    return Articles.findOne({ slug });
}

export const addArticle = async (article: Article) => {
    await connect();
    const newArticle = new Articles({
        ...article,
        slug: slugify(article.title),
    });

    try {
        await newArticle.save();
        return newArticle;
    } catch (error) {
        console.error('Ошибка при сохранении статьи:', error.message);
        throw error;
    }
}
