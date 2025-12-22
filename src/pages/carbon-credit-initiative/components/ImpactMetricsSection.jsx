import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactMetricsSection = () => {
  const metrics = [
  {
    icon: "Users",
    value: "15,247",
    label: "Enrolled Farmers",
    labelHi: "पंजीकृत किसान",
    growth: "+23%",
    color: "primary"
  },
  {
    icon: "MapPin",
    value: "2.8L",
    label: "Acres Under Program",
    labelHi: "कार्यक्रम के तहत एकड़",
    growth: "+31%",
    color: "success"
  },
  {
    icon: "Award",
    value: "1.2M",
    label: "Carbon Credits Issued",
    labelHi: "जारी कार्बन क्रेडिट",
    growth: "+45%",
    color: "accent"
  },
  {
    icon: "IndianRupee",
    value: "₹42.5Cr",
    label: "Paid to Farmers",
    labelHi: "किसानों को भुगतान",
    growth: "+38%",
    color: "primary"
  },
  {
    icon: "Leaf",
    value: "1.2M",
    label: "Tonnes CO₂ Reduced",
    labelHi: "टन CO₂ कम किया",
    growth: "+45%",
    color: "success"
  },
  {
    icon: "Globe",
    value: "18",
    label: "States Covered",
    labelHi: "राज्य शामिल",
    growth: "+3",
    color: "accent"
  }];


  const impactStories = [
  {
    image: "https://images.unsplash.com/photo-1627475320102-d73fcb4eb427",
    imageAlt: "Elderly Indian farmer with white turban and grey beard smiling while standing in green wheat field under bright sunlight",
    name: "Ramesh Kumar",
    location: "Punjab",
    landSize: "25 Acres",
    earnings: "₹3.2L",
    quote: "Carbon credits have given me a new source of income while helping me farm sustainably. My soil quality has improved significantly.",
    quoteHi: "कार्बन क्रेडिट ने मुझे टिकाऊ खेती करते हुए आय का एक नया स्रोत दिया है।"
  },
  {
    image: "https://images.unsplash.com/photo-1709207516801-c8cd368ca089",
    imageAlt: "Young Indian woman farmer in yellow saree and red bindi smiling confidently while holding farming tools in organic vegetable farm",
    name: "Sunita Devi",
    location: "Haryana",
    landSize: "18 Acres",
    earnings: "₹2.8L",
    quote: "The blockchain verification gives me confidence that my efforts are properly recognized. The payments are always on time.",
    quoteHi: "ब्लॉकचेन सत्यापन मुझे विश्वास दिलाता है कि मेरे प्रयासों को ठीक से मान्यता दी जाती है।"
  },
  {
    image: "https://images.unsplash.com/photo-1599496675693-5e4741b3d6e8",
    imageAlt: "Middle-aged Indian farmer in traditional white kurta standing proudly in lush green rice paddy field with mountains in background",
    name: "Mohan Reddy",
    location: "Telangana",
    landSize: "32 Acres",
    earnings: "₹4.1L",
    quote: "I\'ve reduced chemical usage by 60% and my carbon credit earnings more than compensate for the transition costs.",
    quoteHi: "मैंने रासायनिक उपयोग में 60% की कमी की है और मेरी कार्बन क्रेडिट कमाई संक्रमण लागत की भरपाई करती है।"
  }];


  const getColorClasses = (color) => {
    const colors = {
      primary: "bg-primary/10 text-primary",
      success: "bg-success/10 text-success",
      accent: "bg-accent/10 text-accent"
    };
    return colors?.[color] || colors?.primary;
  };

  return (
    <section className="bg-muted py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full mb-4">
            <Icon name="TrendingUp" size={18} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">Real Impact</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Measurable Environmental Impact
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Track the collective impact of our farming community on climate change and sustainable agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {metrics?.map((metric) =>
          <div
            key={metric?.label}
            className="bg-card rounded-xl p-6 md:p-8 shadow-organic hover:shadow-organic-lg transition-all duration-300 border border-border">

              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg ${getColorClasses(metric?.color)} flex items-center justify-center`}>
                  <Icon name={metric?.icon} size={24} />
                </div>
                <div className="px-3 py-1 bg-success/10 rounded-full">
                  <span className="text-xs font-semibold text-success">{metric?.growth}</span>
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{metric?.value}</div>
              <div className="text-sm md:text-base font-medium text-foreground mb-1">{metric?.label}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{metric?.labelHi}</div>
            </div>
          )}
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">
            Success Stories from Our Farmers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {impactStories?.map((story) =>
            <div
              key={story?.name}
              className="bg-card rounded-xl overflow-hidden shadow-organic hover:shadow-organic-lg transition-all duration-300 border border-border">

                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                  src={story?.image}
                  alt={story?.imageAlt}
                  className="w-full h-full object-cover" />

                  <div className="absolute top-4 right-4 px-3 py-1 bg-success text-success-foreground rounded-full">
                    <span className="text-xs font-semibold">{story?.earnings}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{story?.name}</h4>
                      <div className="text-sm text-muted-foreground">{story?.location} • {story?.landSize}</div>
                    </div>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <Icon name="Quote" size={20} color="var(--color-primary)" className="mb-2" />
                    <p className="text-sm text-foreground leading-relaxed mb-2">{story?.quote}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{story?.quoteHi}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-success/10 to-accent/10 rounded-xl p-8 md:p-12 text-center">
          <Icon name="Award" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Join the Sustainability Revolution
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Be part of India's largest farmer-led carbon credit initiative and contribute to a sustainable future while earning additional income
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-organic">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Enroll Your Farm
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300">
              <Icon name="Download" size={20} className="mr-2" />
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default ImpactMetricsSection;