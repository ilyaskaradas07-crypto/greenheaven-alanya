import test from 'node:test';
import assert from 'node:assert/strict';
import { validateReservation, buildWhatsAppReservationUrl, isDateInPast, ReservationFormData } from './reservation';

test('isDateInPast identifies past dates correctly', () => {
  assert.equal(isDateInPast('2000-01-01'), true);
  // A future date in 2030
  assert.equal(isDateInPast('2030-12-31'), false);
});

test('validateReservation passes on valid submission', () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toISOString().split('T')[0];

  const validData: ReservationFormData = {
    fullName: 'Alexander Wright',
    email: 'alex.wright@example.com',
    phone: '5399443204',
    countryCode: '+90',
    date: dateStr,
    time: '19:30',
    guests: 4,
    seating: 'Outdoor',
    occasion: 'Dinner',
    specialRequests: 'Terrace table near big screen please',
    privacyConsent: true,
  };

  const result = validateReservation(validData);
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validateReservation rejects invalid email and past date', () => {
  const invalidData: ReservationFormData = {
    fullName: 'J',
    email: 'notanemail',
    phone: 'abc',
    countryCode: '+90',
    date: '2020-01-01',
    time: '',
    guests: 0,
    seating: 'Indoor',
    occasion: 'Sports Match',
    specialRequests: '',
    privacyConsent: false,
  };

  const result = validateReservation(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.date);
  assert.ok(result.errors.time);
  assert.ok(result.errors.guests);
  assert.ok(result.errors.privacyConsent);
});

test('buildWhatsAppReservationUrl constructs properly formatted WhatsApp link', () => {
  const data: Partial<ReservationFormData> = {
    fullName: 'Emily Davis',
    date: '2026-11-15',
    time: '20:00',
    guests: 2,
    seating: 'Outdoor',
    occasion: 'Sports Match',
    specialRequests: 'Champions League viewing',
  };

  const url = buildWhatsAppReservationUrl('905399443204', data);
  assert.ok(url.startsWith('https://wa.me/905399443204?text='));
  assert.ok(url.includes('Emily%20Davis') || url.includes('Emily+Davis'));
  assert.ok(url.includes('2026-11-15'));
  assert.ok(url.includes('Outdoor'));
  assert.ok(url.includes('Sports%20Match') || url.includes('Sports+Match'));
});
