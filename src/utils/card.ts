const VISA = 'VISA';
const AMEX = 'AMEX';
const MASTERCARD = 'MASTERCARD';
const DISCOVER = 'DISCOVER';
const UNIONPAY = 'UNIONPAY';
const TRPY = 'TRPY';
const DINERSCLUB = 'DINERSCLUB';
const JCB = 'JCB';

export function cardType(number: string): string {
  if (number.match(/^4/) != null) return VISA;
  if (number.match(/^(34|37)/) != null) return AMEX;
  if (number.match(/^5[1-5]/) != null) return MASTERCARD;
  if (number.match(/^6011/) != null) return DISCOVER;
  if (number.match(/^62/) != null) return UNIONPAY;
  if (number.match(/^9792/) != null) return TRPY;
  if (number.match(/^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}/) != null) return DINERSCLUB;
  if (number.match(/^35(2[89]|[3-8])/) != null) return JCB;

  return '';
}

export const DEAFULT_CARD_PLACEHOLDER = '#### #### #### ####';
export const DEFAULT_CARD_LENGTH = 19;

export const MONTH_SELECT_OPTIONS = [
  { label: '01', value: 1 },
  { label: '02', value: 2 },
  { label: '03', value: 3 },
  { label: '04', value: 4 },
  { label: '05', value: 5 },
  { label: '06', value: 6 },
  { label: '07', value: 7 },
  { label: '08', value: 8 },
  { label: '09', value: 9 },
  { label: '10', value: 10 },
  { label: '11', value: 11 },
  { label: '12', value: 12 },
];

const currentYear = new Date().getFullYear();
export const YEAR_SELECT_OPTIONS = Array(10)
  .fill(0)
  .map((_, i) => ({ label: currentYear + i, value: currentYear + i }));
