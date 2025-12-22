import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LiveDemoSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const sampleImages = [
  {
    id: 1,
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_15b803644-1765116110692.png",
    alt: "Close-up of tomato plant leaf showing brown spots and yellowing edges indicating early blight disease on green foliage",
    disease: "Early Blight",
    diseaseHi: "अर्ली ब्लाइट",
    severity: "Moderate",
    confidence: 94
  },
  {
    id: 2,
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_1abc9f58f-1764682701326.png",
    alt: "Wheat plant leaves with rust-colored pustules and orange spores covering leaf surface showing wheat rust fungal infection",
    disease: "Wheat Rust",
    diseaseHi: "गेहूं का रतुआ",
    severity: "High",
    confidence: 96
  },
  {
    id: 3,
    url: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8e8ee64-1764844200332.png",
    alt: "Rice paddy leaves displaying brown lesions and wilting symptoms characteristic of bacterial leaf blight disease in wet field conditions",
    disease: "Bacterial Leaf Blight",
    diseaseHi: "बैक्टीरियल लीफ ब्लाइट",
    severity: "Moderate",
    confidence: 92
  }];


  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setResult(null);
  };

  const handleAnalyze = () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      setResult({
        disease: selectedImage?.disease,
        diseaseHi: selectedImage?.diseaseHi,
        severity: selectedImage?.severity,
        confidence: selectedImage?.confidence,
        treatment: "Apply copper-based fungicide. Remove affected leaves. Ensure proper spacing for air circulation.",
        treatmentHi: "तांबा आधारित कवकनाशी लगाएं। प्रभावित पत्तियों को हटा दें। हवा के संचार के लिए उचित दूरी सुनिश्चित करें।",
        prevention: "Rotate crops annually. Use disease-resistant varieties. Maintain field hygiene.",
        preventionHi: "वार्षिक फसल चक्र अपनाएं। रोग प्रतिरोधी किस्मों का उपयोग करें। खेत की स्वच्छता बनाए रखें।"
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setResult(null);
    setIsAnalyzing(false);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Icon name="Zap" size={18} />
            <span className="text-xs md:text-sm font-semibold">Interactive Demo</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Experience AI Diagnosis Live
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Select a sample image to see how our AI instantly identifies plant diseases and provides treatment recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
              Select Sample Image
            </h3>
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
              {sampleImages?.map((image) =>
              <button
                key={image?.id}
                onClick={() => handleImageSelect(image)}
                className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                selectedImage?.id === image?.id ?
                'border-primary shadow-organic' :
                'border-border hover:border-primary/50'}`
                }>

                  <Image
                  src={image?.url}
                  alt={image?.alt}
                  className="w-full h-24 md:h-32 object-cover" />

                  {selectedImage?.id === image?.id &&
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Check" size={16} color="#FFFFFF" />
                      </div>
                    </div>
                }
                </button>
              )}
            </div>

            {selectedImage &&
            <div className="bg-card rounded-xl p-4 md:p-6 shadow-organic mb-6">
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <Image
                  src={selectedImage?.url}
                  alt={selectedImage?.alt}
                  className="w-full h-48 md:h-64 object-cover" />

                </div>
                <div className="flex gap-3">
                  <Button
                  variant="default"
                  fullWidth
                  iconName="Scan"
                  iconPosition="left"
                  loading={isAnalyzing}
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}>

                    {isAnalyzing ? 'Analyzing...' : 'Analyze Image'}
                  </Button>
                  <Button
                  variant="outline"
                  iconName="RotateCcw"
                  onClick={handleReset}>

                    Reset
                  </Button>
                </div>
              </div>
            }

            {!selectedImage &&
            <div className="bg-card rounded-xl p-6 md:p-8 text-center border-2 border-dashed border-border">
                <Icon name="ImagePlus" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
                <p className="text-sm md:text-base text-muted-foreground">
                  Select a sample image above to start the diagnosis
                </p>
              </div>
            }
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
              Diagnosis Results
            </h3>
            {result ?
            <div className="bg-card rounded-xl p-4 md:p-6 shadow-organic space-y-6">
                <div className="flex items-start space-x-4 pb-6 border-b border-border">
                  <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" size={24} color="var(--color-success)" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-lg md:text-xl font-bold text-foreground mb-1">
                      {result?.disease}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {result?.diseaseHi}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    result?.severity === 'High' ? 'bg-error/10 text-error' :
                    result?.severity === 'Moderate' ? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'}`
                    }>
                        <Icon name="AlertCircle" size={14} />
                        <span>{result?.severity}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result?.confidence}% Confidence
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="Pill" size={20} color="var(--color-primary)" />
                    <h4 className="text-base md:text-lg font-semibold text-foreground">
                      Treatment Recommendation
                    </h4>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    {result?.treatment}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {result?.treatmentHi}
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="Shield" size={20} color="var(--color-primary)" />
                    <h4 className="text-base md:text-lg font-semibold text-foreground">
                      Prevention Tips
                    </h4>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    {result?.prevention}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {result?.preventionHi}
                  </p>
                </div>

                <Button
                variant="default"
                fullWidth
                iconName="Download"
                iconPosition="left"
                onClick={() => window.open('https://play.google.com', '_blank')}>

                  Get Full Diagnosis in App
                </Button>
              </div> :

            <div className="bg-card rounded-xl p-6 md:p-8 text-center border-2 border-dashed border-border h-full flex flex-col items-center justify-center min-h-[400px]">
                <Icon name="ScanLine" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
                <p className="text-sm md:text-base text-muted-foreground mb-2">
                  Waiting for analysis...
                </p>
                <p className="text-xs text-muted-foreground">
                  Select an image and click "Analyze Image" to see results
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>);

};

export default LiveDemoSection;