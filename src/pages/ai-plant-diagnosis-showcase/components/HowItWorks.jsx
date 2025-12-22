import React from 'react';
import Icon from '../../../components/AppIcon';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: "Camera",
      title: "Capture Photo",
      titleHi: "फोटो लें",
      description: "Take a clear photo of the affected plant part using your smartphone camera. Works in any lighting condition.",
      descriptionHi: "अपने स्मार्टफोन कैमरे का उपयोग करके प्रभावित पौधे के हिस्से की स्पष्ट तस्वीर लें। किसी भी प्रकाश स्थिति में काम करता है।",
      color: "primary"
    },
    {
      number: "02",
      icon: "Scan",
      title: "AI Analysis",
      titleHi: "एआई विश्लेषण",
      description: "Our advanced AI instantly analyzes the image, comparing it with millions of disease patterns in our database.",
      descriptionHi: "हमारा उन्नत एआई तुरंत छवि का विश्लेषण करता है, इसे हमारे डेटाबेस में लाखों रोग पैटर्न से तुलना करता है।",
      color: "accent"
    },
    {
      number: "03",
      icon: "FileText",
      title: "Get Diagnosis",
      titleHi: "निदान प्राप्त करें",
      description: "Receive detailed diagnosis with disease name, severity level, and confidence score within 3 seconds.",
      descriptionHi: "3 सेकंड के भीतर रोग का नाम, गंभीरता स्तर और विश्वास स्कोर के साथ विस्तृत निदान प्राप्त करें।",
      color: "success"
    },
    {
      number: "04",
      icon: "Pill",
      title: "Treatment Plan",
      titleHi: "उपचार योजना",
      description: "Get customized treatment recommendations with organic and chemical options, dosage, and application timing.",
      descriptionHi: "जैविक और रासायनिक विकल्पों, खुराक और अनुप्रयोग समय के साथ अनुकूलित उपचार सिफारिशें प्राप्त करें।",
      color: "primary"
    }
  ];

  const features = [
    {
      icon: "Zap",
      title: "Lightning Fast",
      titleHi: "बिजली की तेजी",
      description: "Results in under 3 seconds"
    },
    {
      icon: "Globe",
      title: "Works Offline",
      titleHi: "ऑफलाइन काम करता है",
      description: "No internet required after setup"
    },
    {
      icon: "Languages",
      title: "Multi-Language",
      titleHi: "बहु-भाषा",
      description: "Available in 12 Indian languages"
    },
    {
      icon: "Shield",
      title: "Expert Verified",
      titleHi: "विशेषज्ञ सत्यापित",
      description: "Validated by agricultural scientists"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="Lightbulb" size={18} />
            <span className="text-xs md:text-sm font-semibold">Simple Process</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How AI Diagnosis Works
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Four simple steps from photo to treatment plan - technology made accessible for every farmer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {steps?.map((step, index) => (
            <div key={index} className="relative">
              {index < steps?.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2 z-0"></div>
              )}
              <div className="relative bg-card rounded-xl p-6 shadow-organic hover:shadow-organic-lg transition-all duration-300 h-full">
                <div className="text-6xl md:text-7xl font-bold text-primary/10 mb-4">
                  {step?.number}
                </div>
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 ${
                  step?.color === 'primary' ? 'bg-primary/10' :
                  step?.color === 'accent'? 'bg-accent/10' : 'bg-success/10'
                }`}>
                  <Icon
                    name={step?.icon}
                    size={28}
                    color={
                      step?.color === 'primary' ? 'var(--color-primary)' :
                      step?.color === 'accent' ? 'var(--color-accent)' :
                      'var(--color-success)'
                    }
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {step?.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {step?.titleHi}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {step?.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {step?.descriptionHi}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Why Farmers Trust Our AI
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Built specifically for Indian farming conditions with features that matter
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features?.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 md:p-6 text-center hover:shadow-organic transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature?.icon} size={24} color="var(--color-primary)" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                  {feature?.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {feature?.titleHi}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {feature?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Ready to experience the power of AI diagnosis?
          </p>
          <button
            onClick={() => window.open('https://play.google.com', '_blank')}
            className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 shadow-organic hover:shadow-organic-lg"
          >
            <Icon name="Download" size={20} />
            <span className="text-sm md:text-base">Download AgriMitra App</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;