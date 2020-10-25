const nacl = require('libsodium-wrappers');

module.exports = async(key) => {
    await nacl.ready;

    // key isset check
    if(key == null || typeof key == undefined) throw 'no key';

    // freeze object to disable later tampering of the object
    return Object.freeze({
        decrypt: (ciphertext, nonce) => {
            (async() => await nacl.ready)();
            if(!ciphertext || !nonce) throw 'Invalid arguments';
            return nacl.crypto_secretbox_open_easy(ciphertext, nonce, key)
        }
    });
}