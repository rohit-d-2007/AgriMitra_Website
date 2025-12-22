import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are carbon credits and how do they work?",
      questionHi: "कार्बन क्रेडिट क्या हैं और वे कैसे काम करते हैं?",
      answer: "Carbon credits are certificates representing the reduction of one tonne of carbon dioxide (CO₂) equivalent from the atmosphere. When you adopt sustainable farming practices that reduce carbon emissions or increase carbon sequestration, you earn these credits. These credits can then be sold to companies or organizations looking to offset their carbon footprint. Each credit is verified through international standards and recorded on blockchain for transparency."
    },
    {
      question: "What is the minimum land size required to participate?",
      questionHi: "भाग लेने के लिए न्यूनतम भूमि का आकार क्या है?",
      answer: "The minimum land size required is 5 acres of cultivable land. However, we encourage farmers with smaller holdings to form cooperatives or farmer producer organizations (FPOs) to collectively participate in the program. This allows smaller farmers to benefit from carbon credit opportunities while maintaining the efficiency of verification and monitoring processes."
    },
    {
      question: "How much can I earn from carbon credits?",
      questionHi: "मैं कार्बन क्रेडिट से कितना कमा सकता हूं?",
      answer: "Earnings vary based on your land size, farming practices, and carbon reduction achieved. On average, farmers earn between ₹1.5 lakhs to ₹4 lakhs annually. The current market rate is approximately ₹1,800 per carbon credit. Organic farming practices and efficient water management can increase your carbon credit generation by 30-50%. Our calculator tool can provide a personalized estimate based on your specific farm details."
    },
    {
      question: "How long does the verification process take?",
      questionHi: "सत्यापन प्रक्रिया में कितना समय लगता है?",
      answer: "The initial enrollment and document verification takes 48 hours. Once enrolled, your farm will be monitored continuously using AI-powered sensors and satellite imagery. Carbon credits are calculated and verified quarterly. The first credit issuance typically occurs 90-120 days after enrollment, depending on your farming practices and seasonal factors. Subsequent credits are issued every quarter."
    },
    {
      question: "What sustainable practices qualify for carbon credits?",
      questionHi: "कार्बन क्रेडिट के लिए कौन सी टिकाऊ प्रथाएं योग्य हैं?",
      answer: "Qualifying practices include: organic composting and reduced chemical fertilizer use, crop rotation and intercropping, water conservation through drip/sprinkler irrigation, no-till or minimum tillage farming, agroforestry and tree plantation, cover cropping and mulching, integrated pest management, and renewable energy usage. Our expert team will guide you on implementing these practices effectively while maintaining or improving your crop yields."
    },
    {
      question: "How are payments processed and when do I receive them?",
      questionHi: "भुगतान कैसे संसाधित होते हैं और मुझे कब मिलते हैं?",
      answer: "Payments are processed directly to your registered bank account within 7 working days after credit verification and sale. We use secure payment gateways and maintain complete transaction transparency through blockchain records. You can track your credit generation, sales, and payment status in real-time through our mobile app. There are no hidden charges - you receive 100% of the credit sale value."
    },
    {
      question: "Is there any cost to join the program?",
      questionHi: "कार्यक्रम में शामिल होने के लिए कोई लागत है?",
      answer: "No, enrollment in the AgriMitra Carbon Credit Program is completely free. There are no registration fees, subscription charges, or hidden costs. We only charge a small service fee (5%) when your credits are successfully sold, which covers verification, monitoring, and transaction costs. This ensures that the program is accessible to all farmers regardless of their financial situation."
    },
    {
      question: "What happens if I want to exit the program?",
      questionHi: "यदि मैं कार्यक्रम से बाहर निकलना चाहता हूं तो क्या होगा?",
      answer: "You can exit the program at any time with 30 days notice. Any credits already generated and verified will be processed and paid to you. There are no exit penalties or fees. However, we encourage farmers to continue for at least one full agricultural year to maximize benefits and see the full impact of sustainable practices on both income and soil health."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-background py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="HelpCircle" size={18} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Common Questions</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Everything you need to know about our carbon credit program
          </p>
        </div>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-organic border border-border overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted transition-colors duration-300"
              >
                <div className="flex-1 pr-4">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                    {faq?.question}
                  </h3>
                  <p className="text-xs md:text-sm text-accent font-medium">
                    {faq?.questionHi}
                  </p>
                </div>
                <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <Icon name="ChevronDown" size={24} color="var(--color-primary)" />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {faq?.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-br from-primary/10 via-success/10 to-accent/10 rounded-xl p-6 md:p-8 text-center">
          <Icon name="MessageCircle" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            Still Have Questions?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you understand the carbon credit program and guide you through the enrollment process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300">
              <Icon name="Phone" size={18} className="mr-2" />
              Call: 1800-XXX-XXXX
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-300">
              <Icon name="Mail" size={18} className="mr-2" />
              Email Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;