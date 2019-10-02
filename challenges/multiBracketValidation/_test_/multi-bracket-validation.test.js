'use strict';

const multiBracketValidation = require('../multi-bracket-validation');

describe('mult-bracket-validation', () => {
  it('Return false for too little of brackets', () => {
    const result = multiBracketValidation('([{)');
    expect(result).toEqual(false);
  });
  it('Return false if its not a string', () => {
    const result = multiBracketValidation('testing');
    expect(result).toEqual(false);
  });
  it('Return false if uneven brackerts', () => {
    const result = multiBracketValidation('{}[][[]');
    expect(result).toEqual(false);
  });
});