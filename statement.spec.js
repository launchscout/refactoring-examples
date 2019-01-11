const statement = require('./statement.js');
const plays = require('./plays.js');
const invoices = require('./invoices.js');
const expect = require('chai').expect;

describe('statement', () => {
  it('produces the correct statement', () => {
    const result = statement(invoices[0], plays);
    expect(result).to.contain('Statement for BigCo');
    expect(result).to.contain('Hamlet: $650.00 (55 seats)');
    expect(result).to.contain('As You Like It: $580.00 (35 seats)');
    expect(result).to.contain('Othello: $500.00 (40 seats)');
    expect(result).to.contain('Amount owed is $1,730.00');
    expect(result).to.contain('You earned 47 credits');
  });
});