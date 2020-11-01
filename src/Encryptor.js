const nacl = require('libsodium-wrappers');

module.exports = async(key) => {
    await nacl.ready;

    // key isset check
    if(key == null || typeof key == undefined) throw 'no key';

    // freeze object to disable later tampering of the object
    return Object.freeze({
        key: key,
        encrypt: (msg) => {
        const nonce = nacl.randombytes_buf(nacl.crypto_secretbox_NONCEBYTES);
        const ciphertext = nacl.crypto_secretbox_easy(msg, nonce, key)
            return {
                nonce: nonce,
                ciphertext: ciphertext
            }
        }
    });
}