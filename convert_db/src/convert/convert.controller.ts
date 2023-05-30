import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConvertService } from './convert.service';

@Controller('/')
export class ConvertController {
    constructor(private readonly appService: ConvertService) { }

    @Get('convert/films')
    convertfilmDataBase() {
        this.appService.convertFilmsDataBase();
    }

    @Get('convert/actors')
    convertActorDataBase() {
        this.appService.convertActorsDataBase();
    }

    @Get('convert/actors-films')
    connectActorsToFilms() {
        this.appService.connectActorsToFilms();
    }

    @Post('film')
    getOneFilm(@Body() body) {
        const name = body.name;
        const lang = body.lang;
        return this.appService.getOneFilm(name, lang);
    }

    @Post('filmByGenre')
    filterByGenres(@Body() body) {
        const genre = body.genre;
        return this.appService.filterByGenres(genre);
    }

}
