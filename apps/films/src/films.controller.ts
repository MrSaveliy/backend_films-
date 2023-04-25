import { Controller,  } from '@nestjs/common';
import { FilmsService } from './films.service';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';

@Controller()
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  getHello(): string {
    return this.filmsService.getHello();
  }
}
