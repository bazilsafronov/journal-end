import React from 'react';
import Image from 'next/image';

const Custom404: React.FC = () => {
    return (
        <div style={{
            position: 'relative',
            width: '750px',
            height: '752px', // Высота на весь экран
            overflow: 'hidden', // Скрыть лишнее
            backgroundColor: 'gray'
        }}>
            <Image
                src="/images/dog-error.png"
                alt="Не найдено"
                layout="fill" // Используем fill для растягивания изображения
                objectFit="cover" // Объект заполняет контейнер, сохраняя пропорции
            />
            </div>
    );
};

export default Custom404;
