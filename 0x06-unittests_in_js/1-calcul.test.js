const assert = require('assert');
const calculateNumber = require('./1-calcul.js');
const { describe } = require('mocha');

describe('calculateNumber', () => {
  describe('SUM operator', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4); // 1 + 3 = 4
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.4), 4); // 2 + 2 = 4
      assert.strictEqual(calculateNumber('SUM', 2.9, 3.1), 6); // 3 + 3 = 6  
    });
});

describe('SUBTRACTION operator', () => {
  it('should return the difference of rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), -2); // 1 - 3 = -2
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.4), 0); // 2 - 2 = 0
    assert.strictEqual(calculateNumber('SUBTRACT', -1.2, -2.8), 2); // -1 - (-3) = 2~
    });
})

describe('DIVIDE operator', () => {
  it('should return the quotient of rounded numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6.0, 2.6), 2); // 4 / 3 = 1
    assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.1), 3); // 6 / 2 = 3
    });

    it('should throw an error for division by zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error'); // Divide by 0
        assert.strictEqual(calculateNumber('DIVIDE', 3.5, 0), 'Error'); // Divide by 0
    });
})
});