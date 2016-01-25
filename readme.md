# Progressive Tax Calculator

Write a function that takes a single argument called "income" and calculates and returns the income tax due using a progressive tax:

* 08% for the first 20,000 dollars
* 10% for the next 20,000 dollars
* 15% for the next 20,000 dollars
* 20% for the rest

## Hints

Try creating an array to store the tax brackets, such as:

```javascript
var brackets = [ { rate: 0.08, maxAmount: 20000    },
                 { rate: 0.10, maxAmount: 40000    },
                 { rate: 0.15, maxAmount: 60000    },
                 { rate: 0.20, maxAmount: Infinity }
];
```
