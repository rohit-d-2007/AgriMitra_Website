import React from 'react';
import Icon from '../../../components/AppIcon';

const AccuracyMetrics = () => {
  const metrics = [
    {
      icon: "Target",
      value: "95.3%",
      label: "Overall Accuracy",
      labelHi: "कुल सटीकता",
      description: "Across 200+ disease types",
      color: "success"
    },
    {
      icon: "Users",
      value: "4.8/5",
      label: "Farmer Satisfaction",
      labelHi: "किसान संतुष्टि",
      description: "Based on 50,000+ reviews",
      color: "primary"
    },
    {
      icon: "Clock",
      value: "&lt;3 sec",
      label: "Average Response Time",
      labelHi: "औसत प्रतिक्रिया समय",
      description: "From photo to diagnosis",
      color: "accent"
    },
    {
      icon: "TrendingUp",
      value: "87%",
      label: "Treatment Success Rate",
      labelHi: "उपचार सफलता दर",
      description: "When followed correctly",
      color: "success"
    }
  ];

  const detailedStats = [
    {
      category: "Crop Coverage",
      categoryHi: "फसल कवरेज",
      stats: [
        { label: "Wheat & Rice", value: "98% accuracy", icon: "Wheat" },
        { label: "Cotton & Sugarcane", value: "96% accuracy", icon: "Leaf" },
        { label: "Vegetables", value: "94% accuracy", icon: "Carrot" },
        { label: "Fruits", value: "93% accuracy", icon: "Apple" }
      ]
    },
    {
      category: "Disease Types",
      categoryHi: "रोग प्रकार",
      stats: [
        { label: "Fungal Diseases", value: "97% accuracy", icon: "Bug" },
        { label: "Bacterial Infections", value: "94% accuracy", icon: "Droplet" },
        { label: "Viral Diseases", value: "92% accuracy", icon: "Activity" },
        { label: "Nutrient Deficiency", value: "91% accuracy", icon: "Beaker" }
      ]
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full mb-4">
            <Icon name="BarChart3" size={18} />
            <span className="text-xs md:text-sm font-semibold">Proven Performance</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            AI Accuracy You Can Trust
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparent reporting of diagnostic accuracy backed by real farmer data and expert validation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {metrics?.map((metric, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 md:p-6 shadow-organic hover:shadow-organic-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 ${
                metric?.color === 'success' ? 'bg-success/10' :
                metric?.color === 'primary'? 'bg-primary/10' : 'bg-accent/10'
              }`}>
                <Icon
                  name={metric?.icon}
                  size={24}
                  color={
                    metric?.color === 'success' ? 'var(--color-success)' :
                    metric?.color === 'primary' ? 'var(--color-primary)' :
                    'var(--color-accent)'
                  }
                />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-2" dangerouslySetInnerHTML={{ __html: metric?.value }}></div>
              <div className="text-sm md:text-base font-semibold text-foreground mb-1">
                {metric?.label}
              </div>
              <div className="text-xs text-muted-foreground mb-2">
                {metric?.labelHi}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric?.description}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {detailedStats?.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-card rounded-xl p-4 md:p-6 shadow-organic">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                {section?.category}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {section?.categoryHi}
              </p>
              <div className="space-y-4">
                {section?.stats?.map((stat, statIndex) => (
                  <div key={statIndex} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={stat?.icon} size={20} color="var(--color-primary)" />
                      </div>
                      <span className="text-sm md:text-base text-foreground font-medium">
                        {stat?.label}
                      </span>
                    </div>
                    <span className="text-sm md:text-base font-semibold text-success">
                      {stat?.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 md:p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Award" size={24} color="var(--color-primary)" />
            <h3 className="text-lg md:text-xl font-bold text-foreground">
              Validated by Agricultural Experts
            </h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Our AI diagnostic system has been validated by leading agricultural scientists from ICAR, state agricultural universities, and field experts across India. Regular audits ensure continued accuracy and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccuracyMetrics;