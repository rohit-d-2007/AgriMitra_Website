import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import BottomNav from '../../components/ui/BottomNav';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CropHero from './components/CropHero';
import GrowingCalendar from './components/GrowingCalendar';
import PestDiseaseGuide from './components/PestDiseaseGuide';
import SoilRequirements from './components/SoilRequirements';
import IrrigationSchedule from './components/IrrigationSchedule';
import MarketInsights from './components/MarketInsights';
import RelatedCrops from './components/RelatedCrops';
import ExpertConsultation from './components/ExpertConsultation';

const CropDetailPages = () => {
  const router = useRouter();
  const cropId = router.query.crop || 'wheat';
  const [showConsultation, setShowConsultation] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [cropId]);

  const cropData = {
    wheat: {
      name: "Wheat",
      nameHindi: "गेहूं (Gehun)",
      category: "Cereal Crop",
      season: "Rabi Season",
      description: "Wheat is one of India's most important cereal crops, cultivated extensively across northern states. It thrives in cool climate conditions and provides essential nutrition to millions. Modern varieties offer high yield potential with proper management practices.",
      image: "https://images.unsplash.com/photo-1648063635311-dfd375146078",
      imageAlt: "Golden wheat field with mature wheat stalks swaying in gentle breeze under clear blue sky during harvest season",
      duration: "120-150 days",
      waterRequirement: "Medium",
      temperature: "15-25°C",
      yield: "40-50 Q/ha",
      suitableRegions: "Punjab, Haryana, UP",
      rating: "4.8"
    }
  };

  const growingStages = [
  {
    stage: "Land Preparation",
    duration: "15-20 days",
    description: "Prepare the field with proper ploughing and leveling to ensure good seed germination and uniform crop growth. Remove previous crop residues and weeds completely.",
    activities: ["Deep Ploughing", "Leveling", "Weed Removal"],
    waterNeed: "Pre-sowing irrigation",
    fertilizer: "FYM 10-15 tons/ha"
  },
  {
    stage: "Sowing",
    duration: "1-2 days",
    description: "Optimal sowing time is mid-November to early December. Use certified seeds at recommended seed rate for uniform germination and plant population.",
    activities: ["Seed Treatment", "Line Sowing", "Seed Covering"],
    waterNeed: "Light irrigation after sowing",
    fertilizer: "Basal dose NPK"
  },
  {
    stage: "Germination",
    duration: "7-10 days",
    description: "Seeds germinate within a week under favorable conditions. Maintain adequate soil moisture and protect from birds and pests during this critical stage.",
    activities: ["Moisture Monitoring", "Bird Protection", "Gap Filling"],
    waterNeed: "Keep soil moist",
    fertilizer: "None required"
  },
  {
    stage: "Vegetative Growth",
    duration: "30-40 days",
    description: "Plant develops leaves and tillers. This is the most critical phase for nutrient management and weed control to ensure healthy crop establishment.",
    activities: ["First Weeding", "Top Dressing", "Pest Monitoring"],
    waterNeed: "Regular irrigation",
    fertilizer: "Nitrogen top dressing"
  },
  {
    stage: "Flowering",
    duration: "15-20 days",
    description: "Wheat plants produce flowers and undergo pollination. Adequate moisture and protection from extreme weather are crucial during this sensitive period.",
    activities: ["Disease Control", "Irrigation Management", "Nutrient Spray"],
    waterNeed: "Critical irrigation",
    fertilizer: "Foliar spray"
  },
  {
    stage: "Maturity",
    duration: "25-30 days",
    description: "Grains develop and mature. Monitor crop regularly for timely harvest. Reduce irrigation gradually as crop approaches physiological maturity.",
    activities: ["Grain Filling Monitoring", "Pest Control", "Harvest Planning"],
    waterNeed: "Reduced irrigation",
    fertilizer: "None required"
  },
  {
    stage: "Harvesting",
    duration: "3-5 days",
    description: "Harvest when grains are fully mature and moisture content is optimal. Timely harvesting prevents grain shattering and quality deterioration.",
    activities: ["Combine Harvesting", "Threshing", "Grain Storage"],
    waterNeed: "Stop irrigation",
    fertilizer: "None required"
  }];


  const pestDiseases = [
  {
    name: "Aphids",
    nameHindi: "माहू (Mahu)",
    type: "Pest",
    severity: "Medium",
    image: "https://images.unsplash.com/photo-1718323653438-0fb3c8f84d1c",
    imageAlt: "Close-up macro photograph of green aphids clustered on wheat plant stem showing detailed insect anatomy and plant damage",
    description: "Small sap-sucking insects that attack wheat plants during vegetative and flowering stages, causing yellowing and stunted growth.",
    symptoms: ["Yellowing of leaves", "Sticky honeydew on plants", "Curling of leaves", "Stunted plant growth"],
    organicSolutions: ["Neem oil spray (5ml/liter)", "Garlic-chili spray", "Introduce ladybugs", "Yellow sticky traps"],
    preventionCost: "500-800"
  },
  {
    name: "Rust Disease",
    nameHindi: "रतुआ रोग (Ratua Rog)",
    type: "Disease",
    severity: "High",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1abc9f58f-1764682701326.png",
    imageAlt: "Wheat leaf infected with rust disease showing orange-brown pustules and lesions on green leaf surface in agricultural field",
    description: "Fungal disease causing orange-brown pustules on leaves and stems, significantly reducing yield if not controlled timely.",
    symptoms: ["Orange-brown pustules on leaves", "Premature leaf drying", "Reduced grain filling", "Weakened stems"],
    organicSolutions: ["Sulfur dust application", "Copper-based fungicides", "Remove infected plants", "Crop rotation"],
    preventionCost: "1200-1500"
  },
  {
    name: "Termites",
    nameHindi: "दीमक (Deemak)",
    type: "Pest",
    severity: "High",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bcefc1c9-1766257710505.png",
    imageAlt: "Underground termite colony attacking wheat plant roots showing white termites and damaged root system in dark soil",
    description: "Soil-dwelling insects that attack wheat roots and stems, causing severe damage especially in dry conditions and sandy soils.",
    symptoms: ["Wilting of plants", "Hollow stems", "Dead patches in field", "Reduced plant vigor"],
    organicSolutions: ["Neem cake in soil", "Beauveria bassiana application", "Maintain soil moisture", "Crop residue management"],
    preventionCost: "800-1000"
  },
  {
    name: "Powdery Mildew",
    nameHindi: "चूर्णिल आसिता (Churnil Asita)",
    type: "Disease",
    severity: "Medium",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f99d90c5-1765101768278.png",
    imageAlt: "Wheat leaves covered with white powdery fungal growth showing characteristic symptoms of powdery mildew disease in field conditions",
    description: "Fungal disease appearing as white powdery growth on leaves, common in humid conditions and dense crop stands.",
    symptoms: ["White powdery coating on leaves", "Yellowing of affected areas", "Reduced photosynthesis", "Premature leaf senescence"],
    organicSolutions: ["Milk spray (1:10 ratio)", "Baking soda solution", "Sulfur fungicide", "Improve air circulation"],
    preventionCost: "600-900"
  },
  {
    name: "Shoot Fly",
    nameHindi: "तना मक्खी (Tana Makkhi)",
    type: "Pest",
    severity: "Low",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_172485f0e-1766257712153.png",
    imageAlt: "Small black shoot fly insect on wheat seedling showing pest damage to young plant shoot in early growth stage",
    description: "Small flies that lay eggs on young wheat plants, with larvae boring into shoots causing dead hearts and reduced tillering.",
    symptoms: ["Dead heart in seedlings", "Yellowing of central shoot", "Reduced tillering", "Stunted plant growth"],
    organicSolutions: ["Early sowing to avoid peak fly period", "Neem seed kernel extract", "Intercropping with marigold", "Remove affected plants"],
    preventionCost: "400-600"
  },
  {
    name: "Loose Smut",
    nameHindi: "खुला कंडुआ (Khula Kandua)",
    type: "Disease",
    severity: "Medium",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aabb884b-1765122906378.png",
    imageAlt: "Wheat ear infected with loose smut disease showing black powdery spore mass replacing grain kernels on wheat spike",
    description: "Seed-borne fungal disease that replaces grain with black powdery spores, spreading through infected seeds and wind.",
    symptoms: ["Black powdery mass in ears", "Complete grain loss in affected ears", "Early emergence of infected plants", "Spore dispersal by wind"],
    organicSolutions: ["Hot water seed treatment (52°C for 11 minutes)", "Use certified disease-free seeds", "Crop rotation", "Remove infected plants before spore release"],
    preventionCost: "300-500"
  }];


  const soilRequirements = {
    phLevel: "6.5-7.5",
    soilTypes: ["Loamy Soil", "Clay Loam", "Sandy Loam"],
    nutrients: [
    { name: "Nitrogen (N)", level: "High", percentage: "85%" },
    { name: "Phosphorus (P)", level: "Medium", percentage: "65%" },
    { name: "Potassium (K)", level: "Medium", percentage: "60%" },
    { name: "Organic Matter", level: "Good", percentage: "70%" }],

    organicAmendments: [
    { name: "Farmyard Manure", quantity: "10-15 tons/hectare" },
    { name: "Vermicompost", quantity: "5-7 tons/hectare" },
    { name: "Green Manure", quantity: "Incorporate before sowing" },
    { name: "Neem Cake", quantity: "500-750 kg/hectare" }],

    testingRecommendation: "Conduct soil testing every 2-3 years to monitor nutrient levels and pH. Apply lime if pH is below 6.0 and gypsum if pH is above 8.0. Regular organic matter addition improves soil structure and water retention capacity."
  };

  const irrigationSchedule = {
    totalWaterNeed: "450-500 mm",
    waterNeedDescription: "Wheat requires 4-6 irrigations depending on soil type and rainfall. Critical stages are crown root initiation, tillering, flowering, and grain filling.",
    method: "Drip/Sprinkler",
    methodDescription: "Drip irrigation saves 30-40% water compared to flood irrigation while maintaining optimal soil moisture for better yield.",
    stages: [
    {
      stage: "Crown Root Initiation",
      duration: "20-25 days after sowing",
      frequency: "Once",
      amount: "60-70 mm",
      bestTime: "Early morning (6-8 AM)",
      notes: "Critical irrigation for root development. Delay can reduce tillering significantly."
    },
    {
      stage: "Tillering Stage",
      duration: "40-45 days after sowing",
      frequency: "Once",
      amount: "60-70 mm",
      bestTime: "Early morning (6-8 AM)",
      notes: "Ensures proper tiller formation and plant establishment. Maintain adequate soil moisture."
    },
    {
      stage: "Jointing Stage",
      duration: "60-65 days after sowing",
      frequency: "Once",
      amount: "70-80 mm",
      bestTime: "Early morning (6-8 AM)",
      notes: "Important for stem elongation and ear formation. Water stress can reduce grain number."
    },
    {
      stage: "Flowering Stage",
      duration: "80-85 days after sowing",
      frequency: "Once",
      amount: "80-90 mm",
      bestTime: "Early morning (6-8 AM)",
      notes: "Most critical stage. Water stress during flowering severely affects grain formation."
    },
    {
      stage: "Milk Stage",
      duration: "95-100 days after sowing",
      frequency: "Once",
      amount: "70-80 mm",
      bestTime: "Early morning (6-8 AM)",
      notes: "Essential for grain filling. Adequate moisture ensures proper grain weight."
    },
    {
      stage: "Dough Stage",
      duration: "110-115 days after sowing",
      frequency: "Once (if needed)",
      amount: "50-60 mm",
      bestTime: "Early morning (6-8 AM)",
      notes: "Final irrigation if soil moisture is low. Stop irrigation 10-15 days before harvest."
    }],

    seasonalTips: {
      summer: "Increase irrigation frequency during hot weather. Apply light irrigation to prevent heat stress.",
      monsoon: "Reduce irrigation if adequate rainfall occurs. Ensure proper drainage to prevent waterlogging.",
      winter: "Maintain regular irrigation schedule. Morning irrigation is preferred to avoid frost damage."
    }
  };

  const marketInsights = {
    currentPrice: "2,150",
    priceChange: "+8.5%",
    demandLevel: "High",
    demandPercentage: "15%",
    bestSellingPeriod: "April-May",
    topMarkets: [
    { name: "Khanna Mandi", location: "Punjab", price: "2,200" },
    { name: "Karnal Mandi", location: "Haryana", price: "2,180" },
    { name: "Meerut Mandi", location: "Uttar Pradesh", price: "2,150" },
    { name: "Indore Mandi", location: "Madhya Pradesh", price: "2,120" }],

    sellingTips: [
    "Store wheat in moisture-proof bags to maintain quality and prevent fungal growth",
    "Sell during peak demand months (April-May) for better prices and quick turnover",
    "Grade wheat properly - higher grade fetches 10-15% premium price in market",
    "Consider government procurement at MSP (₹2,125/quintal) for assured returns",
    "Monitor daily mandi rates through AgriMitra app for best selling opportunities"]

  };

  const relatedCrops = [
  {
    id: "barley",
    name: "Barley",
    nameHindi: "जौ (Jau)",
    category: "Cereal",
    image: "https://images.unsplash.com/photo-1719822505571-8393ecd5ee9d",
    imageAlt: "Golden barley field with mature barley stalks and characteristic long awns swaying in wind under bright sunlight",
    rating: "4.6",
    duration: "110-130 days",
    yield: "35-40 Q/ha"
  },
  {
    id: "mustard",
    name: "Mustard",
    nameHindi: "सरसों (Sarson)",
    category: "Oilseed",
    image: "https://images.unsplash.com/photo-1708016905358-b2190c421b58",
    imageAlt: "Vibrant yellow mustard flowers in full bloom covering agricultural field creating golden carpet landscape view",
    rating: "4.7",
    duration: "90-110 days",
    yield: "15-20 Q/ha"
  },
  {
    id: "chickpea",
    name: "Chickpea",
    nameHindi: "चना (Chana)",
    category: "Pulse",
    image: "https://images.unsplash.com/photo-1443889989397-d8a726a18934",
    imageAlt: "Chickpea plants with green pods growing in agricultural field showing healthy crop with characteristic compound leaves",
    rating: "4.5",
    duration: "100-120 days",
    yield: "20-25 Q/ha"
  },
  {
    id: "lentil",
    name: "Lentil",
    nameHindi: "मसूर (Masoor)",
    category: "Pulse",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1753b06ea-1766257710089.png",
    imageAlt: "Lentil crop with small delicate leaves and pods in agricultural field showing dense plant growth pattern",
    rating: "4.4",
    duration: "95-115 days",
    yield: "12-15 Q/ha"
  }];


  const experts = [
  {
    name: "Dr. Rajesh Kumar",
    specialization: "Wheat Cultivation Expert",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11dfaa315-1763300585531.png",
    imageAlt: "Professional headshot of Indian male agricultural expert Dr. Rajesh Kumar in formal white shirt with warm smile",
    rating: "4.9",
    consultations: "500+ consultations",
    languages: ["Hindi", "English", "Punjabi"],
    fee: "500"
  },
  {
    name: "Dr. Priya Sharma",
    specialization: "Crop Disease Specialist",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12e382604-1763297044868.png",
    imageAlt: "Professional headshot of Indian female agricultural scientist Dr. Priya Sharma in blue formal attire with confident expression",
    rating: "4.8",
    consultations: "450+ consultations",
    languages: ["Hindi", "English"],
    fee: "600"
  },
  {
    name: "Suresh Patel",
    specialization: "Organic Farming Advisor",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12b674a88-1763300103327.png",
    imageAlt: "Professional headshot of experienced Indian male farmer advisor Suresh Patel in traditional kurta with friendly demeanor",
    rating: "4.7",
    consultations: "380+ consultations",
    languages: ["Hindi", "Gujarati", "English"],
    fee: "450"
  },
  {
    name: "Dr. Meena Singh",
    specialization: "Soil Health Expert",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18823d24c-1763301746227.png",
    imageAlt: "Professional headshot of Indian female soil scientist Dr. Meena Singh in green formal dress with professional appearance",
    rating: "4.9",
    consultations: "520+ consultations",
    languages: ["Hindi", "English", "Marathi"],
    fee: "550"
  }];


  const tabs = [
  { id: 'overview', label: 'Overview', labelHi: 'अवलोकन', icon: 'Home' },
  { id: 'calendar', label: 'Growing Calendar', labelHi: 'कैलेंडर', icon: 'Calendar' },
  { id: 'pests', label: 'Pest & Disease', labelHi: 'कीट रोग', icon: 'Bug' },
  { id: 'soil', label: 'Soil Requirements', labelHi: 'मिट्टी', icon: 'Mountain' },
  { id: 'irrigation', label: 'Irrigation', labelHi: 'सिंचाई', icon: 'Droplets' },
  { id: 'market', label: 'Market Insights', labelHi: 'बाजार', icon: 'TrendingUp' }];


  const currentCrop = cropData?.[cropId] || cropData?.wheat;

  return (
    <>
      <Helmet>
        <title>{currentCrop?.name} Cultivation Guide - AgriMitra Digital Platform</title>
        <meta name="description" content={`Complete ${currentCrop?.name} cultivation guide with growing calendar, pest management, soil requirements, irrigation schedule, and market insights. Expert agricultural guidance for Indian farmers.`} />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="main-content">
          <CropHero
            crop={currentCrop}
            onBookConsultation={() => setShowConsultation(true)} />


          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="mb-6 md:mb-8 overflow-x-auto">
              <div className="flex space-x-2 min-w-max pb-2">
                {tabs?.map((tab) =>
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab?.id ?
                  'bg-primary text-primary-foreground shadow-organic' :
                  'bg-card text-muted-foreground hover:bg-muted'}`
                  }>

                    <Icon name={tab?.icon} size={18} />
                    <span className="hidden sm:inline">{tab?.label}</span>
                    <span className="sm:hidden">{tab?.labelHi}</span>
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-8 md:space-y-12">
              {activeTab === 'overview' &&
              <>
                  <GrowingCalendar stages={growingStages} />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-heading flex items-center">
                        <Icon name="Leaf" size={24} className="mr-3" color="var(--color-success)" />
                        Key Benefits
                      </h3>
                      <ul className="space-y-3">
                        {[
                      "High nutritional value with essential proteins and minerals",
                      "Excellent market demand throughout the year",
                      "Suitable for diverse agro-climatic conditions",
                      "Good crop rotation option for soil health",
                      "Multiple varieties available for different regions"]?.
                      map((benefit, index) =>
                      <li key={index} className="flex items-start space-x-3">
                            <Icon name="CheckCircle2" size={18} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                            <span className="text-sm md:text-base text-muted-foreground">{benefit}</span>
                          </li>
                      )}
                      </ul>
                    </div>

                    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-heading flex items-center">
                        <Icon name="AlertCircle" size={24} className="mr-3" color="var(--color-warning)" />
                        Important Precautions
                      </h3>
                      <ul className="space-y-3">
                        {[
                      "Avoid waterlogging - ensure proper field drainage",
                      "Monitor for rust disease during humid conditions",
                      "Use certified seeds from reliable sources only",
                      "Apply fertilizers based on soil test results",
                      "Harvest at proper maturity to prevent grain loss"]?.
                      map((precaution, index) =>
                      <li key={index} className="flex items-start space-x-3">
                            <Icon name="AlertTriangle" size={18} color="var(--color-warning)" className="mt-0.5 flex-shrink-0" />
                            <span className="text-sm md:text-base text-muted-foreground">{precaution}</span>
                          </li>
                      )}
                      </ul>
                    </div>
                  </div>
                </>
              }

              {activeTab === 'calendar' && <GrowingCalendar stages={growingStages} />}
              
              {activeTab === 'pests' &&
              <PestDiseaseGuide
                issues={pestDiseases}
                onAIDiagnosis={() => router.push('/ai-plant-diagnosis-showcase')} />

              }
              
              {activeTab === 'soil' && <SoilRequirements requirements={soilRequirements} />}
              
              {activeTab === 'irrigation' && <IrrigationSchedule schedule={irrigationSchedule} />}
              
              {activeTab === 'market' && <MarketInsights insights={marketInsights} />}
            </div>

            <div className="mt-12">
              <RelatedCrops crops={relatedCrops} />
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 md:p-8 lg:p-12 border border-primary/20">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Icon name="Smartphone" size={32} color="var(--color-primary)" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 font-heading">
                  Get Complete Farming Guidance
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                  Download AgriMitra app for AI-powered crop diagnosis, real-time weather alerts, expert consultations, and personalized farming recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Download"
                    iconPosition="left"
                    onClick={() => window.open('https://play.google.com', '_blank')}
                    className="w-full sm:w-auto">

                    Download App
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Phone"
                    iconPosition="left"
                    onClick={() => setShowConsultation(true)}
                    className="w-full sm:w-auto">

                    Talk to Expert
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <BottomNav />

        {showConsultation &&
        <ExpertConsultation
          experts={experts}
          onClose={() => setShowConsultation(false)} />

        }
      </div>
    </>);

};

export default CropDetailPages;