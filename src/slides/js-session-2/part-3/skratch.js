// function multiplier(factor1) {
//   function calculateProduct(factor2) {
//     return factor1 * factor2;
//   }
//   return calculateProduct;
// }

function multiplier(factor1) {
  console.log(
    'the first factor, ' +
      factor1 +
      ', is defined when the multiplyBy' +
      factor1 +
      ' is created'
  );
  function calculateProduct(factor2) {
    console.log(
      'the second factor,' +
        factor2 +
        ', is passed in at the running of the instance '
    );
    console.warn(
      'When the instance is run, it returns the value of the inner function, calculateProduct: outer factor1 * inner factor2 = ',
      factor1 * factor2
    );
    return factor1 * factor2;
  }
  return calculateProduct;
}
console.warn('let multiplyBy4 = multiplier(4);');
let multiplyBy4 = multiplier(4);

console.warn('multiplyBy4(5);');
multiplyBy4(5);

// multiplierWithFactor2.multiplyResults)

function packBox(item) {
  console.log('Put ' + item + ' in the box');
  function addressPackage(address) {
    console.log(
      'Addressed the box to ' +
        address +
        ' and ready to send the ' +
        item +
        ' gift'
    );
  }
  return addressPackage;
}

let brotherGift = packBox('jersey');

brotherGift('123 Main Street, Anywhere USA 012345');
