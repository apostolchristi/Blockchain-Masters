const crypto = require('crypto');

const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256');

    /* Maping over the inputs and turning all the iner items into the stringify form. 
     So that making the hash to be different from the original hash */ 
    hash.update(inputs.map(input => JSON.stringify(input)).sort().join(' '));

    return hash.digest('hex');

};

module.exports = cryptoHash;