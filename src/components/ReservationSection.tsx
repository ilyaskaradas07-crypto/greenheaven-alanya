import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  Clock,
  Users,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Phone,
  Shield,
  Send,
  Car,
  MapPin,
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';
import {
  ReservationFormData,
  validateReservation,
  buildWhatsAppReservationUrl,
} from '../utils/reservation';

interface ReservationSectionProps {
  preselectedOccasion?: string;
  focusFormTrigger?: number;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  preselectedOccasion,
  focusFormTrigger,
}) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+90',
    date: todayStr,
    time: '19:30',
    guests: 2,
    seating: 'Outdoor',
    occasion: (preselectedOccasion as any) || 'Dinner',
    specialRequests: '',
    privacyConsent: true,
  });

  const [hotelShuttleNeeded, setHotelShuttleNeeded] = useState(false);
  const [hotelName, setHotelName] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationFormData | null>(null);

  useEffect(() => {
    if (preselectedOccasion) {
      setFormData((prev) => ({
        ...prev,
        occasion: preselectedOccasion as any,
        specialRequests:
          preselectedOccasion === 'Sports Match' && !prev.specialRequests
            ? 'Match / game viewing table please'
            : prev.specialRequests,
      }));
    }

    if (focusFormTrigger && focusFormTrigger > 0) {
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 300);
    }
  }, [preselectedOccasion, focusFormTrigger]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof ReservationFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let compiledRequests = formData.specialRequests;
    if (hotelShuttleNeeded && hotelName.trim()) {
      compiledRequests = `${compiledRequests ? compiledRequests + ' | ' : ''}Hotel Shuttle Requested from: ${hotelName.trim()}`;
    }

    const payloadToValidate: ReservationFormData = {
      ...formData,
      specialRequests: compiledRequests,
    };

    const validation = validateReservation(payloadToValidate);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(payloadToValidate);
      try {
        const stored = JSON.parse(localStorage.getItem('greenheaven_reservations') || '[]');
        stored.push({
          ...payloadToValidate,
          submittedAt: new Date().toISOString(),
          status: 'Request Received (Pending Restaurant Confirmation)',
        });
        localStorage.setItem('greenheaven_reservations', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }
    }, 500);
  };

  const handleWhatsAppClick = () => {
    let compiledRequests = formData.specialRequests;
    if (hotelShuttleNeeded && hotelName.trim()) {
      compiledRequests = `${compiledRequests ? compiledRequests + ' | ' : ''}Hotel Shuttle Requested from: ${hotelName.trim()}`;
    }

    const url = buildWhatsAppReservationUrl(restaurantData.phoneRaw, {
      ...formData,
      specialRequests: compiledRequests,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reservation" data-section="reservation" className="py-28 bg-[#070B09] relative overflow-hidden scroll-mt-20">
      <div id="contact" className="hidden" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
            White-Glove Dining Concierge
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE4] mb-4">
            Table &amp; Salon Reservations
          </h2>
          <p className="text-sm sm:text-base text-[#E5DDD0]/80 font-light leading-relaxed font-serif-luxury italic max-w-xl mx-auto">
            "Secure your candlelit veranda table or private parlor booth. Complimentary resort chauffeur service available across all Türkler hotels."
          </p>

          {/* Direct Instant Action Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={restaurantData.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 shadow transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Instant WhatsApp (+90 539 944 32 04)</span>
            </a>
            <a
              href={`tel:${restaurantData.phoneRaw}`}
              className="inline-flex items-center space-x-2 bg-[#0D1B15] border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] text-xs font-medium uppercase tracking-wider px-4 py-2.5 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Host Directly</span>
            </a>
          </div>
        </div>

        {/* Main Card Container */}
        <div className="bg-[#0D1B15] border border-[#C5A059]/30 shadow-2xl p-6 sm:p-12">
          
          {submittedData ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 border border-[#C5A059] text-[#C5A059] flex items-center justify-center mx-auto mb-5 bg-[#070B09]">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] block mb-2 font-medium">
                Request Transmitted
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#F5EFE4] mb-3 font-normal">
                Thank You, {submittedData.fullName}
              </h3>
              <p className="text-xs sm:text-sm text-[#E5DDD0]/75 max-w-lg mx-auto mb-8 font-light">
                Your reservation request has been received by the maître d'. We will contact you shortly to confirm your table and chauffeur arrangements.
              </p>

              {/* Summary Card */}
              <div className="bg-[#070B09] border border-[#C5A059]/20 p-6 max-w-lg mx-auto text-left mb-8 space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-[#C5A059]/15 pb-2">
                  <span className="text-[#E5DDD0]/60">Guest Name:</span>
                  <span className="font-medium text-[#F5EFE4]">{submittedData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#C5A059]/15 pb-2">
                  <span className="text-[#E5DDD0]/60">Date &amp; Time:</span>
                  <span className="font-medium text-[#F5EFE4]">{submittedData.date} at {submittedData.time}</span>
                </div>
                <div className="flex justify-between border-b border-[#C5A059]/15 pb-2">
                  <span className="text-[#E5DDD0]/60">Party Size:</span>
                  <span className="font-medium text-[#F5EFE4]">{submittedData.guests} persons</span>
                </div>
                <div className="flex justify-between border-b border-[#C5A059]/15 pb-2">
                  <span className="text-[#E5DDD0]/60">Salon Preference:</span>
                  <span className="font-medium text-[#F5EFE4]">{submittedData.seating} ({submittedData.occasion})</span>
                </div>
                <div className="flex justify-between border-b border-[#C5A059]/15 pb-2">
                  <span className="text-[#E5DDD0]/60">Contact Phone:</span>
                  <span className="font-medium text-[#F5EFE4]">{submittedData.countryCode} {submittedData.phone}</span>
                </div>
                {submittedData.specialRequests && (
                  <div className="flex justify-between pt-1">
                    <span className="text-[#E5DDD0]/60">Special Instructions:</span>
                    <span className="text-right text-[#F5EFE4] max-w-xs">{submittedData.specialRequests}</span>
                  </div>
                )}
              </div>

              {/* Direct Instant Confirmation via WhatsApp */}
              <div className="space-y-4">
                <p className="text-xs text-[#E5DDD0]/70 font-light">
                  For immediate confirmation, open direct concierge WhatsApp with your reservation details:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppClick}
                    className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs uppercase tracking-[0.16em] px-6 py-3.5 shadow-lg transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Concierge (+90 539 944 32 04)</span>
                  </button>

                  <button
                    onClick={() => setSubmittedData(null)}
                    className="text-xs text-[#C5A059] hover:underline py-2 tracking-wider uppercase cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-[0.18em] text-[#C5A059] mb-2 font-medium">
                    Guest Name <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Lord Alexander Wright"
                    className={`w-full bg-[#070B09] border ${
                      errors.fullName ? 'border-red-400' : 'border-[#C5A059]/25'
                    } focus:border-[#C5A059] text-[#F5EFE4] text-xs tracking-wide px-4 py-3.5 focus:outline-none`}
                    required
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.18em] text-[#C5A059] mb-2 font-medium">
                    Email Address <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alexander@chambers.com"
                    className={`w-full bg-[#070B09] border ${
                      errors.email ? 'border-red-400' : 'border-[#C5A059]/25'
                    } focus:border-[#C5A059] text-[#F5EFE4] text-xs tracking-wide px-4 py-3.5 focus:outline-none`}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone with Country Code */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-4">
                  <label htmlFor="countryCode" className="block text-xs uppercase tracking-[0.18em] text-[#C5A059] mb-2 font-medium">
                    Country Dialing
                  </label>
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-full bg-[#070B09] border border-[#C5A059]/25 focus:border-[#C5A059] text-[#F5EFE4] text-xs px-3 py-3.5 focus:outline-none"
                  >
                    <option value="+90">🇹🇷 Turkey (+90)</option>
                    <option value="+44">🇬🇧 United Kingdom (+44)</option>
                    <option value="+49">🇩🇪 Germany (+49)</option>
                    <option value="+31">🇳🇱 Netherlands (+31)</option>
                    <option value="+46">🇸🇪 Sweden (+46)</option>
                    <option value="+47">🇳🇴 Norway (+47)</option>
                    <option value="+45">🇩🇰 Denmark (+45)</option>
                    <option value="+358">🇫🇮 Finland (+358)</option>
                    <option value="+1">🇺🇸 USA / Canada (+1)</option>
                    <option value="+48">🇵🇱 Poland (+48)</option>
                    <option value="+7">🇷🇺 Russia (+7)</option>
                  </select>
                </div>

                <div className="sm:col-span-8">
                  <label htmlFor="phone" className="block text-xs uppercase tracking-[0.18em] text-[#C5A059] mb-2 font-medium">
                    Telephone Number <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 539 944 32 04"
                    className={`w-full bg-[#070B09] border ${
                      errors.phone ? 'border-red-400' : 'border-[#C5A059]/25'
                    } focus:border-[#C5A059] text-[#F5EFE4] text-xs tracking-wide px-4 py-3.5 focus:outline-none`}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Date, Time & Number of Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="date" className="block text-xs uppercase tracking-[0.18em] text-[#C5A059] mb-2 font-medium">
                    Dining Date <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full bg-[#070B09] border ${
                      errors.date ? 'border-red-400' : 'border-[#C5A059]/25'
                    } focus:border-[#C5A059] text-[#F5EFE4] text-xs px-4 py-3.5 focus:outline-none`}
                    required
                  />
                  {errors.date && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="time" className="block text-xs uppercase tracking-[0.18em] text-[#C5A059] mb-2 font-medium">
                    Service Time <span className="text-[#C5A059]">*</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#070B09] border border-[#C5A059]/25 focus:border-[#C5A059] text-[#F5EFE4] text-xs px-4 py-3.5 focus:outline-none"
                    required
                  >
                    <option value="12:00">12:00 (Lunch Service)</option>
                    <option value="13:00">13:00 (Lunch Service)</option>
                    <option value="17:00">17:00 (Early Cellar Pour)</option>
                    <option value="18:30">18:30 (Dinner First Seating)</option>
                    <option value="19:00">19:00 (Prime Dinner)</option>
                    <option value="19:30">19:30 (Prime Dinner &amp; Sunset)</option>
                    <option value="20:00">20:00 (Evening Gala)</option>
                    <option value="20:30">20:30 (Evening &amp; Shows)</option>
                    <option value="21:30">21:30 (Late Cellar Dining)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-xs uppercase tracking-[0.18em] text-[#C5A059] mb-2 font-medium">
                    Party Size <span className="text-[#C5A059]">*</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#070B09] border border-[#C5A059]/25 focus:border-[#C5A059] text-[#F5EFE4] text-xs px-4 py-3.5 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16, 20].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Seating & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="seating" className="block text-xs uppercase tracking-[0.18em] text-[#C5A059] mb-2 font-medium">
                    Salon &amp; Veranda Preference
                  </label>
                  <select
                    id="seating"
                    name="seating"
                    value={formData.seating}
                    onChange={handleChange}
                    className="w-full bg-[#070B09] border border-[#C5A059]/25 focus:border-[#C5A059] text-[#F5EFE4] text-xs px-4 py-3.5 focus:outline-none"
                  >
                    <option value="Outdoor">Candlelit Garden Veranda</option>
                    <option value="Indoor">Indoor Air-Conditioned Dining Room</option>
                    <option value="No Preference">No Preference (Best Available Table)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="occasion" className="block text-xs uppercase tracking-[0.18em] text-[#C5A059] mb-2 font-medium">
                    Occasion / Dining Nature
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full bg-[#070B09] border border-[#C5A059]/25 focus:border-[#C5A059] text-[#F5EFE4] text-xs px-4 py-3.5 focus:outline-none"
                  >
                    <option value="Dinner">Fine Dinner</option>
                    <option value="Lunch">Luncheon</option>
                    <option value="Sports Match">Championship Match Viewing</option>
                    <option value="Birthday">Anniversary / Birthday Celebration</option>
                    <option value="Family Gathering">Family Celebration</option>
                    <option value="Other">Special Occasion</option>
                  </select>
                </div>
              </div>

              {/* White-Glove Resort Chauffeur Option */}
              <div className="bg-[#070B09] p-5 border border-[#C5A059]/30">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hotelShuttleNeeded}
                    onChange={(e) => setHotelShuttleNeeded(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-[#C5A059]"
                  />
                  <div>
                    <span className="text-xs uppercase tracking-[0.16em] text-[#F5EFE4] flex items-center font-semibold">
                      <Car className="w-3.5 h-3.5 mr-2 text-[#C5A059]" />
                      Request Complimentary Resort Chauffeur Transfer (Türkler &amp; Payallar)
                    </span>
                    <p className="text-[11px] text-[#E5DDD0]/70 mt-1 font-light">
                      Green Heaven provides door-to-door private shuttle service for guests staying at Türkler resorts (e.g. Haydarpasha, Long Beach, Eftalia, Sirius Deluxe).
                    </p>
                  </div>
                </label>

                {hotelShuttleNeeded && (
                  <div className="mt-4 pl-7">
                    <input
                      type="text"
                      value={hotelName}
                      onChange={(e) => setHotelName(e.target.value)}
                      placeholder="Please specify your resort name & room number (e.g. Haydarpasha Palace, Room 402)"
                      className="w-full bg-[#0D1B15] border border-[#C5A059]/30 text-xs px-4 py-2.5 text-[#F5EFE4] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                )}
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="specialRequests" className="block text-xs uppercase tracking-[0.18em] text-[#C5A059] mb-2 font-medium">
                  Gastronomic &amp; Table Notes (Optional)
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Dietary requirements, preferred steak cut (e.g. Tomahawk reserved), high chairs, or champagne greeting..."
                  className="w-full bg-[#070B09] border border-[#C5A059]/25 focus:border-[#C5A059] text-[#F5EFE4] text-xs px-4 py-3.5 focus:outline-none resize-none font-light"
                />
              </div>

              {/* Privacy Consent */}
              <div>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 accent-[#C5A059]"
                    required
                  />
                  <span className="text-xs text-[#E5DDD0]/70 leading-relaxed font-light">
                    I agree that Green Heaven may contact me by telephone, WhatsApp, or email to verify table availability and coordinate reservation details.
                  </span>
                </label>
                {errors.privacyConsent && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    {errors.privacyConsent}
                  </p>
                )}
              </div>

              {/* Dual Submit Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2.5 bg-[#C5A059] hover:bg-[#DFC28D] text-[#070B09] font-bold text-xs uppercase tracking-[0.2em] py-4 px-6 shadow-xl transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'TRANSMITTING REQUEST...' : 'TRANSMIT RESERVATION REQUEST'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs uppercase tracking-[0.16em] py-4 px-6 shadow-lg transition-all cursor-pointer"
                  title="Open direct WhatsApp concierge"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>DIRECT WHATSAPP CONCIERGE</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-[#E5DDD0]/60 text-center pt-2 font-light">
                <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>
                  No deposit or upfront fee required. The maître d' will review and confirm availability.
                </span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
