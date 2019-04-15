import * as R from 'ramda';

const half = (n: number) => R.divide(R.__, n);
half(42); // =>  1
console.log(half(42));

