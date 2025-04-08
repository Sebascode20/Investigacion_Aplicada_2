import convertCurrency from '../utils/conversorDivisa';

describe('convertCurrency', () => {
  it('converts USD to EUR correctly', () => {
    expect(convertCurrency(10, 'USD', 'EUR')).toBe(9);
  });

  it('converts EUR to USD correctly', () => {
    expect(convertCurrency(10, 'EUR', 'USD')).toBe(11);
  });

  it('throws an error for invalid currencies', () => {
    expect(() => convertCurrency(10, 'USD', 'XYZ')).toThrow('moneda no válida');
  });
});
