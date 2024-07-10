import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import slugify from 'slugify';

import { InternalServerError } from '@/common/error';

class Utils {
  // generate jwt token
  public generateJwtToken(payload: object, secret: string, expiresIn: string): string | null {
    try {
      return jwt.sign(payload, secret, { expiresIn });
    } catch (error: any) {
      throw new InternalServerError(error.message, error);
    }
  }

  // verify jwt token
  public verifyJwtToken(token: string, secret: string): any | null {
    try {
      return jwt.verify(token, secret);
    } catch (error: any) {
      throw new InternalServerError(error.message, error);
    }
  }

  // create bcrypt hash
  public createBcryptHash(password: string): string | null {
    try {
      return bcrypt.hashSync(password, 12);
    } catch (error: any) {
      throw new InternalServerError(error.message, error);
    }
  }

  // compare bcrypt hash
  public compareBcryptHash(password: string, hash: string): boolean {
    try {
      return bcrypt.compareSync(password, hash);
    } catch (error: any) {
      throw new InternalServerError(error.message, error);
    }
  }

  // generate otp with crypto
  public generateOtp(): string {
    const buffer = crypto.randomBytes(2);
    const randomNumber = buffer.readUInt16BE(0);
    const randomNumberString = randomNumber.toString();
    return randomNumberString;
  }

  // generate slug with slugify
  public generateSlug(name: string): string {
    return slugify(name, {
      lower: true,
      strict: true,
      replacement: '_',
      remove: /[*+~.()'"!:@]/g,
      locale: 'en',
      trim: true,
    });
  }
}

export const utils = new Utils();
