import {
  describe, it, expect, beforeEach,
} from 'vitest';

import { CryptoNativeMethods } from './CryptoNativeMethods';

let cryptoMethod: CryptoNativeMethods;

describe('Test method "CryptoNativeMethods"', () => {
  beforeEach(async () => {
    cryptoMethod = new CryptoNativeMethods('cripto');
  });

  it('Should return string encrypted', async () => {
    const resultCrypto = cryptoMethod.cipher({ data: 'John doe' });

    expect(resultCrypto).not.toBeNull();
  });

  it('Should return string decrypted', async () => {
    const value = 'John doe';
    const resultCrypto = cryptoMethod.cipher({ data: value });

    const resultDecripto = cryptoMethod.decipher({ data: resultCrypto });

    expect(resultDecripto).toEqual(value);
  });

  it('Should return Error string decrypted with string error', async () => {
    await expect(async () => {
      cryptoMethod.decipher({ data: 'John doe' });
    }).rejects.toEqual({
      message: 'Método: "CRIPTO". Não foi possível decriptar dado Error: error:0606506D:digital envelope routines:EVP_DecryptFinal_ex:wrong final block length',
      statusCode: 400,
    });
  });
});
