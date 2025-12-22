import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ searchQuery, onSearchChange, resultsCount }) => {
  return (
    <div className="bg-card rounded-xl p-4 md:p-6 shadow-organic">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search articles, topics, or experts..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="pr-12"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Icon name="Search" size={20} color="var(--color-muted-foreground)" />
        </div>
      </div>
      {searchQuery && (
        <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
          <Icon name="FileText" size={16} />
          Found {resultsCount} articles matching "{searchQuery}"
        </p>
      )}
    </div>
  );
};

export default SearchBar;