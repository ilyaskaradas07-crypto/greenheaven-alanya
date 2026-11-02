export interface ReservationFormData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  date: string;
  time: string;
  guests: number;
  seating: 'Indoor' | 'Outdoor' | 'No Preference';
  occasion: 'Dinner' | 'Lunch' | 'Birthday' | 'Family Gathering' | 'Sports Match' | 'Other';
  specialRequests: string;
  privacyConsent: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ReservationFormData, string>>;
}

/**
 * Checks whether a given YYYY-MM-DD date string is strictly in the past (before today's local date)
 */
export function isDateInPast(dateStr: string): boolean {
  if (!dateStr) return false;
  const targetDate = new Date(dateStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return targetDate.getTime() < today.getTime();
}

/**
 * Validates a reservation form submission according to luxury hospitality rules
 */
export function validateReservation(data: ReservationFormData): ValidationResult {
  const errors: Partial<Record<keyof ReservationFormData, string>> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  const cleanPhone = data.phone.replace(/[\s\-\(\)]/g, '');
  if (!cleanPhone || cleanPhone.length < 6 || !/^\d+$/.test(cleanPhone)) {
    errors.phone = 'Please enter a valid phone number (digits only).';
  }

  if (!data.date) {
    errors.date = 'Please select a reservation date.';
  } else if (isDateInPast(data.date)) {
    errors.date = 'Reservation date cannot be in the past.';
  }

  if (!data.time) {
    errors.time = 'Please select a preferred time.';
  }

  if (!data.guests || data.guests < 1 || data.guests > 30) {
    errors.guests = 'Party size must be between 1 and 30 guests.';
  }

  if (!data.privacyConsent) {
    errors.privacyConsent = 'You must acknowledge the privacy notice to proceed.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Builds the official WhatsApp reservation URL using the verified restaurant phone number
 * Template follows Master Prompt:
 * 
 * "Hello Green Heaven! I would like to request a table.
 * 
 * Name: [Guest Name]
 * Date: [Reservation Date]
 * Time: [Preferred Time]
 * Guests: [Number of Guests]
 * Seating: [Seating Preference]
 * Occasion: [Occasion]
 * Special Requests: [Special Requests]
 * 
 * Please let me know if a table is available. Thank you!"
 */
export function buildWhatsAppReservationUrl(
  phoneRaw: string,
  data: Partial<ReservationFormData>
): string {
  const name = data.fullName?.trim() || '[Guest Name]';
  const date = data.date || '[Reservation Date]';
  const time = data.time || '[Preferred Time]';
  const guests = data.guests ? String(data.guests) : '[Number of Guests]';
  const seating = data.seating || 'No Preference';
  const occasion = data.occasion || 'Dinner';
  const specialRequests = data.specialRequests?.trim() || 'None';

  const message = [
    'Hello Green Heaven! I would like to request a table.',
    '',
    `Name: ${name}`,
    `Date: ${date}`,
    `Time: ${time}`,
    `Guests: ${guests}`,
    `Seating: ${seating}`,
    `Occasion: ${occasion}`,
    `Special Requests: ${specialRequests}`,
    '',
    'Please let me know if a table is available. Thank you!',
  ].join('\n');

  // Strip non-digit characters from the phone number
  const cleanPhone = phoneRaw.replace(/\D/g, '');

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
