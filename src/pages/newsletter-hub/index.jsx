import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import BottomNav from '../../components/ui/BottomNav';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import NewsletterCard from './components/NewsletterCard';
import CategoryFilter from './components/CategoryFilter';
import SubscriptionPanel from './components/SubscriptionPanel';
import FeaturedExpert from './components/FeaturedExpert';
import SearchBar from './components/SearchBar';
import TrendingTopics from './components/TrendingTopics';

const NewsletterHub = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNewsletters, setFilteredNewsletters] = useState([]);

  const categories = [
  { id: 'all', name: 'All Content', nameHi: 'सभी सामग्री', icon: 'LayoutGrid', count: 24 },
  { id: 'crop-guides', name: 'Crop Guides', nameHi: 'फसल गाइड', icon: 'Wheat', count: 8 },
  { id: 'weather', name: 'Weather Insights', nameHi: 'मौसम जानकारी', icon: 'CloudRain', count: 6 },
  { id: 'expert-interviews', name: 'Expert Interviews', nameHi: 'विशेषज्ञ साक्षात्कार', icon: 'Users', count: 4 },
  { id: 'government-schemes', name: 'Government Schemes', nameHi: 'सरकारी योजनाएं', icon: 'Building', count: 3 },
  { id: 'success-stories', name: 'Success Stories', nameHi: 'सफलता की कहानियां', icon: 'Trophy', count: 3 }];


  const newsletters = [
  {
    id: 1,
    title: "Complete Guide to Wheat Cultivation in North India",
    excerpt: "Master the art of wheat farming with our comprehensive guide covering soil preparation, seed selection, irrigation management, and pest control strategies specifically designed for North Indian climate conditions.",
    category: "Crop Guides",
    categoryId: "crop-guides",
    author: "Dr. Rajesh Kumar",
    authorRole: "Agricultural Scientist",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11dfaa315-1763300585531.png",
    authorImageAlt: "Professional headshot of Indian male agricultural scientist Dr. Rajesh Kumar wearing white lab coat with warm smile",
    image: "https://images.unsplash.com/photo-1695142723302-0162ee5b91eb",
    imageAlt: "Golden wheat field stretching to horizon under clear blue sky with mature wheat stalks ready for harvest in North Indian farmland",
    date: "18 Dec 2025",
    readTime: "8 min read",
    views: "2.4K",
    isNew: true
  },
  {
    id: 2,
    title: "Monsoon 2025 Forecast: What Farmers Need to Know",
    excerpt: "Get ahead of the monsoon season with our detailed weather analysis, rainfall predictions, and crop planning recommendations to maximize your harvest and minimize weather-related risks this year.",
    category: "Weather Insights",
    categoryId: "weather",
    author: "Dr. Priya Sharma",
    authorRole: "Meteorologist",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_17f711a84-1763296696835.png",
    authorImageAlt: "Professional portrait of Indian female meteorologist Dr. Priya Sharma in formal blue blazer with confident expression",
    image: "https://images.unsplash.com/photo-1631101988866-21dcbb113c8c",
    imageAlt: "Dark monsoon clouds gathering over green agricultural fields with rain approaching Indian farmland during monsoon season",
    date: "17 Dec 2025",
    readTime: "6 min read",
    views: "3.1K",
    isNew: true
  },
  {
    id: 3,
    title: "PM-KISAN Scheme Update: New Benefits for 2025",
    excerpt: "Important updates on the Pradhan Mantri Kisan Samman Nidhi scheme including increased benefits, simplified application process, and new eligibility criteria that could benefit your family.",
    category: "Government Schemes",
    categoryId: "government-schemes",
    author: "Amit Patel",
    authorRole: "Policy Analyst",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f755ba97-1763300560912.png",
    authorImageAlt: "Professional headshot of Indian male policy analyst Amit Patel wearing formal grey suit with glasses and friendly demeanor",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17dc1d9e0-1764920380987.png",
    imageAlt: "Indian government office building with national flag and official documents representing PM-KISAN agricultural scheme benefits",
    date: "16 Dec 2025",
    readTime: "5 min read",
    views: "4.2K",
    isNew: false
  },
  {
    id: 4,
    title: "From 2 Acres to 20: Ramesh\'s Organic Farming Success",
    excerpt: "Discover how Ramesh Singh transformed his small farm into a thriving organic enterprise, increasing his income by 300% while preserving soil health and earning carbon credits through sustainable practices.",
    category: "Success Stories",
    categoryId: "success-stories",
    author: "Ramesh Singh",
    authorRole: "Organic Farmer",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_13ece6189-1763298625917.png",
    authorImageAlt: "Proud Indian farmer Ramesh Singh standing in organic vegetable field wearing traditional white kurta with satisfied smile",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c723d67e-1766218920514.png",
    imageAlt: "Successful Indian farmer standing proudly in lush organic vegetable farm with healthy crops and traditional farming tools",
    date: "15 Dec 2025",
    readTime: "10 min read",
    views: "5.6K",
    isNew: false
  },
  {
    id: 5,
    title: "AI-Powered Pest Detection: Interview with Dr. Meena",
    excerpt: "Leading agricultural AI researcher Dr. Meena Gupta explains how artificial intelligence is revolutionizing pest management, helping farmers detect and treat crop diseases before they spread.",
    category: "Expert Interviews",
    categoryId: "expert-interviews",
    author: "Dr. Meena Gupta",
    authorRole: "AI Research Lead",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_12f17af99-1763296687763.png",
    authorImageAlt: "Professional portrait of Indian female AI researcher Dr. Meena Gupta in modern office setting wearing formal attire",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_194ad82d6-1764650746007.png",
    imageAlt: "Modern agricultural technology showing smartphone with AI pest detection app analyzing crop disease in green farm field",
    date: "14 Dec 2025",
    readTime: "12 min read",
    views: "3.8K",
    isNew: false
  },
  {
    id: 6,
    title: "Rice Cultivation Best Practices for Kharif Season",
    excerpt: "Essential techniques for successful rice farming including nursery preparation, transplanting methods, water management, and nutrient application schedules optimized for the upcoming Kharif season.",
    category: "Crop Guides",
    categoryId: "crop-guides",
    author: "Dr. Suresh Reddy",
    authorRole: "Rice Specialist",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11dfaa315-1763300585531.png",
    authorImageAlt: "Experienced Indian agricultural specialist Dr. Suresh Reddy in rice field wearing traditional white shirt with expert demeanor",
    image: "https://images.unsplash.com/photo-1456032491846-591c72902886",
    imageAlt: "Vibrant green rice paddy field with water reflecting sky and healthy rice plants growing in organized rows during Kharif season",
    date: "13 Dec 2025",
    readTime: "9 min read",
    views: "2.9K",
    isNew: false
  }];


  const featuredExpert = {
    name: "Dr. Anjali Verma",
    designation: "Chief Agricultural Officer, AgriMitra",
    designationHi: "मुख्य कृषि अधिकारी, AgriMitra",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_124bbe54a-1763295891998.png",
    imageAlt: "Distinguished Indian female agricultural officer Dr. Anjali Verma in professional attire with warm smile and confident posture",
    bio: "With over 20 years of experience in sustainable agriculture and farmer education, Dr. Verma leads AgriMitra's content strategy to empower farmers with actionable insights and modern farming techniques.",
    expertise: ["Sustainable Farming", "Crop Management", "Soil Health", "Climate Adaptation"],
    articles: 45,
    followers: "12.5K"
  };

  const trendingTopics = [
  { name: "Organic Farming", count: 156 },
  { name: "Drip Irrigation", count: 142 },
  { name: "Soil Testing", count: 128 },
  { name: "Carbon Credits", count: 115 },
  { name: "Weather Alerts", count: 98 },
  { name: "Pest Control", count: 87 }];


  useEffect(() => {
    let filtered = newsletters;

    if (activeCategory !== 'all') {
      filtered = filtered?.filter((n) => n?.categoryId === activeCategory);
    }

    if (searchQuery?.trim()) {
      filtered = filtered?.filter((n) =>
      n?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      n?.excerpt?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      n?.author?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    setFilteredNewsletters(filtered);
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>Newsletter Hub - AgriMitra Digital Platform</title>
        <meta name="description" content="Subscribe to AgriMitra newsletter for daily farming insights, weather alerts, expert interviews, and government scheme updates. Join 50,000+ farmers growing smarter." />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="main-content flex-1">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Icon name="Newspaper" size={16} />
                  Newsletter & Insights Portal
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                  Stay Informed, Grow Smarter
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-2">
                  Daily farming insights, expert guidance, and agricultural updates delivered to your inbox
                </p>
                <p className="text-sm text-muted-foreground">
                  दैनिक खेती की जानकारी, विशेषज्ञ मार्गदर्शन और कृषि अपडेट
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              resultsCount={filteredNewsletters?.length} />


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 mt-8">
              <div className="lg:col-span-1 space-y-6">
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory} />


                <div className="hidden lg:block">
                  <SubscriptionPanel />
                </div>

                <TrendingTopics topics={trendingTopics} />
              </div>

              <div className="lg:col-span-3 space-y-8">
                {filteredNewsletters?.length > 0 &&
                <NewsletterCard newsletter={filteredNewsletters?.[0]} featured={true} />
                }

                <FeaturedExpert expert={featuredExpert} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredNewsletters?.slice(1)?.map((newsletter) =>
                  <NewsletterCard key={newsletter?.id} newsletter={newsletter} />
                  )}
                </div>

                {filteredNewsletters?.length === 0 &&
                <div className="text-center py-12 md:py-16">
                    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={40} color="var(--color-muted-foreground)" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      No Articles Found
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}>

                      Clear Filters
                    </Button>
                  </div>
                }

                <div className="lg:hidden">
                  <SubscriptionPanel />
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 md:p-8 text-center border-2 border-primary/20">
                  <Icon name="Bell" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
                    Never Miss an Update
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">
                    Get instant notifications for weather alerts, government schemes, and expert insights
                  </p>
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Smartphone"
                    iconPosition="left"
                    onClick={() => window.open('https://play.google.com', '_blank')}>

                    Download AgriMitra App
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <BottomNav />
      </div>
    </>);

};

export default NewsletterHub;