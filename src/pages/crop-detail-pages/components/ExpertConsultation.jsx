import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ExpertConsultation = ({ experts, onClose }) => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: '',
    query: ''
  });

  const consultationTypes = [
    { value: 'phone', label: 'Phone Consultation' },
    { value: 'video', label: 'Video Call' },
    { value: 'visit', label: 'Farm Visit' },
    { value: 'chat', label: 'Chat Support' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    alert(`Consultation booked with ${selectedExpert?.name}!\n\nDetails:\nName: ${formData?.name}\nPhone: ${formData?.phone}\nDate: ${formData?.preferredDate}\nTime: ${formData?.preferredTime}\nType: ${formData?.consultationType}\n\nOur expert will contact you shortly.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-organic-lg">
        <div className="sticky top-0 bg-card border-b border-border p-4 md:p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground font-heading">
              Book Expert Consultation
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Get personalized guidance from agricultural experts
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors duration-300"
            aria-label="Close"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-4 md:p-6 lg:p-8">
          {!selectedExpert ? (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Select an Expert</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experts?.map((expert, index) => (
                  <div
                    key={index}
                    className="bg-background rounded-xl p-4 md:p-6 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedExpert(expert)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={expert?.image}
                          alt={expert?.imageAlt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-background"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
                          {expert?.name}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground mb-2">
                          {expert?.specialization}
                        </p>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={14} color="var(--color-warning)" fill="currentColor" />
                            <span className="text-xs font-medium text-foreground">{expert?.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Users" size={14} color="var(--color-muted-foreground)" />
                            <span className="text-xs text-muted-foreground">{expert?.consultations}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {expert?.languages?.map((lang, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Consultation Fee</span>
                      <span className="text-base font-semibold text-success">₹{expert?.fee}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={selectedExpert?.image}
                    alt={selectedExpert?.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground">{selectedExpert?.name}</h4>
                  <p className="text-sm text-muted-foreground">{selectedExpert?.specialization}</p>
                </div>
                <button
                  onClick={() => setSelectedExpert(null)}
                  className="text-sm text-primary hover:text-primary/80 transition-colors duration-300"
                >
                  Change
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Preferred Date"
                    type="date"
                    name="preferredDate"
                    value={formData?.preferredDate}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    label="Preferred Time"
                    type="time"
                    name="preferredTime"
                    value={formData?.preferredTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Select
                  label="Consultation Type"
                  options={consultationTypes}
                  value={formData?.consultationType}
                  onChange={(value) => setFormData(prev => ({ ...prev, consultationType: value }))}
                  placeholder="Select consultation type"
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Query
                  </label>
                  <textarea
                    name="query"
                    rows="4"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    placeholder="Describe your farming challenge or question..."
                    value={formData?.query}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    iconName="CheckCircle2"
                    iconPosition="left"
                    className="w-full sm:w-auto"
                  >
                    Confirm Booking
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={onClose}
                    className="w-full sm:w-auto"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpertConsultation;