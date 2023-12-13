function calculateTax() {
    // Define tax brackets using closure
    const taxBrackets = [
      { range: 10000, rate: 0.1 },
      { range: 30000, rate: 0.15 },
      { range: 70000, rate: 0.2 },
      { range: Infinity, rate: 0.25 }
    ];
  
    // Return a function to calculate tax based on income
    return function(income) {
      let remainingIncome = income;
      let totalTax = 0;
  
      for (const bracket of taxBrackets) {
        const taxableAmount = Math.min(remainingIncome, bracket.range);
        totalTax += taxableAmount * bracket.rate;
        remainingIncome -= taxableAmount;
  
        if (remainingIncome <= 0) {
          break;
        }
      }
  
      return totalTax;
    };
  }
  
  // Example usage:
  const calculateTaxForIncome = calculateTax();
  
  // Test with various incomes
  const income1 = 15000;
  const income2 = 45000;
  const income3 = 80000;
  
  console.log(`Tax for income $${income1}: $${calculateTaxForIncome(income1)}`);
  console.log(`Tax for income $${income2}: $${calculateTaxForIncome(income2)}`);
  console.log(`Tax for income $${income3}: $${calculateTaxForIncome(income3)}`);
  