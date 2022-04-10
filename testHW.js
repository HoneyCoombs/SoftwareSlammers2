//computeHW Test Cases using Mocha

var assert = require('assert');
const computeHW = require('./computeHW.js');

describe('ComputeHW Test Suite', function () {
  
  describe('computeHW 1', function () {
    it('Input of 100,100,100 should return 20', function () {
      assert.equal(computeHW.computeHW(100,100,100), 20);
    });
  });



  describe('computeHW 2', function () {
    it('Input of 100,90,80 should return 18', function () {
      assert.equal(computeHW.computeHW(100,90,80), 18);
    });
  });

  describe('computeHW 3', function () {
    it('Input of 100,75,50 should return 15', function () {
      assert.equal(computeHW.computeHW(100,75,50), 15);
    });
  });

  describe('computeHW 4', function () {
    it('Input of 100,85,80 should return 17.6666667', function () {
      assert.equal(computeHW.computeHW(100,85,80), 17.6666667);
    });
  });

  describe('computeHW 5', function () {
    it('Input of 100,84,84 should return 17.866666666666667', function () {
      assert.equal(computeHW.computeHW(100,84,84), 17.866666666666667);
    });
  });

  describe('computeHW 6', function () {
    it('Input of 75,75,75 should return 15', function () {
      assert.equal(computeHW.computeHW(75,75,75), 15);
    });
  });

  //@Dominic put your test cases here




}); //End of ComputeHW Test Suite