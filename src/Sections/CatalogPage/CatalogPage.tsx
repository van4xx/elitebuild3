import React from 'react';
import { categories } from '@/src/data/categories';
import Link from 'next/link';
import Breadcrumbs from '@/src/Components/Breadcrumbs/Breadcrumbs';
import FeaturedProducts from '@/src/Components/FeaturedProducts/FeaturedProducts';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const breadcrumbItems = [
    { label: 'Каталог' }
  ];

  return (
    <div className={styles.catalog}>
      <div className={styles.container}>
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className={styles.title}>Каталог товаров</h1>
        
        <FeaturedProducts />
        
        <div className={styles.categories}>
          {categories.map(category => (
            <div key={category.id} className={styles.category} id={`category-${category.id}`}>
              <h2 className={styles.category_title}>{category.name}</h2>
              
              <div className={styles.subcategories}>
                {category.subcategories.map(subcategory => (
                  <div key={subcategory.id} className={styles.subcategory}>
                    <Link 
                      href={`/category/${subcategory.id}`}
                      className={styles.subcategory_title}
                    >
                      {subcategory.name}
                    </Link>
                    
                    {subcategory.items && (
                      <div className={styles.items}>
                        {subcategory.items.slice(0, 5).map((item, index) => (
                          <Link
                            key={index}
                            href={`/category/${subcategory.id}/${index}`}
                            className={styles.item}
                          >
                            {item}
                          </Link>
                        ))}
                        {subcategory.items.length > 5 && (
                          <span className={styles.more_items}>
                            +{subcategory.items.length - 5} товаров
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage; 