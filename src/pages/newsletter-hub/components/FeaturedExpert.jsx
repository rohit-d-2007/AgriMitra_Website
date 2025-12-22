import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedExpert = ({ expert }) => {
  return (
    <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 md:p-8 border-2 border-accent/20">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="Award" size={20} color="var(--color-accent)" />
        <h3 className="text-sm font-semibold text-accent">Featured Expert</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <Image
            src={expert?.image}
            alt={expert?.imageAlt}
            className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover shadow-organic"
          />
        </div>

        <div className="flex-1">
          <h4 className="text-lg md:text-xl font-heading font-bold text-foreground mb-1">
            {expert?.name}
          </h4>
          <p className="text-sm text-primary font-semibold mb-2">{expert?.designation}</p>
          <p className="text-xs text-muted-foreground mb-4">{expert?.designationHi}</p>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {expert?.bio}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {expert?.expertise?.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-background text-foreground text-xs font-medium rounded-full border border-border"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Icon name="BookOpen" size={14} />
              <span>{expert?.articles} Articles</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Users" size={14} />
              <span>{expert?.followers} Followers</span>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedExpert;