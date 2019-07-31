const sampleClaim = {
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true,
  "iat": Math.floor(Date.now() / 1000) - 30,
  "hasura.io": {
    "x-hasura-allowed-roles": ["admin","user", "mod"],
    "x-hasura-default-role": "user",
    "x-hasura-user-id": "172731",
    "x-hasura-org-id": "1",
    "x-hasura-custom": "custom-value"
  }
}

module.exports = {
  sampleClaim
};
