import * as _ from 'lodash';
// Simple Generic

function echo(data: any) {
  return data;
}

console.log(echo('Max').length);
console.log(echo(27).length); // undefined
console.log(echo({ name: 'Max', age: 27 }).length); // undefined

// // Better do: Generic
function betterEcho<T>(data: T) {
  return data;
}
console.log(betterEcho<string>('Max').length);
console.log(betterEcho<number>(27).toFixed);
console.log(betterEcho({ name: 'Max', age: 27 }));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
// const testResults: number[] = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T extends string | number, U extends string | number>(data: T[], data2: U[]): void {
  data.forEach((element, i) => console.log(element, `price: ${data2[i]}`));
}
printAll<string, number>(['Apple', 'Banana'], [120, 100]);
// printAll<number>([34, 48]);
// printAll<boolean>([false, true]);
// printAll<string, number>(['Apple', 'Banana'], [false, true]);

// Generic Types function
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('Something'));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMathStNu = new SimpleMath<string, number>();
simpleMathStNu.baseValue = '10';
simpleMathStNu.multiplyValue = 20;
console.log(simpleMathStNu.calculate());
const simpleMathNuSt = new SimpleMath<number, string>();
simpleMathNuSt.baseValue = 10;
simpleMathNuSt.multiplyValue = '20';
console.log(simpleMathNuSt.calculate());

// Generic Class
class MyMap<T> {
  private map: { [key: string]: T } = {};

  setItem(key: string, item: T) {
    this.map[key] = item;
  }

  getItem(key: string) {
    return this.map[key];
  }

  clear() {
    this.map = {};
  }

  printMap() {
    Object.keys(this.map).forEach((key) => {
      console.log(key, this.map[key]);
    });
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 10);
numberMap.setItem('bananas', 2);
// console.log(numberMap.getItem('apples'));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('apples', '10');
stringMap.setItem('bananas', '2');
console.log(stringMap.getItem('apples'));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();



