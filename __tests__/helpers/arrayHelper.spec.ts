import { sortByPreferred, arrayFromLength, arrayFromKeys, objectValues } from '@app/helpers/arrayHelper';

describe('sortByPreferred', () => {
  it('Should return sorted array by preferred values', () => {
    const stringArr = ['a', 'b', 'c'];
    expect(sortByPreferred<number>([1, 2, 3], [2])).toStrictEqual([2, 1, 3]);
    expect(sortByPreferred<string>(stringArr, ['c', 'a'])).toStrictEqual(['c', 'a', 'b']);
    expect(sortByPreferred<string>(stringArr, [])).toStrictEqual(stringArr);
  });
});

describe('arrayFromLength', () => {
  it('Should return an array of specified length', () => {
    const targetLength = 3;
    const tested = arrayFromLength(targetLength);

    expect(tested).toStrictEqual([0, 1, 2]);
    expect(tested).toHaveLength(targetLength);
  });
});

describe('arrayFromKeys', () => {
  it('Should return an array of object keys', () => {
    const targetObject = {
      foo: 4,
    };

    expect(arrayFromKeys(targetObject)).toStrictEqual(['foo']);
    expect(arrayFromKeys(undefined)).toStrictEqual([]);
  });
});

describe('objectValues', () => {
  it('Should return an array of object values', () => {
    expect(objectValues({ foo: 1, bar: 2 })).toStrictEqual<number[]>([1, 2]);
    expect(objectValues({ foo: 'x' })).toStrictEqual<string[]>(['x']);
    expect(objectValues({})).toStrictEqual<unknown[]>([]);
  });
});
