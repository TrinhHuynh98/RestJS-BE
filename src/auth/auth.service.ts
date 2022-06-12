import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
      return {msg: 'I have signup'}
  }

  signin() {
    return {msg: 'I have signin'}
  }
}
