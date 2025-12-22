import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const BlockchainVisualizationSection = () => {
  const [activeTransaction, setActiveTransaction] = useState(0);

  const transactions = [
    {
      id: "TX001",
      type: "Farm Registration",
      farmer: "Rajesh Patel",
      location: "Gujarat",
      timestamp: "2025-01-15 10:30 AM",
      status: "Verified",
      hash: "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385",
      details: "25 acres registered for organic farming practices"
    },
    {
      id: "TX002",
      type: "Carbon Measurement",
      farmer: "Sunita Devi",
      location: "Punjab",
      timestamp: "2025-02-20 02:15 PM",
      status: "Verified",
      hash: "0x3c2c2eb7b11a91385f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ea",
      details: "45 tonnes CO₂ sequestration verified via satellite imagery"
    },
    {
      id: "TX003",
      type: "Credit Issuance",
      farmer: "Mohan Kumar",
      location: "Karnataka",
      timestamp: "2025-03-10 11:45 AM",
      status: "Completed",
      hash: "0xab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385f9fade1c0d57a7af6",
      details: "38 carbon credits issued and recorded on blockchain"
    },
    {
      id: "TX004",
      type: "Credit Sale",
      farmer: "Priya Sharma",
      location: "Maharashtra",
      timestamp: "2025-04-05 04:20 PM",
      status: "Completed",
      hash: "0x1a91385f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b",
      details: "52 credits sold to verified corporate buyer for ₹93,600"
    }
  ];

  const blockchainFeatures = [
    {
      icon: "Shield",
      title: "Immutable Records",
      titleHi: "अपरिवर्तनीय रिकॉर्ड",
      description: "Every transaction is permanently recorded and cannot be altered or deleted"
    },
    {
      icon: "Eye",
      title: "Full Transparency",
      titleHi: "पूर्ण पारदर्शिता",
      description: "Track your credits from creation to sale with complete visibility"
    },
    {
      icon: "Lock",
      title: "Secure Verification",
      titleHi: "सुरक्षित सत्यापन",
      description: "Cryptographic security ensures authenticity of all carbon credits"
    },
    {
      icon: "Zap",
      title: "Instant Settlement",
      titleHi: "तत्काल निपटान",
      description: "Smart contracts enable automatic payment upon credit verification"
    }
  ];

  return (
    <section className="bg-background py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Icon name="Link" size={18} color="var(--color-accent)" />
            <span className="text-sm font-medium text-accent">Blockchain Technology</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transparent & Secure Verification
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Every carbon credit is tracked on blockchain for complete transparency and tamper-proof certification
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-organic">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Recent Transactions</h3>
            
            <div className="space-y-4">
              {transactions?.map((tx, index) => (
                <button
                  key={tx?.id}
                  onClick={() => setActiveTransaction(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    activeTransaction === index
                      ? 'border-primary bg-primary/5' :'border-border bg-background hover:bg-muted'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        tx?.status === 'Verified' ? 'bg-success/10' : 'bg-primary/10'
                      }`}>
                        <Icon 
                          name={tx?.status === 'Verified' ? 'CheckCircle' : 'Package'} 
                          size={20} 
                          color={tx?.status === 'Verified' ? 'var(--color-success)' : 'var(--color-primary)'} 
                        />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{tx?.type}</div>
                        <div className="text-xs text-muted-foreground">{tx?.id}</div>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      tx?.status === 'Verified' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'
                    }`}>
                      {tx?.status}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {tx?.farmer} • {tx?.location} • {tx?.timestamp}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 md:p-8 shadow-organic">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Transaction Details</h3>
            
            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-4">
                <div className="text-xs text-muted-foreground mb-1">Transaction Hash</div>
                <div className="text-xs md:text-sm font-mono text-foreground break-all">
                  {transactions?.[activeTransaction]?.hash}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Farmer</div>
                  <div className="text-sm md:text-base font-semibold text-foreground">
                    {transactions?.[activeTransaction]?.farmer}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Location</div>
                  <div className="text-sm md:text-base font-semibold text-foreground">
                    {transactions?.[activeTransaction]?.location}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-muted-foreground mb-1">Timestamp</div>
                <div className="text-sm md:text-base font-semibold text-foreground">
                  {transactions?.[activeTransaction]?.timestamp}
                </div>
              </div>

              <div>
                <div className="text-xs text-muted-foreground mb-1">Details</div>
                <div className="text-sm md:text-base text-foreground">
                  {transactions?.[activeTransaction]?.details}
                </div>
              </div>

              <div className="bg-success/10 rounded-lg p-4 border border-success/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  <span className="text-sm font-semibold text-success">Blockchain Verified</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  This transaction has been verified and permanently recorded on the blockchain with cryptographic security
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blockchainFeatures?.map((feature) => (
            <div
              key={feature?.title}
              className="bg-card rounded-xl p-6 shadow-organic hover:shadow-organic-lg transition-all duration-300 border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature?.icon} size={24} color="var(--color-primary)" />
              </div>
              <h4 className="text-base md:text-lg font-bold text-foreground mb-2">{feature?.title}</h4>
              <p className="text-xs text-accent font-medium mb-2">{feature?.titleHi}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockchainVisualizationSection;