import React from 'react';
import Icon from '../../../components/AppIcon';
import { useRouter } from 'next/router';

const FeaturesSection = () => {
  const router = useRouter();

  const features = [
    {
      icon: "Scan",
      title: "AI Plant Diagnosis",
      titleHi: "एआई पौधा निदान",
      description: "Instant disease detection using advanced computer vision and machine learning algorithms trained on millions of crop images",
      descriptionHi: "लाखों फसल छवियों पर प्रशिक्षित उन्नत कंप्यूटर विज़न का उपयोग करके तत्काल रोग का पता लगाना",
      color: "var(--color-primary)",
      bgColor: "bg-primary/10",
      path: "/ai-plant-diagnosis-showcase"
    },
    {
      icon: "CloudRain",
      title: "Weather Intelligence",
      titleHi: "मौसम बुद्धिमत्ता",
      description: "Hyperlocal weather forecasts with agricultural alerts for rainfall, temperature, and humidity patterns",
      descriptionHi: "वर्षा, तापमान और आर्द्रता पैटर्न के लिए कृषि अलर्ट के साथ स्थानीय मौसम पूर्वानुमान",
      color: "var(--color-accent)",
      bgColor: "bg-accent/10",
      path: "/live-updates"
    },
    {
      icon: "BookOpen",
      title: "Crop Knowledge Hub",
      titleHi: "फसल ज्ञान केंद्र",
      description: "Comprehensive cultivation practices for 100+ crops with region-specific guidance and seasonal recommendations",
      descriptionHi: "क्षेत्र-विशिष्ट मार्गदर्शन के साथ 100+ फसलों के लिए व्यापक खेती प्रथाएं",
      color: "var(--color-success)",
      bgColor: "bg-success/10",
      path: "/crop-detail-pages"
    },
    {
      icon: "Leaf",
      title: "Carbon Credits",
      titleHi: "कार्बन क्रेडिट",
      description: "Earn rewards for sustainable farming practices while contributing to environmental conservation",
      descriptionHi: "पर्यावरण संरक्षण में योगदान करते हुए टिकाऊ खेती प्रथाओं के लिए पुरस्कार अर्जित करें",
      color: "var(--color-primary)",
      bgColor: "bg-primary/10",
      path: "/carbon-credit-initiative"
    },
    {
      icon: "Bell",
      title: "Government Schemes",
      titleHi: "सरकारी योजनाएं",
      description: "Real-time updates on agricultural subsidies, loans, and welfare programs from central and state governments",
      descriptionHi: "केंद्र और राज्य सरकारों से कृषि सब्सिडी, ऋण और कल्याण कार्यक्रमों पर वास्तविक समय अपडेट",
      color: "var(--color-warning)",
      bgColor: "bg-warning/10",
      path: "/live-updates"
    },
    {
      icon: "Users",
      title: "Farmer Community",
      titleHi: "किसान समुदाय",
      description: "Connect with fellow farmers, share experiences, and learn from agricultural experts across India",
      descriptionHi: "साथी किसानों से जुड़ें, अनुभव साझा करें और भारत भर के कृषि विशेषज्ञों से सीखें",
      color: "var(--color-accent)",
      bgColor: "bg-accent/10",
      path: "/newsletter-hub"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Zap" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Everything You Need for Smart Farming
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            स्मार्ट खेती के लिए आपको जो कुछ भी चाहिए
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features?.map((feature, index) => (
            <div
              key={index}
              onClick={() => router.push(feature?.path)}
              className="group relative bg-card rounded-xl p-6 md:p-8 shadow-organic hover:shadow-organic-lg transition-all duration-300 cursor-pointer border border-border hover:border-primary/30"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl ${feature?.bgColor} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={feature?.icon} size={24} color={feature?.color} />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                {feature?.title}
              </h3>
              <p className="text-sm md:text-base text-primary/80 mb-3 md:mb-4">
                {feature?.titleHi}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2">
                {feature?.description}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed">
                {feature?.descriptionHi}
              </p>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="ArrowRight" size={20} color="var(--color-primary)" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;