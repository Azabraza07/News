export const categoryIds: { [index: string]: number } = {
  index: 0,
  sport: 2,
  technologies: 1,
  fashion: 3,
  politics: 4,
};

export const categoryNames: { [index: string]: string } = {
  index: 'Главная',
  fashion: 'Мода',
  technologies: 'Технологии',
  politics: 'Политика',
  sport: 'Спорт',
};

export const beautifyDate = (date: string): string => {
  return new Date(date).toLocaleDateString('ru-RU', {
    month: 'long',
    day: 'numeric',
  });
};
