const jwt = require('jsonwebtoken');

const sampleClaim = require('./sample.claim.js');

const jwtToken = jwt.sign(
  sampleClaim.sampleClaim,
  process.argv[2],
  { algorithm: 'HS256', expiresIn: '20h'}
);

console.log('jwtToken');
console.log(jwtToken);
