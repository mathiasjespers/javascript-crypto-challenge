const nacl = require('libsodium-wrappers');

module.exports = async() => {
    await nacl.ready;

    let keyPair = nacl.crypto_sign_keypair();
    const [pk, sk] = [keyPair.publicKey, keyPair.privateKey];

    return Object.freeze({
        verifyingKey: pk,
        sign: msg => {
            return nacl.crypto_sign(msg, sk);
        }
    });
}