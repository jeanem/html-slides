let sometimeLater;
function outerFunction() {
  let outerValue = 'pineapple 🍍';
  function innerFunction() {
    console.log(' The external outerValue is: ' + outerValue);
  }
  sometimeLater = innerFunction;
}

function createPicnic(n) {
  let picnic;
  if (n > 1) {
    picnic = createPicnic(n - 1) + ' 🐜 ';
  } else {
    picnic = '🧺  🐜 ';
  }
  return picnic;
}
createPicnic(3);
// let sometimeLater;

// function outerFunction() {
//   let outerValue = 'apples';
//   function innerFunction() {
//     console.log('When the outerFunction ran,  I was hungry for: ', outerValue);
//   }
//   sometimeLater = innerFunction;
// }
// outerFunction();

// sometimeLater();

{
  /* <pre>
<code>
  {` 
let outerValue = 'oranges'; // → [2] variable in scope
function myFunction() { // → [1]  function is declared
console.log('I can see the external outerValue: ' + outerValue) 
// → [3] function uses the outer value;
}
myFunction(); // → function executed
`}
</code>
</pre> */
}

// function chirp(n) {
//   return n > 1 ? chirp(n - 1) + '-chirp' : 'chirp';
// }

function chirp(n) {
  let chirpAway = '';
  if (n > 1) {
    chirpAway = chirp(n - 1) + '-chirp';
  } else {
    chirpAway = 'blue';
  }
  return chirpAway;
}
chirp(3);

// // [2]
// var outerValue = 'oranges';

// // [1]
// function myFunction() {
// // [3]
//   console.log('I can see the external outerValue: ' + outerValue);
// }

// function outerFunction() {
//   var innerValue = 'apples';
//   function innerFunction(innerParameter) {
//     console.log('I can see the innerValue: ', innerValue);
//     console.log('But now I am hungry for:', innerParameter);
//   }
//   return innerFunction;
// }

// let nowImHungryFor = outerFunction();

// function multiplier(factor1) {
//   function calculateProduct(factor2) {
//     return factor1 * factor2;
//   }
//   return calculateProduct;
// }

// function multiplier(factor1) {
//   console.log(
//     'the first factor, ' +
//       factor1 +
//       ', is defined when the multiplyBy' +
//       factor1 +
//       ' is created'
//   );
//   function calculateProduct(factor2) {
//     console.log(
//       'the second factor,' +
//         factor2 +
//         ', is passed in at the running of the instance '
//     );
//     console.warn(
//       'When the instance is run, it returns the value of the inner function, calculateProduct: outer factor1 * inner factor2 = ',
//       factor1 * factor2
//     );
//     return factor1 * factor2;
//   }
//   return calculateProduct;
// }
// console.warn('let multiplyBy4 = multiplier(4);');
// let multiplyBy4 = multiplier(4);

// console.warn('multiplyBy4(5);');
// multiplyBy4(5);

// // multiplierWithFactor2.multiplyResults)

// function packBox(item) {
//   console.log('Put ' + item + ' in the box');
//   function addressPackage(address) {
//     console.log(
//       'Addressed the box to ' +
//         address +
//         ' and ready to send the ' +
//         item +
//         ' gift'
//     );
//   }
//   return addressPackage;
// }

// let brotherGift = packBox('jersey');

// brotherGift('123 Main Street, Anywhere USA 012345');
