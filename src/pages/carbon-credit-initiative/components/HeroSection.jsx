import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full">
              <Icon name="Leaf" size={20} color="var(--color-success)" />
              <span className="text-sm font-medium text-success">Sustainable Future Initiative</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Earn While You
              <span className="block text-primary mt-2">Protect Our Planet</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Join India's first blockchain-powered carbon credit program designed exclusively for farmers. Transform your sustainable farming practices into verified carbon credits and unlock new revenue streams while preserving Mother Earth.
            </p>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              हमारे ब्लॉकचेन-आधारित कार्बन क्रेडिट कार्यक्रम में शामिल हों। टिकाऊ खेती से कमाई करें और धरती माता की रक्षा करें।
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-organic">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Enroll Now
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">₹2.5L+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Avg. Annual Earnings</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-success">15K+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Enrolled Farmers</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-organic-lg">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1bb225bea-1765646429143.png"
                alt="Indian farmer in traditional white kurta standing in lush green organic farm with solar panels in background under clear blue sky"
                className="w-full h-64 md:h-80 lg:h-96 object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-organic">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="https://img.rocket.new/generatedImages/rocket_gen_img_1c29eab36-1765365896270.png"
                        alt="Smiling Indian farmer with grey beard wearing orange turban and traditional clothing"
                        className="w-full h-full object-cover" />

                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-foreground">Ramesh Kumar</div>
                      <div className="text-xs text-muted-foreground">Punjab • 25 Acres</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-success">₹3.2L</div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap">This Year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-success/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 md:w-40 md:h-40 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;