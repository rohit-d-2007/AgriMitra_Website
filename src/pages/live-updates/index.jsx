import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Header from '../../components/ui/Header';
import BottomNav from '../../components/ui/BottomNav';
import Footer from '../../components/ui/Footer';
import Button from '../../components/ui/Button';
import WeatherCard from './components/WeatherCard';
import SchemeCard from './components/SchemeCard';
import AlertBanner from './components/AlertBanner';
import WeatherDetailPanel from './components/WeatherDetailPanel';
import LocationSelector from './components/LocationSelector';

const LiveUpdates = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [activeTab, setActiveTab] = useState('weather');
  const [currentLocation, setCurrentLocation] = useState({
    id: 1,
    name: 'Pune, Maharashtra',
    nameHi: 'पुणे, महाराष्ट्र',
    lat: 18.5204,
    lng: 73.8567
  });
  const [alerts, setAlerts] = useState([]);

  const weatherData = [
    {
      id: 1,
      date: '20 Dec 2025',
      day: 'Today',
      dayHi: 'आज',
      temp: 28,
      tempRange: '22°-32°',
      condition: 'Sunny',
      humidity: 65,
      windSpeed: 12,
      feelsLike: 30,
      pressure: 1012,
      visibility: 10,
      sunrise: '6:45 AM',
      sunset: '6:15 PM',
      rainChance: 10,
      farmingAdvice: 'Perfect day for irrigation and pesticide application. Avoid spraying after 11 AM due to high temperature.',
      farmingAdviceHi: 'सिंचाई और कीटनाशक छिड़काव के लिए उत्तम दिन। उच्च तापमान के कारण 11 बजे के बाद छिड़काव से बचें।'
    },
    {
      id: 2,
      date: '21 Dec 2025',
      day: 'Saturday',
      dayHi: 'शनिवार',
      temp: 26,
      tempRange: '20°-29°',
      condition: 'Partly Cloudy',
      humidity: 70,
      windSpeed: 15,
      feelsLike: 27,
      pressure: 1010,
      visibility: 8,
      sunrise: '6:46 AM',
      sunset: '6:15 PM',
      rainChance: 30,
      farmingAdvice: 'Good conditions for sowing. Monitor cloud cover for potential rain in evening.',
      farmingAdviceHi: 'बुवाई के लिए अच्छी स्थिति। शाम में संभावित बारिश के लिए बादलों की निगरानी करें।'
    },
    {
      id: 3,
      date: '22 Dec 2025',
      day: 'Sunday',
      dayHi: 'रविवार',
      temp: 24,
      tempRange: '19°-27°',
      condition: 'Rainy',
      humidity: 85,
      windSpeed: 20,
      feelsLike: 23,
      pressure: 1008,
      visibility: 5,
      sunrise: '6:46 AM',
      sunset: '6:16 PM',
      rainChance: 80,
      farmingAdvice: 'Postpone all field activities. Ensure proper drainage in fields. Good time for indoor farm planning.',
      farmingAdviceHi: 'सभी खेत गतिविधियों को स्थगित करें। खेतों में उचित जल निकासी सुनिश्चित करें। इनडोर फार्म योजना के लिए अच्छा समय।'
    },
    {
      id: 4,
      date: '23 Dec 2025',
      day: 'Monday',
      dayHi: 'सोमवार',
      temp: 25,
      tempRange: '20°-28°',
      condition: 'Cloudy',
      humidity: 75,
      windSpeed: 18,
      feelsLike: 26,
      pressure: 1009,
      visibility: 7,
      sunrise: '6:47 AM',
      sunset: '6:16 PM',
      rainChance: 40,
      farmingAdvice: 'Moderate conditions. Light field work acceptable. Keep rain gear ready.',
      farmingAdviceHi: 'मध्यम स्थिति। हल्का खेत का काम स्वीकार्य। बारिश का सामान तैयार रखें।'
    },
    {
      id: 5,
      date: '24 Dec 2025',
      day: 'Tuesday',
      dayHi: 'मंगलवार',
      temp: 27,
      tempRange: '21°-30°',
      condition: 'Partly Cloudy',
      humidity: 68,
      windSpeed: 14,
      feelsLike: 28,
      pressure: 1011,
      visibility: 9,
      sunrise: '6:47 AM',
      sunset: '6:17 PM',
      rainChance: 25,
      farmingAdvice: 'Excellent day for harvesting and field preparation. Morning hours most suitable.',
      farmingAdviceHi: 'कटाई और खेत की तैयारी के लिए उत्कृष्ट दिन। सुबह के घंटे सबसे उपयुक्त।'
    },
    {
      id: 6,
      date: '25 Dec 2025',
      day: 'Wednesday',
      dayHi: 'बुधवार',
      temp: 29,
      tempRange: '23°-33°',
      condition: 'Sunny',
      humidity: 60,
      windSpeed: 10,
      feelsLike: 31,
      pressure: 1013,
      visibility: 10,
      sunrise: '6:48 AM',
      sunset: '6:17 PM',
      rainChance: 5,
      farmingAdvice: 'Hot and dry. Increase irrigation frequency. Avoid midday field work.',
      farmingAdviceHi: 'गर्म और शुष्क। सिंचाई की आवृत्ति बढ़ाएं। दोपहर के खेत के काम से बचें।'
    },
    {
      id: 7,
      date: '26 Dec 2025',
      day: 'Thursday',
      dayHi: 'गुरुवार',
      temp: 28,
      tempRange: '22°-31°',
      condition: 'Sunny',
      humidity: 62,
      windSpeed: 11,
      feelsLike: 29,
      pressure: 1012,
      visibility: 10,
      sunrise: '6:48 AM',
      sunset: '6:18 PM',
      rainChance: 15,
      farmingAdvice: 'Stable weather continues. Good for all farming activities. Monitor soil moisture.',
      farmingAdviceHi: 'स्थिर मौसम जारी। सभी खेती गतिविधियों के लिए अच्छा। मिट्टी की नमी की निगरानी करें।'
    }
  ];

  const governmentSchemes = [
    {
      id: 1,
      category: 'Subsidy',
      title: 'PM-KISAN Direct Benefit Transfer',
      titleHi: 'पीएम-किसान प्रत्यक्ष लाभ हस्तांतरण',
      description: 'Financial assistance of ₹6000 per year in three equal installments directly transferred to farmer bank accounts. Covers all landholding farmers across India.',
      deadline: '31 March 2026',
      eligibility: 'All landholding farmers',
      benefit: '₹6,000/year',
      isNew: false
    },
    {
      id: 2,
      category: 'Insurance',
      title: 'Pradhan Mantri Fasal Bima Yojana',
      titleHi: 'प्रधानमंत्री फसल बीमा योजना',
      description: 'Comprehensive crop insurance scheme providing financial support to farmers suffering crop loss due to natural calamities, pests, and diseases.',
      deadline: '15 January 2026',
      eligibility: 'Kharif & Rabi crop farmers',
      benefit: 'Up to 90% coverage',
      isNew: true
    },
    {
      id: 3,
      category: 'Loan',
      title: 'Kisan Credit Card Scheme',
      titleHi: 'किसान क्रेडिट कार्ड योजना',
      description: 'Short-term credit facility for farmers to meet agricultural expenses including seeds, fertilizers, and equipment at subsidized interest rates.',
      deadline: 'Ongoing',
      eligibility: 'Farmers with land records',
      benefit: '4% interest rate',
      isNew: false
    },
    {
      id: 4,
      category: 'Training',
      title: 'National Agriculture Market Training',
      titleHi: 'राष्ट्रीय कृषि बाजार प्रशिक्षण',
      description: 'Free training program on digital marketing, e-NAM platform usage, and modern agricultural practices to help farmers get better prices.',
      deadline: '28 February 2026',
      eligibility: 'All registered farmers',
      benefit: 'Free certification',
      isNew: true
    },
    {
      id: 5,
      category: 'Equipment',
      title: 'Sub-Mission on Agricultural Mechanization',
      titleHi: 'कृषि यंत्रीकरण पर उप-मिशन',
      description: 'Financial assistance for purchase of agricultural machinery and equipment. Subsidies range from 40-50% for individual farmers and 80% for custom hiring centers.',
      deadline: '30 June 2026',
      eligibility: 'Small & marginal farmers',
      benefit: '40-80% subsidy',
      isNew: false
    },
    {
      id: 6,
      category: 'Subsidy',
      title: 'Soil Health Card Scheme',
      titleHi: 'मृदा स्वास्थ्य कार्ड योजना',
      description: 'Free soil testing and health card issuance to promote balanced use of fertilizers and improve soil fertility for sustainable agriculture.',
      deadline: 'Ongoing',
      eligibility: 'All farmers',
      benefit: 'Free soil testing',
      isNew: false
    }
  ];

  const initialAlerts = [
    {
      id: 1,
      severity: 'warning',
      title: 'Heavy Rainfall Alert',
      message: 'Moderate to heavy rainfall expected on 22nd December. Postpone pesticide application and ensure field drainage.',
      time: '2 hours ago',
      location: 'Pune District'
    },
    {
      id: 2,
      severity: 'info',
      title: 'New Subsidy Scheme Announced',
      message: 'Maharashtra government announces additional ₹2000 subsidy for drip irrigation installation. Apply before 31st January.',
      time: '5 hours ago',
      location: 'Maharashtra'
    },
    {
      id: 3,
      severity: 'success',
      title: 'Market Price Update',
      message: 'Tomato prices increased by 15% in Pune APMC. Good time for harvest and sale.',
      time: '1 day ago',
      location: 'Pune APMC'
    }
  ];

  useEffect(() => {
    setAlerts(initialAlerts);
  }, []);

  const handleDismissAlert = (alertId) => {
    setAlerts(alerts?.filter(alert => alert?.id !== alertId));
  };

  const handleLearnMore = (scheme) => {
    window.open('https://agricoop.gov.in', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Live Updates - Weather & Government Schemes | AgriMitra</title>
        <meta name="description" content="Real-time weather forecasts, agricultural alerts, and government scheme updates for Indian farmers. Get hyperlocal weather insights and timely scheme information." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="main-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
            <div className="mb-6 md:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-4 md:mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    Live Updates
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Real-time weather forecasts and government scheme alerts
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    वास्तविक समय मौसम पूर्वानुमान और सरकारी योजना अलर्ट
                  </p>
                </div>
                <LocationSelector 
                  currentLocation={currentLocation}
                  onLocationChange={setCurrentLocation}
                />
              </div>

              {alerts?.length > 0 && (
                <div className="space-y-3 mb-6 md:mb-8">
                  {alerts?.map(alert => (
                    <AlertBanner 
                      key={alert?.id}
                      alert={alert}
                      onDismiss={handleDismissAlert}
                    />
                  ))}
                </div>
              )}

              <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-border">
                <button
                  onClick={() => setActiveTab('weather')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === 'weather' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name="CloudSun" size={18} />
                  <span>Weather Forecast</span>
                </button>
                <button
                  onClick={() => setActiveTab('schemes')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === 'schemes' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name="FileText" size={18} />
                  <span>Government Schemes</span>
                </button>
              </div>
            </div>

            {activeTab === 'weather' && (
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                    7-Day Weather Forecast
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    7-दिवसीय मौसम पूर्वानुमान
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 md:gap-4">
                    {weatherData?.map((weather, index) => (
                      <WeatherCard
                        key={weather?.id}
                        weather={weather}
                        isActive={selectedDay === index}
                        onClick={() => setSelectedDay(index)}
                      />
                    ))}
                  </div>
                </div>

                <WeatherDetailPanel weather={weatherData?.[selectedDay]} />

                <div className="bg-card rounded-xl p-4 md:p-6 shadow-organic">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                    Location Map
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    स्थान मानचित्र
                  </p>
                  <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      title={currentLocation?.name}
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${currentLocation?.lat},${currentLocation?.lng}&z=14&output=embed`}
                      className="border-0"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'schemes' && (
              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold text-foreground">
                      Active Government Schemes
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      सक्रिय सरकारी योजनाएं
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    iconName="Bell"
                    iconPosition="left"
                    size="sm"
                  >
                    Subscribe to Alerts
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {governmentSchemes?.map(scheme => (
                    <SchemeCard
                      key={scheme?.id}
                      scheme={scheme}
                      onLearnMore={handleLearnMore}
                    />
                  ))}
                </div>

                <div className="bg-primary/5 rounded-xl p-4 md:p-6 border border-primary/20">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 p-2 md:p-3 bg-primary rounded-lg">
                      <Icon name="Info" size={24} color="#FFFFFF" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                        Need Help with Applications?
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-4">
                        Our team can assist you with government scheme applications and documentation. Contact us for free consultation.
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground mb-4">
                        हमारी टीम सरकारी योजना आवेदन और दस्तावेज़ीकरण में आपकी सहायता कर सकती है। मुफ्त परामर्श के लिए हमसे संपर्क करें।
                      </p>
                      <Button
                        variant="default"
                        iconName="Phone"
                        iconPosition="left"
                        size="sm"
                      >
                        Contact Support
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer />
        <BottomNav />
      </div>
    </>
  );
};

export default LiveUpdates;