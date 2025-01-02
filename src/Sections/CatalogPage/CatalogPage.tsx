import React from 'react';
import Link from 'next/link';
import styles from './CatalogPage.module.css';
import { categories } from '@/src/source';

const CatalogPage = () => {
  // Проверяем наличие категорий
  if (!categories || categories.length === 0) {
    return (
      <div className={styles.catalog}>
        <div className={styles.catalog__container}>
          <h1 className={styles.catalog__title}>Каталог</h1>
          <p>Категории загружаются...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.catalog}>
      <div className={styles.catalog__container}>
        <h1 className={styles.catalog__title}>Каталог</h1>
        
        <div className={styles.catalog__grid}>
          {categories.map((category, index) => (
            <Link 
              href={`/category/${category.id}`} 
              key={index}
              className={styles.catalog__item}
            >
              <div className={styles.catalog__item_image_container}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className={styles.catalog__item_image}
                />
              </div>
              <div className={styles.catalog__item_content}>
                <h2 className={styles.catalog__item_title}>{category.name}</h2>
                <p className={styles.catalog__item_count}>
                  {category.subcategories.length} {getSubcategoriesText(category.subcategories.length)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Функция для правильного склонения слова "подкатегория"
const getSubcategoriesText = (count: number): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  const titles = ['подкатегория', 'подкатегории', 'подкатегорий'];
  return titles[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[(count % 10 < 5) ? count % 10 : 5]];
};

export default CatalogPage; 