import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class AppService {

  @Get()
  getHello(): string {
    return 'Hello, welcome to nest Js!';
  }
}
