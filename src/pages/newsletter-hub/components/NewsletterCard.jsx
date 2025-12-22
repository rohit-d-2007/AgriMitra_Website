import React from 'react';
import { useRouter } from 'next/router';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NewsletterCard = ({ newsletter, featured = false }) => {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/newsletter-hub/${newsletter?.id}`);
  };

  return (
    <article 
      className={`bg-card rounded-xl overflow-hidden shadow-organic hover:shadow-organic-lg transition-organic ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className={`${featured ? 'lg:flex' : ''}`}>
        <div className={`relative overflow-hidden ${featured ? 'lg:w-1/2' : 'h-48 md:h-56 lg:h-64'}`}>
          <Image
            src={newsletter?.image}
            alt={newsletter?.imageAlt}
            className="w-full h-full object-cover hover:scale-105 transition-organic"
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              {newsletter?.category}
            </span>
            {newsletter?.isNew && (
              <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full flex items-center gap-1">
                <Icon name="Sparkles" size={12} />
                New
              </span>
            )}
          </div>
          <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
            <Icon name="Clock" size={14} color="var(--color-muted-foreground)" />
            <span className="text-xs text-muted-foreground">{newsletter?.readTime}</span>
          </div>
        </div>

        <div className={`p-4 md:p-6 ${featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2">
              <Image
                src={newsletter?.authorImage}
                alt={newsletter?.authorImageAlt}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">{newsletter?.author}</p>
                <p className="text-xs text-muted-foreground">{newsletter?.authorRole}</p>
              </div>
            </div>
          </div>

          <h3 className={`font-heading font-bold text-foreground mb-2 line-clamp-2 ${
            featured ? 'text-xl md:text-2xl lg:text-3xl' : 'text-base md:text-lg lg:text-xl'
          }`}>
            {newsletter?.title}
          </h3>

          <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
            {newsletter?.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Icon name="Calendar" size={16} />
                <span>{newsletter?.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Eye" size={16} />
                <span>{newsletter?.views}</span>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={handleReadMore}
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsletterCard;