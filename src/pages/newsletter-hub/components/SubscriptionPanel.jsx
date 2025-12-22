import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox, CheckboxGroup } from '../../../components/ui/Checkbox';

const SubscriptionPanel = () => {
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('english');
  const [preferences, setPreferences] = useState({
    cropGuides: true,
    weatherAlerts: true,
    expertInterviews: false,
    governmentSchemes: true,
    successStories: false
  });
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e?.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
    }, 1500);
  };

  const handlePreferenceChange = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev?.[key] }));
  };

  if (subscribed) {
    return (
      <div className="bg-success/10 border-2 border-success rounded-xl p-6 md:p-8 text-center">
        <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Check" size={32} color="#FFFFFF" />
        </div>
        <h3 className="text-xl font-heading font-bold text-foreground mb-2">
          Subscription Successful!
        </h3>
        <p className="text-sm text-muted-foreground mb-1">
          Welcome to AgriMitra Newsletter Community
        </p>
        <p className="text-xs text-muted-foreground">
          आपका स्वागत है AgriMitra न्यूज़लेटर समुदाय में
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 md:p-8 border-2 border-primary/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="Mail" size={24} color="#FFFFFF" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">
            Subscribe to Newsletter
          </h3>
          <p className="text-xs text-muted-foreground">न्यूज़लेटर की सदस्यता लें</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Get daily farming insights, weather alerts, and expert guidance delivered to your inbox. Join 50,000+ farmers growing smarter.
      </p>
      <form onSubmit={handleSubscribe} className="space-y-4">
        <Input
          type="email"
          label="Email Address"
          placeholder="farmer@example.com"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          required
        />

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Preferred Language / पसंदीदा भाषा
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setLanguage('english')}
              className={`p-3 rounded-lg border-2 transition-organic ${
                language === 'english' ?'border-primary bg-primary/10 text-primary' :'border-border bg-background text-foreground'
              }`}
            >
              <p className="text-sm font-semibold">English</p>
            </button>
            <button
              type="button"
              onClick={() => setLanguage('hindi')}
              className={`p-3 rounded-lg border-2 transition-organic ${
                language === 'hindi' ?'border-primary bg-primary/10 text-primary' :'border-border bg-background text-foreground'
              }`}
            >
              <p className="text-sm font-semibold">हिंदी</p>
            </button>
          </div>
        </div>

        <CheckboxGroup label="Content Preferences / सामग्री प्राथमिकताएं">
          <Checkbox
            label="Crop Cultivation Guides"
            description="फसल खेती गाइड"
            checked={preferences?.cropGuides}
            onChange={() => handlePreferenceChange('cropGuides')}
          />
          <Checkbox
            label="Weather Alerts"
            description="मौसम अलर्ट"
            checked={preferences?.weatherAlerts}
            onChange={() => handlePreferenceChange('weatherAlerts')}
          />
          <Checkbox
            label="Expert Interviews"
            description="विशेषज्ञ साक्षात्कार"
            checked={preferences?.expertInterviews}
            onChange={() => handlePreferenceChange('expertInterviews')}
          />
          <Checkbox
            label="Government Schemes"
            description="सरकारी योजनाएं"
            checked={preferences?.governmentSchemes}
            onChange={() => handlePreferenceChange('governmentSchemes')}
          />
          <Checkbox
            label="Success Stories"
            description="सफलता की कहानियां"
            checked={preferences?.successStories}
            onChange={() => handlePreferenceChange('successStories')}
          />
        </CheckboxGroup>

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={loading}
          iconName="Send"
          iconPosition="right"
        >
          Subscribe Now
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By subscribing, you agree to receive educational content and updates. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
};

export default SubscriptionPanel;