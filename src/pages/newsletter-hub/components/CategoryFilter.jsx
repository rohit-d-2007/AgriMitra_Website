import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-card rounded-xl p-4 md:p-6 shadow-organic">
      <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
        <Icon name="Filter" size={20} color="var(--color-primary)" />
        Categories
      </h3>
      <div className="space-y-2">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-organic ${
              activeCategory === category?.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80 text-foreground'
            }`}
          >
            <div className="flex items-center gap-3">
              <Icon 
                name={category?.icon} 
                size={18} 
                color={activeCategory === category?.id ? 'var(--color-primary-foreground)' : 'var(--color-primary)'} 
              />
              <div className="text-left">
                <p className="text-sm font-semibold">{category?.name}</p>
                <p className="text-xs opacity-80">{category?.nameHi}</p>
              </div>
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              activeCategory === category?.id
                ? 'bg-primary-foreground/20'
                : 'bg-primary/10 text-primary'
            }`}>
              {category?.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;