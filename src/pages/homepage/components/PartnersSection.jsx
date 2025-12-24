import React from 'react';
import Icon from '../../../components/AppIcon';

const PartnersSection = () => {
  const partners = [
    {
      name: "Ministry of Agriculture",
      nameHi: "कृषि मंत्रालय",
      type: "Government Partner",
      typeHi: "सरकारी भागीदार",
      icon: "Building2"
    },
    {
      name: "ICAR",
      nameHi: "भारतीय कृषि अनुसंधान परिषद",
      type: "Research Partner",
      typeHi: "अनुसंधान भागीदार",
      icon: "Microscope"
    },
    {
      name: "NABARD",
      nameHi: "नाबार्ड",
      type: "Financial Partner",
      typeHi: "वित्तीय भागीदार",
      icon: "Landmark"
    },
    {
      name: "State Agricultural Universities",
      nameHi: "राज्य कृषि विश्वविद्यालय",
      type: "Academic Partner",
      typeHi: "शैक्षणिक भागीदार",
      icon: "GraduationCap"
    }
  ];

  const achievements = [
    {
      icon: "Award",
      title: "Best AgriTech Innovation 2024",
      titleHi: "सर्वश्रेष्ठ एग्रीटेक नवाचार 2024",
      organization: "National Innovation Foundation"
    },
    {
      icon: "Trophy",
      title: "Digital India Award",
      titleHi: "डिजिटल इंडिया पुरस्कार",
      organization: "Ministry of Electronics & IT"
    },
    {
      icon: "Medal",
      title: "Farmer\'s Choice Award",
      titleHi: "किसान की पसंद पुरस्कार",
      organization: "Indian Farmers Association"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Handshake" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary">Trusted Partners</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Backed by Leading Organizations
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            प्रमुख संगठनों द्वारा समर्थित
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
          {partners?.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 shadow-organic hover:shadow-organic-lg transition-all duration-300 text-center border border-border"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name={partner?.icon} size={32} color="var(--color-primary)" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                {partner?.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-1">
                {partner?.nameHi}
              </p>
              <div className="inline-flex items-center space-x-1 px-3 py-1 bg-primary/5 rounded-full mt-2">
                <span className="text-xs text-primary font-medium">{partner?.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 lg:p-12">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Awards & Recognition
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              पुरस्कार और मान्यता
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {achievements?.map((achievement, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 shadow-organic text-center"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={achievement?.icon} size={28} color="var(--color-warning)" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2">
                  {achievement?.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground mb-2">
                  {achievement?.titleHi}
                </p>
                <p className="text-xs text-muted-foreground/80">
                  {achievement?.organization}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full">
            <Icon name="Shield" size={16} color="var(--color-success)" />
            <span className="text-xs md:text-sm font-medium text-success">
              Government Approved & Certified Platform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
