import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CTASection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 md:w-[32rem] md:h-[32rem] bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full mb-4 md:mb-6">
              <Icon name="Smartphone" size={16} color="#FFFFFF" />
              <span className="text-xs md:text-sm font-medium text-white">Download Now</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Start Your Smart Farming Journey Today
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-2">
              आज ही अपनी स्मार्ट खेती की यात्रा शुरू करें
            </p>
            <p className="text-sm md:text-base lg:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              Join 50,000+ farmers who are already using AI-powered insights to grow better crops, save resources, and increase their income.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8">
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={() => window.open('https://play.google.com', '_blank')}
                className="bg-white text-primary hover:bg-white/90 shadow-organic-lg">

                Download for Android
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Apple"
                iconPosition="left"
                onClick={() => window.open('https://apps.apple.com', '_blank')}
                className="border-white text-white hover:bg-white/10">

                Coming to iOS
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle2" size={20} color="#FFFFFF" />
                <span className="text-sm md:text-base text-white">Free to Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle2" size={20} color="#FFFFFF" />
                <span className="text-sm md:text-base text-white">No Credit Card</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle2" size={20} color="#FFFFFF" />
                <span className="text-sm md:text-base text-white">Offline Mode</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto">
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 md:p-6 border border-white/20">
                <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-organic-lg">
                  <Image
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_19fb2bd42-1764925883989.png"
                    alt="Modern smartphone displaying AgriMitra app interface with AI plant diagnosis feature showing healthy green crop analysis on bright screen held by farmer in agricultural field"
                    className="w-full h-full object-cover" />

                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-organic-lg p-3 md:p-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={20} color="var(--color-warning)" className="fill-current" />
                  <div>
                    <div className="text-base md:text-lg font-bold text-foreground">4.8</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-organic-lg p-3 md:p-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={20} color="var(--color-primary)" />
                  <div>
                    <div className="text-base md:text-lg font-bold text-foreground">50K+</div>
                    <div className="text-xs text-muted-foreground">Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-xs md:text-sm text-white/80">Crop Guides</div>
            <div className="text-xs text-white/60">फसल गाइड</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-xs md:text-sm text-white/80">AI Support</div>
            <div className="text-xs text-white/60">एआई सहायता</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">15+</div>
            <div className="text-xs md:text-sm text-white/80">Languages</div>
            <div className="text-xs text-white/60">भाषाएं</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">Free</div>
            <div className="text-xs md:text-sm text-white/80">Forever</div>
            <div className="text-xs text-white/60">हमेशा के लिए</div>
          </div>
        </div>
      </div>
    </section>);

};

export default CTASection;