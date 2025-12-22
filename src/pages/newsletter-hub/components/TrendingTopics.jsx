import React from 'react';
import Icon from '../../../components/AppIcon';

const TrendingTopics = ({ topics }) => {
  return (
    <div className="bg-card rounded-xl p-4 md:p-6 shadow-organic">
      <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
        <Icon name="TrendingUp" size={20} color="var(--color-accent)" />
        Trending Topics
      </h3>
      <div className="flex flex-wrap gap-2">
        {topics?.map((topic, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-medium transition-organic flex items-center gap-2"
          >
            <Icon name="Hash" size={14} />
            {topic?.name}
            <span className="text-xs opacity-70">({topic?.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;