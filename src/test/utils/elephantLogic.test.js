import {
  getAlphabeticalList,
  addOpenPropertyForItemsInContent,
} from '../../utils/elephantLogic';

const elephants = [
  { name: 'adam', age: 12 },
  { name: 'adrian', age: 7 },
  { name: 'Diana', age: 2 },
  { name: 'john', age: 14 },
  { name: 'karol', age: 11 },
  { name: 'Tom', age: 3 },
  { name: 'Zenek', age: 5 },
];
const accordianListWithoutOpenProperty = [
  {
    letter: 'a',
    content: [
      { name: 'adam', age: 12 },
      { name: 'adrian', age: 7 },
    ],
  },
  {
    letter: 'd',
    content: [{ name: 'Diana', age: 2 }],
  },
  {
    letter: 'j',
    content: [{ name: 'john', age: 14 }],
  },
  {
    letter: 'k',
    content: [{ name: 'karol', age: 11 }],
  },
  {
    letter: 't',
    content: [{ name: 'Tom', age: 3 }],
  },
  { letter: 'z', content: [{ name: 'Zenek', age: 5 }] },
];
const accordianListWithOpenProperty = [
  {
    letter: 'a',
    content: [
      { name: 'adam', age: 12, open: false },
      { name: 'adrian', age: 7, open: false },
    ],
  },
  {
    letter: 'd',
    content: [{ name: 'Diana', age: 2, open: false }],
  },
  {
    letter: 'j',
    content: [{ name: 'john', age: 14, open: false }],
  },
  {
    letter: 'k',
    content: [{ name: 'karol', age: 11, open: false }],
  },
  {
    letter: 't',
    content: [{ name: 'Tom', age: 3, open: false }],
  },
  { letter: 'z', content: [{ name: 'Zenek', age: 5, open: false }] },
];

describe('test getAlphabeticalList', () => {
  it('should return alphabet object with letters which occur in name and for each letter should be array with elements which name starts with letter. Input should be sorted before running function', () => {
    const result = getAlphabeticalList(elephants);
    expect(result).toEqual(accordianListWithoutOpenProperty);
  });
});

describe('test addOpenPropertyForItemsInContent', () => {
  it('should add open property equals false for each item in content array', () => {
    const result = addOpenPropertyForItemsInContent(
      accordianListWithoutOpenProperty
    );
    expect(result).toEqual(accordianListWithOpenProperty);
  });
});
