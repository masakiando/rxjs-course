import {
  sum,
  userName,
  userAge,
  hasHobbies,
  myRealAge,
  userPhoneNumber,
  func,
  myCar,
  bloop,
  hobbies2,
} from '../src';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('type check', () => {
  it('should be type string', () => {
    expect(typeof userName).toBe('string');
  });

  it('should be type number', () => {
    expect(typeof userAge).toBe('number');
  });

  it('should be type boolean', () => {
    expect(typeof hasHobbies).toBe('boolean');
  });

  it('should be type undefined', () => {
    expect(typeof myRealAge).toBe('undefined');
  });

  it('should be type object', () => {
    expect(typeof userPhoneNumber).toBe('object');
  });

  it('should be type function', () => {
    expect(typeof func).toBe('function');
  });

  it('bloop returns null', () => {
    expect(typeof myCar).toBe('object');
    expect(myCar).toBeNull();
  });

  it('bloop returns null', () => {
    expect(bloop()).toBeNull();
  });

  it('should be type object, variable is array', () => {
    expect(typeof hobbies2).toBe('object');
    expect(Array.isArray(hobbies2)).toBe(true);
  });
});
