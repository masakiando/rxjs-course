export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  console.log('boop');
  return a + b;
};

// 型推論
export const userCountry = 'japan';
export let hobbies = ['Cooking', 'Sports'];

// 明示的に割り当て
// string
export const userName: string = 'taro';
// number
export const userAge: number = 38;
// boolean
export const hasHobbies: boolean = false;
// any
export let myRealAge: any;
// object
export const userPhoneNumber: object = {
  foo: '08012345678',
  baz: '08011113333',
};
// array
export const hobbies2: string[] = ['Cooking', 'Sports'];
// tuples
export const address: [string, number] = ['tokyo', 2];
// enum
enum fontColor {
  Gray, // 0
  Green, // 1
  Blue = 100, // 100
  Red, // 101
}
export const baseColor: fontColor = fontColor.Red;
// any
let car: any = 'BMW';
car = { brand: 'BMW', series: 3 };

// 17. Using Types in Functions (Arguments & Return Values)

export const func = () => {};
export const myCar = null;
export const bloop = () => null;
