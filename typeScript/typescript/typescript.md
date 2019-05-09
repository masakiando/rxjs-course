### interface 
* interfaceはコンパイルされない
* 型チェック機能

```javascript
// 
interface IUser {
  firstName: string;
};
```

```javascript
// 
interface IUser {
  age?: number;
};
```

```javascript
// 
interface IUser {
  [propName: string]: any;
};
```

```javascript
// クラスで使う
class User implements IUser {
  firstName: string;
  lastName: string;
}
```

```javascript
// function Types
interface DoubleValueFunc {
  (number1: number, number2: number);
}
```

```javascript
// Interface Inheritance Interface
interface IUserOptions extends IUser {
  origin_city: string;
}
```

### Generic
* 再利用可能な型定義

```javascript
// // Better do: Generic func
function betterEcho<T>(data: T) {
  return data;
}
betterEcho<string>('Max').length;
betterEcho<number>(27).toFixed;
```

```javascript
// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99)
```

```javascript
// Arrays Generics func and extends
function printAll<T extends string | number, U extends string | number>(data: T[], data2: U[]): void {
  data.forEach((element, i) => console.log(element, `price: ${data2[i]}`));
}
printAll<string, number>(['Apple', 'Banana'], [120, 100]);
```

```javascript
// Generic Types function
const echo2: <T>(data: T) => T = betterEcho;
```

```javascript
// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}
const simpleMathSN = new SimpleMath<string, number>();
simpleMath.baseValue = '20';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
```