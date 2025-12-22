import React from 'react';
import Icon from '../../../components/AppIcon';


const PartnershipSection = () => {
  const partnerTypes = [
    {
      icon: "Building2",
      title: "Corporate Buyers",
      titleHi: "कॉर्पोरेट खरीदार",
      description: "Purchase verified carbon credits to meet your ESG goals and carbon neutrality targets",
      benefits: [
        "Verified carbon offset certificates",
        "Direct farmer impact tracking",
        "Blockchain-verified transactions",
        "CSR compliance documentation"
      ],
      cta: "Become a Buyer"
    },
    {
      icon: "Handshake",
      title: "Government Partners",
      titleHi: "सरकारी भागीदार",
      description: "Collaborate with us to promote sustainable farming and climate action initiatives",
      benefits: [
        "Farmer welfare programs",
        "Climate policy implementation",
        "Rural development support",
        "Agricultural sustainability"
      ],
      cta: "Partner with Us"
    },
    {
      icon: "GraduationCap",
      title: "Research Institutions",
      titleHi: "अनुसंधान संस्थान",
      description: "Access real-world data and collaborate on agricultural sustainability research",
      benefits: [
        "Field data access",
        "Farmer network collaboration",
        "Technology validation",
        "Research publication support"
      ],
      cta: "Collaborate"
    }
  ];

  const corporatePartners = [
    {
      name: "TechCorp India",
      logo: "https://via.placeholder.com/120x60/2D5016/FFFFFF?text=TechCorp",
      logoAlt: "TechCorp India company logo with green leaf symbol and modern typography on white background",
      credits: "25,000",
      commitment: "Carbon Neutral by 2030"
    },
    {
      name: "GreenEnergy Ltd",
      logo: "https://via.placeholder.com/120x60/16A34A/FFFFFF?text=GreenEnergy",
      logoAlt: "GreenEnergy Ltd company logo featuring wind turbine icon and bold green text on white background",
      credits: "18,500",
      commitment: "Net Zero Operations"
    },
    {
      name: "EcoManufacturing",
      logo: "https://via.placeholder.com/120x60/8B4513/FFFFFF?text=EcoMfg",
      logoAlt: "EcoManufacturing company logo with circular economy symbol and brown earth tone colors on white background",
      credits: "32,000",
      commitment: "Sustainable Supply Chain"
    },
    {
      name: "CleanTech Solutions",
      logo: "https://via.placeholder.com/120x60/2D5016/FFFFFF?text=CleanTech",
      logoAlt: "CleanTech Solutions company logo displaying technology circuit pattern and green innovation theme on white background",
      credits: "21,200",
      commitment: "Climate Positive 2025"
    }
  ];

  const benefits = [
    {
      icon: "Target",
      title: "Meet ESG Goals",
      description: "Achieve environmental, social, and governance targets with verified carbon offsets"
    },
    {
      icon: "TrendingUp",
      title: "Direct Impact",
      description: "Support Indian farmers directly while reducing your carbon footprint"
    },
    {
      icon: "Shield",
      title: "Verified Credits",
      description: "Blockchain-verified carbon credits meeting international standards"
    },
    {
      icon: "Award",
      title: "Brand Value",
      description: "Enhance corporate reputation through genuine sustainability initiatives"
    }
  ];

  return (
    <section className="bg-muted py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Icon name="Users" size={18} color="var(--color-accent)" />
            <span className="text-sm font-medium text-accent">Partnership Opportunities</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Join Our Sustainability Ecosystem
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Partner with AgriMitra to drive climate action and support sustainable farming practices across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {partnerTypes?.map((partner) => (
            <div
              key={partner?.title}
              className="bg-card rounded-xl p-6 md:p-8 shadow-organic hover:shadow-organic-lg transition-all duration-300 border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name={partner?.icon} size={28} color="var(--color-primary)" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{partner?.title}</h3>
              <p className="text-sm text-accent font-medium mb-4">{partner?.titleHi}</p>
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                {partner?.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {partner?.benefits?.map((benefit) => (
                  <div key={benefit} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={18} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300">
                <Icon name="ArrowRight" size={18} className="mr-2" />
                {partner?.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">
            Our Corporate Partners
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporatePartners?.map((partner) => (
              <div
                key={partner?.name}
                className="bg-card rounded-xl p-6 shadow-organic hover:shadow-organic-lg transition-all duration-300 border border-border"
              >
                <div className="flex items-center justify-center h-16 mb-4 bg-muted rounded-lg">
                  <img
                    src={partner?.logo}
                    alt={partner?.logoAlt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <h4 className="text-base font-bold text-foreground text-center mb-3">{partner?.name}</h4>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Credits Purchased</span>
                    <span className="font-semibold text-primary">{partner?.credits}</span>
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Icon name="Target" size={16} color="var(--color-success)" />
                      <span className="text-xs text-muted-foreground">{partner?.commitment}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 md:p-12 shadow-organic">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">
            Why Partner with AgriMitra?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
            {benefits?.map((benefit) => (
              <div key={benefit?.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit?.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2">{benefit?.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit?.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-organic">
              <Icon name="Mail" size={20} className="mr-2" />
              Request Partnership Information
            </button>
          </div>
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-br from-success/10 via-primary/10 to-accent/10 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Ready to Make an Impact?
              </h4>
              <p className="text-sm md:text-base text-muted-foreground">
                Contact our partnership team to explore collaboration opportunities and drive sustainable change together
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300 whitespace-nowrap">
                <Icon name="Phone" size={18} className="mr-2" />
                Call Us
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 whitespace-nowrap">
                <Icon name="Mail" size={18} className="mr-2" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;