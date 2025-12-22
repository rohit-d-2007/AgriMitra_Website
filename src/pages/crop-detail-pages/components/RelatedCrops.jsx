import React from 'react';
import { useRouter } from 'next/router';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const RelatedCrops = ({ crops }) => {
  const router = useRouter();

  const handleCropClick = (cropId) => {
    router.push(`/crop-detail-pages?crop=${cropId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-card rounded-2xl p-4 md:p-6 lg:p-8 border border-border">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 font-heading">
            Related Crops
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Similar crops you might be interested in
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {crops?.map((crop, index) => (
          <div
            key={index}
            className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
            onClick={() => handleCropClick(crop?.id)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={crop?.image}
                alt={crop?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-base md:text-lg font-semibold text-white mb-1 line-clamp-1">
                  {crop?.name}
                </h3>
                <p className="text-xs text-white/80">{crop?.nameHindi}</p>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                  {crop?.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} color="var(--color-warning)" fill="currentColor" />
                  <span className="text-xs font-medium text-foreground">{crop?.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} color="var(--color-muted-foreground)" />
                  <span className="text-xs text-muted-foreground">{crop?.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="TrendingUp" size={14} color="var(--color-success)" />
                  <span className="text-xs text-muted-foreground">{crop?.yield}</span>
                </div>
              </div>

              <button className="w-full py-2 text-sm text-primary hover:text-primary/80 transition-colors duration-300 flex items-center justify-center">
                View Details
                <Icon name="ArrowRight" size={16} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCrops;