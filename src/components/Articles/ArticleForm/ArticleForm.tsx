import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { slugify } from '../../../utils/slugify'
import styles from './ArticleForm.module.sass'

const ArticleForm: React.FC = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [tag, setTag] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const article = {
            title,
            content,
            imageUrl: image,
            tag,
            author,
            slug: slugify(title)
        }

        try {
            const response = await fetch('/api/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(article)
            })

            if (response.ok) {
                await response.json()
                toast.success('Статья успешно добавлена!', {
                    position: 'top-right',
                    autoClose: 4000
                })
                setTitle('')
                setContent('')
                setImage('')
                setTag('')
                setAuthor('')
            } else {
                toast.error('Ошибка при добавлении статьи!', {
                    position: 'top-right',
                    autoClose: 4000
                })
            }
        } catch (error) {
            toast.error('Ошибка сети при добавлении статьи!', {
                position: 'top-right',
                autoClose: 4000
            })
        }
    }

    return (
        <>
            <form className={styles.articleForm} onSubmit={handleSubmit}>
                <h2>Добавить статью</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="URL Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Type tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <button type="submit">Создать новую статью</button>
            </form>
            <ToastContainer/>
        </>
    )
}

export default ArticleForm
