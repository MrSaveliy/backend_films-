import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGenresDto } from './dto/create-genres.dto';
import { GenresService } from './genres.service';

@Controller('genres')
export class GenresController {
    constructor(private genresService: GenresService) {}

    @Post()
    create(@Body() dto: CreateGenresDto) {
        return this.genresService.createGenres(dto); 
    }
    
    @Get()
    getAll() {
        return this.genresService.getAll();
    }

}
