import { createCipheriv, createDecipheriv } from 'crypto';

import { AppError } from '@shared/Util/AppError/AppError';

import { ICipherCripto, IDecipherCripto, IGenericMethodsCryptoData } from '../../types';

const configCripto = {
  algorithm: 'aes-256-cbc',
  key: Buffer.from(process.env.SECRET_ENCRYPTED_TOKEN_KEY!, 'hex'), // Bytes(32)
  iv: Buffer.from(process.env.SECRET_ENCRYPTED_TOKEN_IV!, 'hex'), // Bytes(16)
};

export class CryptoNativeMethods implements IGenericMethodsCryptoData {
  private method: string = '';

  constructor(method: string) {
    this.method = method.toUpperCase();
  }

  cipher = (data: ICipherCripto.params) => {
    try {
      const cipher = createCipheriv(configCripto.algorithm, configCripto.key, configCripto.iv);
      const result = cipher.update(data.data, 'utf8', 'base64').concat(cipher.final('base64'));
      return result;
    } catch (error) {
      throw new AppError(`Método: "${this.method}". Não foi possível encriptar dado ${error}`);
    }
  };

  decipher = (data: IDecipherCripto.params) => {
    try {
      const decipher = createDecipheriv(configCripto.algorithm, configCripto.key, configCripto.iv);
      const result = decipher.update(data.data, 'base64', 'utf8').concat(decipher.final('utf8'));
      return result;
    } catch (error) {
      throw new AppError(`Método: "${this.method}". Não foi possível decriptar dado ${error}`);
    }
  };
}
