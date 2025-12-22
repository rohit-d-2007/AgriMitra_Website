import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    name: "Ramesh Kumar",
    nameHi: "रमेश कुमार",
    location: "Haryana",
    locationHi: "हरियाणा",
    crop: "Wheat Farmer",
    cropHi: "गेहूं किसान",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13ece6189-1763298625917.png",
    imageAlt: "Middle-aged Indian farmer Ramesh Kumar with warm smile wearing traditional white kurta and turban standing in golden wheat field",
    rating: 5,
    testimonial: "AgriMitra\'s AI diagnosis saved my wheat crop from rust disease. I detected the problem early and got treatment recommendations instantly. My yield increased by 30% this season!",
    testimonialHi: "एग्रीमित्र के एआई निदान ने मेरी गेहूं की फसल को रस्ट रोग से बचाया। मैंने समस्या का जल्दी पता लगाया और तुरंत उपचार की सिफारिशें प्राप्त कीं।",
    impact: "30% Yield Increase",
    impactHi: "30% उपज वृद्धि"
  },
  {
    name: "Lakshmi Devi",
    nameHi: "लक्ष्मी देवी",
    location: "Tamil Nadu",
    locationHi: "तमिलनाडु",
    crop: "Rice Farmer",
    cropHi: "धान किसान",
    image: "https://images.unsplash.com/photo-1560838944-9e0177bbc294",
    imageAlt: "Confident Indian woman farmer Lakshmi Devi in colorful saree with smartphone in hand standing in lush green rice paddy field",
    rating: 5,
    testimonial: "The weather alerts helped me plan irrigation perfectly. I saved 40% on water costs and the carbon credit program is giving me additional income. This app is a blessing!",
    testimonialHi: "मौसम अलर्ट ने मुझे सिंचाई की सही योजना बनाने में मदद की। मैंने पानी की लागत पर 40% बचत की और कार्बन क्रेडिट कार्यक्रम मुझे अतिरिक्त आय दे रहा है।",
    impact: "40% Water Savings",
    impactHi: "40% पानी की बचत"
  },
  {
    name: "Suresh Patil",
    nameHi: "सुरेश पाटिल",
    location: "Maharashtra",
    locationHi: "महाराष्ट्र",
    crop: "Cotton Farmer",
    cropHi: "कपास किसान",
    image: "https://images.unsplash.com/photo-1640753124833-bfeacf979c55",
    imageAlt: "Experienced Indian cotton farmer Suresh Patil wearing blue shirt and cap examining white cotton bolls in vast cotton field",
    rating: 5,
    testimonial: "I learned about a new government subsidy through AgriMitra that I didn't know existed. The crop cultivation guides helped me improve my farming techniques significantly.",
    testimonialHi: "मैंने एग्रीमित्र के माध्यम से एक नई सरकारी सब्सिडी के बारे में सीखा जिसके बारे में मुझे पता नहीं था। फसल खेती गाइड ने मेरी खेती तकनीकों में काफी सुधार किया।",
    impact: "Better Techniques",
    impactHi: "बेहतर तकनीक"
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials?.length]);

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Heart" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary">Farmer Success Stories</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Real Farmers, Real Results
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            असली किसान, असली परिणाम
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-organic-lg p-6 md:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src={testimonials?.[currentTestimonial]?.image}
                      alt={testimonials?.[currentTestimonial]?.imageAlt}
                      className="w-full h-full object-cover" />

                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-success rounded-full flex items-center justify-center border-4 border-card">
                    <Icon name="CheckCircle2" size={20} color="#FFFFFF" />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-3 md:mb-4">
                  {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={16} color="var(--color-warning)" className="fill-current" />
                  )}
                </div>

                <blockquote className="text-base md:text-lg lg:text-xl text-foreground mb-3 md:mb-4 leading-relaxed">
                  "{testimonials?.[currentTestimonial]?.testimonial}"
                </blockquote>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  "{testimonials?.[currentTestimonial]?.testimonialHi}"
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <div>
                    <div className="font-bold text-foreground text-base md:text-lg">
                      {testimonials?.[currentTestimonial]?.name}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {testimonials?.[currentTestimonial]?.nameHi}
                    </div>
                    <div className="text-xs md:text-sm text-primary">
                      {testimonials?.[currentTestimonial]?.crop} • {testimonials?.[currentTestimonial]?.location}
                    </div>
                  </div>

                  <div className="hidden sm:block w-px h-12 bg-border"></div>

                  <div className="px-4 py-2 bg-success/10 rounded-lg">
                    <div className="text-sm md:text-base font-bold text-success">
                      {testimonials?.[currentTestimonial]?.impact}
                    </div>
                    <div className="text-xs text-success/80">
                      {testimonials?.[currentTestimonial]?.impactHi}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-6 md:mt-8">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentTestimonial === index ? 'w-8 bg-primary' : 'bg-muted-foreground/30'}`
              }
              aria-label={`View testimonial ${index + 1}`} />

            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12 lg:mt-16">
          <div className="text-center p-4 md:p-6 bg-card rounded-xl shadow-organic">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Active Farmers</div>
            <div className="text-xs text-muted-foreground/80">सक्रिय किसान</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-card rounded-xl shadow-organic">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-xs md:text-sm text-muted-foreground">AI Accuracy</div>
            <div className="text-xs text-muted-foreground/80">एआई सटीकता</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-card rounded-xl shadow-organic">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">1M+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Diagnoses</div>
            <div className="text-xs text-muted-foreground/80">निदान</div>
          </div>
          <div className="text-center p-4 md:p-6 bg-card rounded-xl shadow-organic">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">4.8★</div>
            <div className="text-xs md:text-sm text-muted-foreground">User Rating</div>
            <div className="text-xs text-muted-foreground/80">उपयोगकर्ता रेटिंग</div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;