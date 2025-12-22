import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BeforeAfterGallery = () => {
  const [activeCase, setActiveCase] = useState(0);

  const successStories = [
  {
    id: 1,
    farmer: "Ramesh Kumar",
    farmerHi: "रमेश कुमार",
    location: "Haryana",
    locationHi: "हरियाणा",
    crop: "Wheat",
    cropHi: "गेहूं",
    disease: "Leaf Rust",
    diseaseHi: "पत्ती का रतुआ",
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1abc9f58f-1764682701326.png",
    beforeImageAlt: "Wheat field showing extensive rust disease damage with orange-brown pustules covering leaves and reduced plant vigor",
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_179fca2d3-1765266099603.png",
    afterImageAlt: "Healthy wheat field with vibrant green leaves and strong stalks after successful treatment showing complete disease recovery",
    timeline: "14 days",
    yieldIncrease: "35%",
    testimonial: "AgriMitra\'s AI diagnosed the rust disease within seconds. Following the treatment plan saved my entire crop. My yield increased by 35% compared to last year.",
    testimonialHi: "एग्रीमित्र के एआई ने सेकंडों में रतुआ रोग का निदान किया। उपचार योजना का पालन करने से मेरी पूरी फसल बच गई। मेरी उपज पिछले साल की तुलना में 35% बढ़ गई।"
  },
  {
    id: 2,
    farmer: "Sunita Devi",
    farmerHi: "सुनीता देवी",
    location: "Punjab",
    locationHi: "पंजाब",
    crop: "Cotton",
    cropHi: "कपास",
    disease: "Bollworm Infestation",
    diseaseHi: "बॉलवर्म संक्रमण",
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1774df24e-1764926829870.png",
    beforeImageAlt: "Cotton plants with damaged bolls and leaves showing severe bollworm pest infestation with visible holes and wilting",
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba85d88d-1765266094729.png",
    afterImageAlt: "Healthy cotton field with pristine white cotton bolls fully opened and green leaves showing successful pest control",
    timeline: "21 days",
    yieldIncrease: "42%",
    testimonial: "The app identified bollworm early. The recommended organic treatment worked perfectly. I saved money on pesticides and got better quality cotton.",
    testimonialHi: "ऐप ने बॉलवर्म की शुरुआती पहचान की। अनुशंसित जैविक उपचार ने बिल्कुल काम किया। मैंने कीटनाशकों पर पैसे बचाए और बेहतर गुणवत्ता वाली कपास प्राप्त की।"
  },
  {
    id: 3,
    farmer: "Prakash Patil",
    farmerHi: "प्रकाश पाटिल",
    location: "Maharashtra",
    locationHi: "महाराष्ट्र",
    crop: "Tomato",
    cropHi: "टमाटर",
    disease: "Early Blight",
    diseaseHi: "अर्ली ब्लाइट",
    beforeImage: "https://img.rocket.new/generatedImages/rocket_gen_img_15b803644-1765116110692.png",
    beforeImageAlt: "Tomato plants with brown spotted leaves and yellowing foliage showing advanced early blight fungal disease symptoms",
    afterImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecbba57e-1764803974791.png",
    afterImageAlt: "Thriving tomato plants with lush green healthy leaves and red ripe tomatoes after successful disease treatment",
    timeline: "10 days",
    yieldIncrease: "48%",
    testimonial: "I was about to lose my entire tomato crop. AgriMitra\'s quick diagnosis and treatment plan turned everything around. Best investment I made.",
    testimonialHi: "मैं अपनी पूरी टमाटर की फसल खोने वाला था। एग्रीमित्र के त्वरित निदान और उपचार योजना ने सब कुछ बदल दिया। यह मेरा सबसे अच्छा निवेश था।"
  }];


  const currentStory = successStories?.[activeCase];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full mb-4">
            <Icon name="TrendingUp" size={18} />
            <span className="text-xs md:text-sm font-semibold">Real Success Stories</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transforming Farms Across India
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            See how our AI diagnosis helped farmers save their crops and increase yields
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-organic-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-error/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                Before Treatment
              </div>
              <Image
                src={currentStory?.beforeImage}
                alt={currentStory?.beforeImageAlt}
                className="w-full h-64 md:h-80 lg:h-full object-cover" />

            </div>

            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-success/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                After Treatment
              </div>
              <Image
                src={currentStory?.afterImage}
                alt={currentStory?.afterImageAlt}
                className="w-full h-64 md:h-80 lg:h-full object-cover" />

            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={24} color="var(--color-primary)" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                  {currentStory?.farmer}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {currentStory?.farmerHi} • {currentStory?.location} ({currentStory?.locationHi})
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center space-x-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    <Icon name="Wheat" size={14} />
                    <span>{currentStory?.crop}</span>
                  </span>
                  <span className="inline-flex items-center space-x-1 bg-error/10 text-error px-3 py-1 rounded-full text-xs font-semibold">
                    <Icon name="Bug" size={14} />
                    <span>{currentStory?.disease}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <Icon name="Clock" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-foreground mb-1">
                  {currentStory?.timeline}
                </div>
                <div className="text-xs text-muted-foreground">Recovery Time</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <Icon name="TrendingUp" size={24} color="var(--color-success)" className="mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-success mb-1">
                  +{currentStory?.yieldIncrease}
                </div>
                <div className="text-xs text-muted-foreground">Yield Increase</div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 md:p-6 mb-6">
              <div className="flex items-start space-x-3 mb-3">
                <Icon name="Quote" size={24} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                <p className="text-sm md:text-base text-foreground italic">
                  "{currentStory?.testimonial}"
                </p>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground pl-9">
                "{currentStory?.testimonialHi}"
              </p>
            </div>

            <div className="flex items-center justify-center space-x-2">
              {successStories?.map((story, index) =>
              <button
                key={story?.id}
                onClick={() => setActiveCase(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                activeCase === index ? 'bg-primary w-8 md:w-12' : 'bg-border'}`
                }
                aria-label={`View case ${index + 1}`} />

              )}
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Join thousands of farmers who have transformed their farming with AI diagnosis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveCase((prev) => prev > 0 ? prev - 1 : successStories?.length - 1)}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-all duration-300">

              <Icon name="ChevronLeft" size={20} />
              <span className="text-sm font-medium">Previous Story</span>
            </button>
            <button
              onClick={() => setActiveCase((prev) => prev < successStories?.length - 1 ? prev + 1 : 0)}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-all duration-300">

              <span className="text-sm font-medium">Next Story</span>
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default BeforeAfterGallery;