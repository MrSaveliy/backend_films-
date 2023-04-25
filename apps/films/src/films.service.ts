import { Injectable } from '@nestjs/common';

@Injectable()
export class FilmsService {
  getHello(): string {
    return 'Hello World!';
  }
}
