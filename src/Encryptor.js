const nacl = require('libsodium-wrappers');

module.exports = async(key) => {
    await nacl.ready;

    // key isset check
    if(key == null || typeof key == undefined) throw 'no key';

    // freeze object to disable later tampering of the object
    return Object.freeze({
        encrypt: (msg, nonce) => {
            if(!msg || !nonce) throw 'Invalid arguments';
            return nacl.crypto_secretbox_easy(msg, nonce, key)
        }
    });
}