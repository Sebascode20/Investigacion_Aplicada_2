const rates = {
    USD: { EUR: 0.9, USD: 1 },
    EUR: { USD: 1.1, EUR: 1 },
  };
  
  export default function convertCurrency(amount, from, to) {
    if (!rates[from] || !rates[from][to]) throw new Error('moneda no válida');
    return amount * rates[from][to];
  }
  