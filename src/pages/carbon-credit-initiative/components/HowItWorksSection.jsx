import React from 'react';
import Icon from '../../../components/AppIcon';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: "UserCheck",
      title: "Register Your Farm",
      titleHi: "अपने खेत को पंजीकृत करें",
      description: "Complete a simple registration process with your farm details, land size, and current farming practices. Our team verifies your information within 48 hours.",
      descriptionHi: "अपने खेत का विवरण, भूमि का आकार और वर्तमान खेती प्रथाओं के साथ एक सरल पंजीकरण प्रक्रिया पूरी करें।",
      color: "primary"
    },
    {
      id: 2,
      icon: "Sprout",
      title: "Adopt Sustainable Practices",
      titleHi: "टिकाऊ प्रथाओं को अपनाएं",
      description: "Implement verified sustainable farming methods including organic composting, crop rotation, water conservation, and reduced chemical usage with our expert guidance.",
      descriptionHi: "हमारे विशेषज्ञ मार्गदर्शन के साथ जैविक खाद, फसल चक्र, जल संरक्षण और कम रासायनिक उपयोग सहित सत्यापित टिकाऊ खेती विधियों को लागू करें।",
      color: "success"
    },
    {
      id: 3,
      icon: "Activity",
      title: "Track Carbon Reduction",
      titleHi: "कार्बन कमी को ट्रैक करें",
      description: "Our AI-powered sensors and satellite imagery continuously monitor your farm\'s carbon sequestration. Real-time dashboard shows your environmental impact.",
      descriptionHi: "हमारे एआई-संचालित सेंसर और उपग्रह इमेजरी लगातार आपके खेत के कार्बन अवशोषण की निगरानी करते हैं।",
      color: "accent"
    },
    {
      id: 4,
      icon: "Shield",
      title: "Blockchain Verification",
      titleHi: "ब्लॉकचेन सत्यापन",
      description: "Your carbon credits are verified by international standards and recorded on blockchain for complete transparency and tamper-proof certification.",
      descriptionHi: "आपके कार्बन क्रेडिट अंतरराष्ट्रीय मानकों द्वारा सत्यापित किए जाते हैं और पूर्ण पारदर्शिता के लिए ब्लॉकचेन पर दर्ज किए जाते हैं।",
      color: "primary"
    },
    {
      id: 5,
      icon: "TrendingUp",
      title: "Earn Carbon Credits",
      titleHi: "कार्बन क्रेडिट अर्जित करें",
      description: "Receive verified carbon credits quarterly based on your farm's carbon reduction. Each credit represents 1 tonne of CO₂ equivalent reduced.",
      descriptionHi: "अपने खेत की कार्बन कमी के आधार पर त्रैमासिक सत्यापित कार्बन क्रेडिट प्राप्त करें।",
      color: "success"
    },
    {
      id: 6,
      icon: "Wallet",
      title: "Get Paid Directly",
      titleHi: "सीधे भुगतान प्राप्त करें",
      description: "Sell your credits through our marketplace to verified buyers. Payments are processed directly to your bank account within 7 working days.",
      descriptionHi: "सत्यापित खरीदारों को हमारे बाज़ार के माध्यम से अपने क्रेडिट बेचें। भुगतान 7 कार्य दिवसों के भीतर सीधे आपके बैंक खाते में संसाधित किया जाता है।",
      color: "accent"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: "bg-primary/10 text-primary",
      success: "bg-success/10 text-success",
      accent: "bg-accent/10 text-accent"
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section className="bg-background py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Zap" size={18} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Simple Process</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How Carbon Credits Work
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Six simple steps to transform your sustainable farming practices into verified income
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps?.map((step, index) => (
            <div
              key={step?.id}
              className="relative bg-card rounded-xl p-6 md:p-8 shadow-organic hover:shadow-organic-lg transition-all duration-300 border border-border"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg ${getColorClasses(step?.color)} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={step?.icon} size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">STEP {step?.id}</div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{step?.title}</h3>
                  <p className="text-xs md:text-sm text-accent font-medium mb-3">{step?.titleHi}</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2">
                    {step?.description}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed">
                    {step?.descriptionHi}
                  </p>
                </div>
              </div>

              {index < steps?.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <Icon name="ArrowRight" size={24} color="var(--color-primary)" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-success/10 rounded-lg">
            <Icon name="Clock" size={20} color="var(--color-success)" />
            <span className="text-sm md:text-base font-medium text-success">
              Average enrollment to first payment: 90-120 days
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;