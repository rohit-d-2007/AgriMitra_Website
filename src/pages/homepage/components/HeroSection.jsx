import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useRouter } from 'next/router';

const HeroSection = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
  {
    title: "AI-Powered Crop Diagnosis",
    titleHi: "एआई-संचालित फसल निदान",
    subtitle: "Identify plant diseases instantly with 95% accuracy",
    subtitleHi: "95% सटीकता के साथ पौधों की बीमारियों की तुरंत पहचान करें",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_194ad82d6-1764650746007.png",
    imageAlt: "Indian farmer in traditional white kurta examining green wheat crop in bright sunlight with smartphone in hand showing AI diagnosis interface",
    cta: "Try AI Diagnosis",
    ctaHi: "एआई निदान आज़माएं",
    ctaPath: "/ai-plant-diagnosis-showcase"
  },
  {
    title: "Weather Intelligence",
    titleHi: "मौसम की जानकारी",
    subtitle: "Hyperlocal weather forecasts for better farming decisions",
    subtitleHi: "बेहतर खेती के फैसलों के लिए स्थानीय मौसम पूर्वानुमान",
    image: "https://images.unsplash.com/photo-1606047116766-cb8d99ef8cb0",
    imageAlt: "Vast green agricultural field under dramatic cloudy sky with rain approaching, farmer checking weather app on mobile device in foreground",
    cta: "View Weather Updates",
    ctaHi: "मौसम अपडेट देखें",
    ctaPath: "/live-updates"
  },
  {
    title: "Sustainable Farming",
    titleHi: "टिकाऊ खेती",
    subtitle: "Earn carbon credits while protecting the environment",
    subtitleHi: "पर्यावरण की रक्षा करते हुए कार्बन क्रेडिट अर्जित करें",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10478fc29-1764745289771.png",
    imageAlt: "Lush green organic farm with solar panels and wind turbines in background, farmer planting seedlings in rich brown soil with sustainable farming tools",
    cta: "Learn About Carbon Credits",
    ctaHi: "कार्बन क्रेडिट के बारे में जानें",
    ctaPath: "/carbon-credit-initiative"
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left space-y-4 md:space-y-6 lg:space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full">
              <Icon name="Sparkles" size={16} color="var(--color-primary)" />
              <span className="text-xs md:text-sm font-medium text-primary">Smart Kheti. Digital Sathi</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              {heroSlides?.[currentSlide]?.title}
              <span className="block text-primary mt-2">{heroSlides?.[currentSlide]?.titleHi}</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              {heroSlides?.[currentSlide]?.subtitle}
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              {heroSlides?.[currentSlide]?.subtitleHi}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={() => window.open('https://play.google.com', '_blank')}
                className="shadow-organic-lg">

                Download App
              </Button>
              <Button
                variant="outline"
                size="lg"
                color="green"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => router.push(heroSlides?.[currentSlide]?.ctaPath)}>

                {heroSlides?.[currentSlide]?.cta}
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">50K+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Active Farmers</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">95%</div>
                <div className="text-xs md:text-sm text-muted-foreground">AI Accuracy</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">1M+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Diagnoses</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-organic-lg">
              <Image
                src={heroSlides?.[currentSlide]?.image}
                alt={heroSlides?.[currentSlide]?.imageAlt}
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-card rounded-xl shadow-organic-lg p-3 md:p-4 lg:p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-success/10 flex items-center justify-center">
                  <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                </div>
                <div>
                  <div className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">98.5%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              {heroSlides?.map((_, index) =>
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-primary' : 'bg-muted-foreground/30'}`
                }
                aria-label={`Go to slide ${index + 1}`} />

              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
