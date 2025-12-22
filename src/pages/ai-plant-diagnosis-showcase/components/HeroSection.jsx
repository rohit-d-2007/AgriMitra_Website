import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onTryDemo }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full mb-4 md:mb-6">
              <Icon name="Sparkles" size={18} />
              <span className="text-xs md:text-sm font-semibold">AI-Powered Plant Health</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Diagnose Crop Diseases in <span className="text-primary">Seconds</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              Advanced AI technology that identifies plant diseases with 95% accuracy. Simply snap a photo and get instant diagnosis with treatment recommendations in your language.
            </p>

            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              एआई तकनीक से फसल रोगों की पहचान सेकंडों में। बस एक फोटो लें और अपनी भाषा में तुरंत निदान और उपचार प्राप्त करें।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                iconName="Camera"
                iconPosition="left"
                onClick={onTryDemo}>

                Try Live Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={() => window.open('https://play.google.com', '_blank')}>

                Download App
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">95%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">50K+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Diagnoses Daily</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">200+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Diseases Detected</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-organic-lg">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_194ad82d6-1764650746007.png"
                alt="Indian farmer in traditional white kurta examining wheat crop leaves with smartphone in hand, standing in lush green agricultural field under bright sunlight"
                className="w-full h-64 md:h-80 lg:h-96 object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle2" size={24} color="var(--color-success)" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Disease Identified</div>
                    <div className="text-xs text-muted-foreground">Leaf Blight - Treatment Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;