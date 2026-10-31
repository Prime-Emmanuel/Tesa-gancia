/**
 * Validation utilities for Cameroon phone numbers, email, and security sanitization.
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates Cameroonian phone numbers:
 * Must be 9 digits (locally, starting with 6 for mobile or 2 for landline/fixed),
 * with optional +237 or 00237 or 237 country code prefix.
 */
export function validateCameroonPhone(phone: string, lang: 'fr' | 'en' = 'fr'): ValidationResult {
  if (!phone || !phone.trim()) {
    return {
      isValid: false,
      error: lang === 'fr' ? 'Le numéro de téléphone est requis.' : 'Phone number is required.',
    };
  }

  // Remove spaces, hyphens, dots, parentheses
  const cleaned = phone.replace(/[\s\-.()]/g, '');

  // Match:
  // 1) Optional +(237) or 00237 or 237
  // 2) Followed by 6 or 2
  // 3) Followed by 8 more digits (total 9 digits in Cameroon national number)
  const regex = /^(?:\+237|00237|237)?[26]\d{8}$/;

  if (!regex.test(cleaned)) {
    return {
      isValid: false,
      error:
        lang === 'fr'
          ? 'Numéro camerounais invalide (+237 6XX XXX XXX ou +237 2XX XXX XXX).'
          : 'Invalid Cameroon phone number (+237 6XX XXX XXX or +237 2XX XXX XXX).',
    };
  }

  return { isValid: true };
}

export function validateEmail(email: string, lang: 'fr' | 'en' = 'fr'): ValidationResult {
  if (!email || !email.trim()) {
    return {
      isValid: false,
      error: lang === 'fr' ? "L'adresse email est requise." : 'Email address is required.',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return {
      isValid: false,
      error: lang === 'fr' ? 'Adresse email non valide.' : 'Invalid email address.',
    };
  }

  return { isValid: true };
}

export function sanitizeText(input: string): string {
  if (!input) return '';
  return input
    .replace(/[<>]/g, '') // remove HTML tags
    .trim();
}
