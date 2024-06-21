import { config } from 'dotenv';
import { z } from 'zod';

import { logger } from '../configLogger';

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env' });
} else {
  config();
}

const envSchema = z.object({
  PORT: z.string().default('3001'),
  NODE_ENV: z
    .enum(['DEV', 'PRODUCTION', 'test', 'LOCAL'])
    .default('PRODUCTION'),

  DATABASE_URL: z.string({ required_error: 'Colocar env DATABASE_URL' }),

  SECRET_TOKEN: z.string(),

  SECRET_ENCRYPTED_TOKEN_IV: z.string().regex(/^[a-fA-F0-9]{32}$/, {
    message:
      'A string deve ser uma representação hexadecimal de 16 caracteres.',
  }),

  SECRET_ENCRYPTED_TOKEN_KEY: z.string().regex(/^[a-fA-F0-9]{64}$/, {
    message:
      'A string deve ser uma representação hexadecimal de 32 caracteres.',
  }),
});

const envZod = envSchema.safeParse(process.env);

if (envZod.success === false) {
  logger.fatal(envZod.error.format());
  throw new Error('🛑 Invalid environment variables !');
}

export const env = {
  ...envZod.data,
};
