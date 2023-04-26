import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConvertService } from './convert.service';

@Controller('/')
export class ConvertController {
  constructor(private readonly appService: ConvertService) {}

  @Get('convert')
  convertDataBase() {
    this.appService.convertDataBase();
  }

  @Post('film')
  getOneFilm(@Body() body) {
    const name = body.name;
    return this.appService.getOneFilm(name);
  }

}
