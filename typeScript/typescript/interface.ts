interface IUser {
  firstName: string;
  age?: number;
  [propName: string]: any;
}

function getName(data: IUser) {
    return data.firstName;
}

function updateName(data: IUser, newname: string) {
  return data.firstName = newname;
}


const user1: IUser = {
  firstName: 'max',
  age: 5,
  hobbies: ['Cookig', 'Sport'],
};
const user2: IUser = {
  firstName: 'max',
  age: 5,
  country: ['usa'],
};

console.log(getName(user1));
console.log(updateName(user2, 'mac'));
console.log(user2);

class User implements IUser {
  firstName: string;
  lastName: string;
  address: string;
}

const user = new User();
user.firstName = 'yamada';
user.lastName = 'taro';
console.log(user);


// function Types
// ```javascript
interface DoubleValueFunc {
  (number1: number, number2: number);
}

function myD1(v1: number, v2: number) {
  return (v1 + v2) * 2;
}
console.log(myD1(2, 2));
const myD2: DoubleValueFunc = (v1: number, v2: number) => {
   return (v1 + v2) * 2;
};
console.log(myD2(2, 2));

// Interface Inheritance class
interface UserOptions extends User {
  origin_city: string;
}
// Interface Inheritance class using const
// TODO:
const user1_option: UserOptions = {
  firstName: user.firstName,
  lastName: user.lastName,
  address: 'koujimachi-123',
  origin_city: 'tokyo',
};

// Interface Inheritance Interface
interface IUserOptions extends IUser {
  origin_city: string;
}

// Interface Inheritance Interface using const
const user2_option: IUserOptions = {
  firstName: user.firstName,
  lastName: user.lastName,
  origin_city: 'tokyo',
};




