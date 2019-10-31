'use strict';

const HashTable = require('../hashtable');
const leftJoin = require('../left-join');

describe('LeftJoin', () => {
  let left = new HashTable;
  let right = new HashTable;

  left.add({ fond: 'enamored' });
  left.add({ wrath: 'anger' });
  left.add({ diligent: 'employed' });
  left.add({ outfit: 'garb' });
  left.add({ guide: 'usher' });

  right.add({ fond: 'averse' });
  right.add({ wrath: 'delight' });
  right.add({ diligent: 'idle' });
  right.add({ guide: 'follow' });
  right.add({ flow: 'jam' });

  it('should return a list of items', () => {
    let received = leftJoin(left, right);
    let expected = [
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow'],
      ['wrath', 'anger', 'delight'],
      ['fond', 'enamored', 'averse'],
      ['diligent', 'employed', 'idle']
    ];

    expect(received).toStrictEqual(expected);
  });
});