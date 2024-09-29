export const slugify = (str: string) => {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '') // Убираем специальные символы
        .replace(/\s+/g, '-') // Заменяем пробелы на "-"
        .trim();
}