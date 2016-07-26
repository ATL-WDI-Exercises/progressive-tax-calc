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

  var totalTax = 0;
  var lastMaxAmount = 0;

  brackets.forEach(function(bracket) {
    var amountToTax = Math.min(income, bracket.maxAmount - lastMaxAmount);
    var tax = amountToTax * bracket.rate;
    console.log('Tax on %s @ %s% = %s', amountToTax, convertToPercent(bracket.rate), tax);
    totalTax += tax;
    income -= amountToTax;
    lastMaxAmount = bracket.maxAmount;
  });
  return totalTax;
}

function doTax(income) {
  console.log('\n=== Calculating the Tax on an income of %s ===', income);
  var tax = getTaxAmount(income);
  var effectiveRate = tax / income;
  console.log('The tax on $%s is $%s which is an effectiveRate of %s%',
    income, tax, convertToPercent(effectiveRate));
}

doTax(100.00);
doTax(30000);
doTax(50000);
doTax(90000);
