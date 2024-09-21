const assert = require('assert');
const calculateNumber = require('./0-calcul.js');
const { describe } = require('mocha');

describe('calculateNumber', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber(1.4, 2.6), 4); // 1 + 3 = 4
      assert.strictEqual(calculateNumber(1.5, 2.4), 4); // 2 + 2 = 4
      assert.strictEqual(calculateNumber(2.9, 3.1), 6); // 3 + 3 = 6
      assert.strictEqual(calculateNumber(1.2, 2.8), 4); // 1 + 3 = 4
    });
  
    it('should handle rounding of 0.5 and higher correctly', () => {
      assert.strictEqual(calculateNumber(2.5, 2.5), 6); // 3 + 3 = 6
      assert.strictEqual(calculateNumber(0.5, 1.5), 3); // 1 + 2 = 3
    });
  
    it('should handle zero correctly', () => {
      assert.strictEqual(calculateNumber(0, 0), 0); // 0 + 0 = 0
      assert.strictEqual(calculateNumber(0, 1.5), 2); // 0 + 2 = 2
    });
  });