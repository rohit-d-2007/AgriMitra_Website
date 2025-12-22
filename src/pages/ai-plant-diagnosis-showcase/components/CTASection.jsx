import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 md:w-[32rem] md:h-[32rem] bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
          <Icon name="Sparkles" size={18} />
          <span className="text-xs md:text-sm font-semibold">Start Your AI Journey</span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
          Transform Your Farming with AI
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-white/90 mb-3 max-w-3xl mx-auto">
          Join 50,000+ farmers who are already using AI to protect their crops and increase yields
        </p>

        <p className="text-sm md:text-base text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto">
          50,000+ किसान पहले से ही अपनी फसलों की रक्षा और उपज बढ़ाने के लिए एआई का उपयोग कर रहे हैं
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
          <Button
            variant="default"
            size="lg"
            iconName="Download"
            iconPosition="left"
            onClick={() => window.open('https://play.google.com', '_blank')}
            className="bg-white text-primary hover:bg-white/90"
          >
            Download App Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="Play"
            iconPosition="left"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="border-white text-white hover:bg-white/10"
          >
            Watch Demo Video
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Smartphone" size={24} color="#FFFFFF" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">Free</div>
            <div className="text-sm text-white/80">Download & Basic Features</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} color="#FFFFFF" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">Instant</div>
            <div className="text-sm text-white/80">Results in Under 3 Seconds</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Languages" size={24} color="#FFFFFF" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">12+</div>
            <div className="text-sm text-white/80">Indian Languages Supported</div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-white/20">
          <p className="text-sm md:text-base text-white/80 mb-4">
            Available on Android & iOS • Works Offline • No Credit Card Required
          </p>
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} color="#FFD700" />
              <span className="text-white font-semibold">4.8/5 Rating</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Download" size={20} color="#FFFFFF" />
              <span className="text-white font-semibold">100K+ Downloads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;