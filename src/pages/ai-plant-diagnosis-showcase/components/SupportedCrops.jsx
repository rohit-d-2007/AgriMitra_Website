import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SupportedCrops = () => {
  const cropCategories = [
  {
    category: "Cereals & Grains",
    categoryHi: "अनाज और दाने",
    icon: "Wheat",
    crops: [
    {
      name: "Wheat",
      nameHi: "गेहूं",
      diseases: 28,
      image: "https://images.unsplash.com/photo-1691248233640-dff365bf32ae",
      imageAlt: "Golden wheat stalks swaying in agricultural field with ripe grain heads ready for harvest under clear blue sky"
    },
    {
      name: "Rice",
      nameHi: "चावल",
      diseases: 32,
      image: "https://images.unsplash.com/photo-1646066448718-6fb0983faa42",
      imageAlt: "Lush green rice paddy field with young rice plants growing in flooded terraced farmland during monsoon season"
    },
    {
      name: "Maize",
      nameHi: "मक्का",
      diseases: 24,
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b37b8e35-1764703690752.png",
      imageAlt: "Tall maize corn plants with broad green leaves and developing corn cobs in rows in agricultural field"
    },
    {
      name: "Bajra",
      nameHi: "बाजरा",
      diseases: 18,
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_183ef7603-1765181444974.png",
      imageAlt: "Pearl millet bajra crop with distinctive cylindrical seed heads growing in dry agricultural land under sunny conditions"
    }]

  },
  {
    category: "Cash Crops",
    categoryHi: "नकदी फसलें",
    icon: "Leaf",
    crops: [
    {
      name: "Cotton",
      nameHi: "कपास",
      diseases: 26,
      image: "https://images.unsplash.com/photo-1570966124207-d35766b132d0",
      imageAlt: "White fluffy cotton bolls opened on green cotton plant branches ready for picking in agricultural plantation"
    },
    {
      name: "Sugarcane",
      nameHi: "गन्ना",
      diseases: 22,
      image: "https://images.unsplash.com/photo-1671868469811-448b3d8b1886",
      imageAlt: "Tall sugarcane stalks with long green leaves growing densely in tropical agricultural field under bright sunlight"
    },
    {
      name: "Tobacco",
      nameHi: "तंबाकू",
      diseases: 16,
      image: "https://images.unsplash.com/photo-1670897521703-02edbd8fc1fc",
      imageAlt: "Large broad tobacco leaves growing on plants in agricultural field with distinctive leaf texture and green color"
    },
    {
      name: "Jute",
      nameHi: "जूट",
      diseases: 14,
      image: "https://images.unsplash.com/photo-1689113401812-54ed34a6eed9",
      imageAlt: "Tall jute plants with fibrous stems and green leaves growing in waterlogged agricultural field during monsoon"
    }]

  },
  {
    category: "Vegetables",
    categoryHi: "सब्जियां",
    icon: "Carrot",
    crops: [
    {
      name: "Tomato",
      nameHi: "टमाटर",
      diseases: 34,
      image: "https://images.unsplash.com/photo-1658099155916-ec6d6aa15e8b",
      imageAlt: "Red ripe tomatoes growing on green vine plants with leaves in vegetable garden under natural sunlight"
    },
    {
      name: "Potato",
      nameHi: "आलू",
      diseases: 28,
      image: "https://images.unsplash.com/photo-1687883927481-493cb6172885",
      imageAlt: "Potato plants with green foliage growing in rows in agricultural field with brown soil visible between plants"
    },
    {
      name: "Onion",
      nameHi: "प्याज",
      diseases: 20,
      image: "https://images.unsplash.com/photo-1714425396242-915d4093800a",
      imageAlt: "Green onion plants with tubular leaves growing in agricultural field with bulbs developing underground"
    },
    {
      name: "Chili",
      nameHi: "मिर्च",
      diseases: 24,
      image: "https://images.unsplash.com/photo-1462254080556-60e2d261d588",
      imageAlt: "Green and red chili peppers hanging from plants with glossy surface in vegetable garden cultivation"
    }]

  },
  {
    category: "Fruits",
    categoryHi: "फल",
    icon: "Apple",
    crops: [
    {
      name: "Mango",
      nameHi: "आम",
      diseases: 22,
      image: "https://images.unsplash.com/photo-1652018539099-2dc2a809856e",
      imageAlt: "Ripe yellow mangoes hanging from tree branches with green leaves in tropical orchard under sunny sky"
    },
    {
      name: "Banana",
      nameHi: "केला",
      diseases: 18,
      image: "https://images.unsplash.com/flagged/photo-1557942333-8d512c0b8263",
      imageAlt: "Green banana bunch growing on banana plant with large broad leaves in tropical plantation setting"
    },
    {
      name: "Grapes",
      nameHi: "अंगूर",
      diseases: 26,
      image: "https://images.unsplash.com/photo-1631079105049-6fd8cb2df402",
      imageAlt: "Purple grape clusters hanging from vine with green leaves in vineyard during harvest season"
    },
    {
      name: "Pomegranate",
      nameHi: "अनार",
      diseases: 16,
      image: "https://images.unsplash.com/photo-1605820859451-a19adf1adede",
      imageAlt: "Red pomegranate fruits growing on tree branches with green leaves in orchard under natural sunlight"
    }]

  }];


  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="Grid3x3" size={18} />
            <span className="text-xs md:text-sm font-semibold">Comprehensive Coverage</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            200+ Diseases Across Major Crops
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI supports diagnosis for all major Indian crops with continuous expansion based on farmer needs
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {cropCategories?.map((category, categoryIndex) =>
          <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={category?.icon} size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                    {category?.category}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category?.categoryHi}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {category?.crops?.map((crop, cropIndex) =>
              <div
                key={cropIndex}
                className="bg-card rounded-xl overflow-hidden shadow-organic hover:shadow-organic-lg transition-all duration-300 group">

                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <Image
                    src={crop?.image}
                    alt={crop?.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-white font-bold text-base md:text-lg mb-1">
                          {crop?.name}
                        </div>
                        <div className="text-white/80 text-xs">
                          {crop?.nameHi}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name="Bug" size={16} color="var(--color-primary)" />
                          <span className="text-sm text-muted-foreground">
                            {crop?.diseases} Diseases
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-success">
                          <Icon name="CheckCircle2" size={16} />
                          <span className="text-xs font-semibold">Supported</span>
                        </div>
                      </div>
                    </div>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-organic inline-block">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Plus" size={24} color="var(--color-primary)" />
              <h3 className="text-lg md:text-xl font-bold text-foreground">
                Continuously Expanding
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              We regularly add new crops and diseases based on farmer requests and regional agricultural patterns. Request support for your crop through the app.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default SupportedCrops;