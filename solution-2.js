'use strict';

var brackets = [ { rate: 0.08, maxAmount: 20000    },
                 { rate: 0.10, maxAmount: 40000    },
                 { rate: 0.15, maxAmount: 60000    },
                 { rate: 0.20, maxAmount: Infinity }
];

function convertToPercent(num) {
  return (num * 100.0).toFixed(2);
}

function getTaxAmount(income) {
  return brackets.map(function(bracket, index) {
    var prevMaxAmount = index > 0 ? brackets[index-1].maxAmount : 0;
    var amountToTax = Math.min(income - prevMaxAmount, bracket.maxAmount - prevMaxAmount);
    amountToTax = Math.max(0, amountToTax);
    return amountToTax * bracket.rate;
  });
}

function doTax(income) {
  console.log('\n=== Calculating the Tax on an income of %s ===', income);
  var taxAmounts = getTaxAmount(income);
  console.log('taxAmounts:', taxAmounts);
  var totalTax = taxAmounts.reduce(function(a, b) { return a + b; });
  var effectiveRate = totalTax / income;
  console.log('The total tax on $%s is $%s which is an effectiveRate of %s%',
    income, totalTax, convertToPercent(effectiveRate));
}

doTax(100.00);
doTax(30000);
doTax(50000);
doTax(90000);
