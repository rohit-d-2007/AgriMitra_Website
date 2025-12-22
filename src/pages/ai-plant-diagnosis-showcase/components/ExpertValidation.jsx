import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ExpertValidation = () => {
  const experts = [
  {
    name: "Dr. Rajesh Sharma",
    nameHi: "डॉ. राजेश शर्मा",
    designation: "Senior Agronomist, ICAR",
    designationHi: "वरिष्ठ कृषि विज्ञानी, आईसीएआर",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11dfaa315-1763300585531.png",
    imageAlt: "Professional headshot of Indian male agricultural scientist Dr Rajesh Sharma in formal white shirt with warm smile",
    quote: "AgriMitra\'s AI diagnostic accuracy rivals that of trained agricultural experts. The technology is a game-changer for Indian farmers.",
    quoteHi: "एग्रीमित्र की एआई निदान सटीकता प्रशिक्षित कृषि विशेषज्ञों के बराबर है। यह तकनीक भारतीय किसानों के लिए गेम-चेंजर है।"
  },
  {
    name: "Dr. Priya Patel",
    nameHi: "डॉ. प्रिया पटेल",
    designation: "Plant Pathologist, Agricultural University",
    designationHi: "पादप रोग विज्ञानी, कृषि विश्वविद्यालय",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17f711a84-1763296696835.png",
    imageAlt: "Professional portrait of Indian female plant pathologist Dr Priya Patel in blue blazer with confident expression",
    quote: "The comprehensive disease database and treatment recommendations are scientifically sound and practical for field application.",
    quoteHi: "व्यापक रोग डेटाबेस और उपचार सिफारिशें वैज्ञानिक रूप से सही और क्षेत्र अनुप्रयोग के लिए व्यावहारिक हैं।"
  },
  {
    name: "Dr. Anil Kumar",
    nameHi: "डॉ. अनिल कुमार",
    designation: "Extension Officer, State Agriculture Dept",
    designationHi: "विस्तार अधिकारी, राज्य कृषि विभाग",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f6d52f32-1763295162957.png",
    imageAlt: "Professional photograph of Indian male agricultural extension officer Dr Anil Kumar in formal attire with friendly demeanor",
    quote: "We recommend AgriMitra to farmers across our district. The multilingual support makes it accessible to everyone.",
    quoteHi: "हम अपने जिले के किसानों को एग्रीमित्र की सिफारिश करते हैं। बहुभाषी समर्थन इसे सभी के लिए सुलभ बनाता है।"
  }];


  const certifications = [
  {
    icon: "Award",
    title: "ICAR Validated",
    titleHi: "आईसीएआर सत्यापित",
    description: "Approved by Indian Council of Agricultural Research"
  },
  {
    icon: "Shield",
    title: "ISO Certified",
    titleHi: "आईएसओ प्रमाणित",
    description: "Quality management system certified"
  },
  {
    icon: "CheckCircle2",
    title: "Government Approved",
    titleHi: "सरकार द्वारा अनुमोदित",
    description: "Recognized by Ministry of Agriculture"
  },
  {
    icon: "Star",
    title: "Award Winning",
    titleHi: "पुरस्कार विजेता",
    description: "National AgriTech Innovation Award 2024"
  }];


  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="UserCheck" size={18} />
            <span className="text-xs md:text-sm font-semibold">Expert Endorsed</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Validated by Agricultural Experts
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Leading agricultural scientists and field experts trust and recommend our AI diagnostic system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {experts?.map((expert, index) =>
          <div
            key={index}
            className="bg-card rounded-xl p-6 shadow-organic hover:shadow-organic-lg transition-all duration-300">

              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                  src={expert?.image}
                  alt={expert?.imageAlt}
                  className="w-full h-full object-cover" />

                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1">
                    {expert?.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-1">
                    {expert?.nameHi}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {expert?.designation}
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 relative">
                <Icon
                name="Quote"
                size={24}
                color="var(--color-primary)"
                className="absolute top-2 left-2 opacity-20" />

                <p className="text-sm text-foreground mb-3 relative z-10">
                  "{expert?.quote}"
                </p>
                <p className="text-xs text-muted-foreground relative z-10">
                  "{expert?.quoteHi}"
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Certifications & Recognition
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality and accuracy is recognized by leading agricultural institutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {certifications?.map((cert, index) =>
            <div
              key={index}
              className="bg-card rounded-xl p-4 md:p-6 text-center hover:shadow-organic transition-all duration-300">

                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2">
                  {cert?.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {cert?.titleHi}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {cert?.description}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 md:mt-12 bg-card rounded-xl p-6 md:p-8 shadow-organic text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Users" size={24} color="var(--color-primary)" />
            <h3 className="text-lg md:text-xl font-bold text-foreground">
              Join Our Expert Network
            </h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
            Are you an agricultural expert? Join our validation team to help improve AI accuracy and support farmers across India.
          </p>
          <button
            onClick={() => window.location.href = 'mailto:experts@agrimitra.com'}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300">

            <Icon name="Mail" size={18} />
            <span className="text-sm">Contact Expert Team</span>
          </button>
        </div>
      </div>
    </section>);

};

export default ExpertValidation;