import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PestDiseaseGuide = ({ issues, onAIDiagnosis }) => {
  const [selectedIssue, setSelectedIssue] = useState(null);

  return (
    <div className="bg-card rounded-2xl p-4 md:p-6 lg:p-8 border border-border">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 font-heading">
            Pest & Disease Management
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Common issues and their organic solutions
          </p>
        </div>
        <Button
          variant="default"
          iconName="Scan"
          iconPosition="left"
          onClick={onAIDiagnosis}
          className="w-full md:w-auto"
        >
          AI Diagnosis
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {issues?.map((issue, index) => (
          <div
            key={index}
            className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedIssue(selectedIssue === index ? null : index)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={issue?.image}
                alt={issue?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
                issue?.severity === 'High' ?'bg-error text-error-foreground'
                  : issue?.severity === 'Medium' ?'bg-warning text-warning-foreground' :'bg-success text-success-foreground'
              }`}>
                {issue?.severity} Risk
              </div>
            </div>

            <div className="p-4 md:p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 line-clamp-1">
                    {issue?.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{issue?.nameHindi}</p>
                </div>
                <Icon
                  name={issue?.type === 'Pest' ? 'Bug' : 'Virus'}
                  size={20}
                  color="var(--color-primary)"
                />
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {issue?.description}
              </p>

              {selectedIssue === index && (
                <div className="space-y-4 pt-4 border-t border-border animate-in fade-in duration-300">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                      <Icon name="AlertCircle" size={16} className="mr-2" />
                      Symptoms
                    </h4>
                    <ul className="space-y-1">
                      {issue?.symptoms?.map((symptom, idx) => (
                        <li key={idx} className="text-xs md:text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                      <Icon name="Leaf" size={16} className="mr-2" color="var(--color-success)" />
                      Organic Solutions
                    </h4>
                    <ul className="space-y-1">
                      {issue?.organicSolutions?.map((solution, idx) => (
                        <li key={idx} className="text-xs md:text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">✓</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground">Prevention Cost</span>
                    <span className="text-sm font-semibold text-success">₹{issue?.preventionCost}</span>
                  </div>
                </div>
              )}

              <button
                className="w-full mt-4 text-sm text-primary hover:text-primary/80 transition-colors duration-300 flex items-center justify-center"
                onClick={(e) => {
                  e?.stopPropagation();
                  setSelectedIssue(selectedIssue === index ? null : index);
                }}
              >
                {selectedIssue === index ? 'Show Less' : 'View Details'}
                <Icon
                  name={selectedIssue === index ? 'ChevronUp' : 'ChevronDown'}
                  size={16}
                  className="ml-1"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PestDiseaseGuide;