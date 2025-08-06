// scripts/hash-password.js
const bcrypt = require('bcrypt');

const password = 'password123'; // The password you want to hash
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
  if (err) {
    throw err;
  }
  console.log('Your hashed password is:');
  console.log(hash);
});