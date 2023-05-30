import { MainService } from './main.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMainDto } from './dto/create-main-page.dto';

@Controller('main')
export class MainController {
    constructor(private mainService: MainService) {}

    @Post()
    create(@Body() dto: CreateMainDto) {
        return this.mainService.createMain(dto); 
    }
    
    @Get()
    getAll() {
        return this.mainService.getAll();
    }

}
