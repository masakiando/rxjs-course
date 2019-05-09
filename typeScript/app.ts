import * as R from 'ramda';
// import { merge, interval, concat, timer, fromEvent, Observable, noop, of, forkJoin, Subject, BehaviorSubject, range, from} from 'rxjs';
// import { map, mapTo, tap, take, first, switchMap, reduce, max, min, combineLatest, buffer, scan, single } from 'rxjs/operators';

const pipe = functions => data => {
  return functions.reduce((value, func) => func(value), data);
};

const price$ = 50;
const addSalesTax = (total, taxRate) => total * taxRate;

const exchange = value => pipe([
    v => addSalesTax(v, 100),
    v => addSalesTax(v, 8)
])(value);
console.log(exchange(price$));
// v => `Order Total = ${v.toFixed(2)}`

const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const get6Characters = (string) => string.substring(0, 6);
const reverse = (string) => string
                            .split('')
                            .reverse()
                            .join('');
console.log(reverse(get6Characters(uppercase(getName({ name: 'Buckethead' })))));

console.log(R.pipe(
    getName,
    uppercase,
    get6Characters,
    reverse,
  )({ name: 'Buckethead' }));

const test = R.pipe(
    (v) => addSalesTax(v , 2),
    (v) => addSalesTax(v, 0.08)
);
console.log(test(10));


const cats = [
  { name: 'Mojo', months: 84 },
  { name: 'Mao-Mao', months: 34 },
  { name: 'Waffles', months: 4 },
  { name: 'Pickles', months: 6 },
];

const countdown = (num, c) => {
  if (num === 0) {
    return;
  } else {
      console.log(num, c[num - 1]);
      countdown(num - 1, c);
  }
};
countdown(cats.length, cats);
