import { expect } from 'chai';
import calculateNumber from './0-calcul.js';
//const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber(1.4, 2.6)).to.equal(4); // 1 + 3 = 4
      expect(calculateNumber(1.5, 2.4)).to.equal(4); // 2 + 2 = 4
      expect(calculateNumber(2.9, 3.1)).to.equal(6); // 3 + 3 = 6
      expect(calculateNumber(1.2, 2.8)).to.equal(4); // 1 + 3 = 4
    });
    
    it('should handle rounding of 0.5 and higher correctly', () => {
      expect(calculateNumber(2.5, 2.5)).to.equal(6); // 3 + 3 = 6
      expect(calculateNumber(0.5, 1.5)).to.equal(3); // 1 + 2 = 3
    });

    it('should handle zero correctly', () => {
      expect(calculateNumber(0, 0)).to.equal(0); // 0 + 0 = 0
      expect(calculateNumber(0, 1.5)).to.equal(2); // 0 + 2 = 2
    });
  });