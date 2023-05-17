import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Query } from "@nestjs/common";
import { FilmsService } from "./films.service";
import { CreateFilmsDto } from "./dto/create-films.dto";


@Controller('films')
export class FilmsController {
    
    constructor(private filmsService: FilmsService) {}

    @Post()
    async create(@Body() dto: CreateFilmsDto) {
        return await this.filmsService.createFilms(dto); 
    }
    
    @Get()
    async getAll() {
        return await this.filmsService.getAll();
    }

    @Get('/filmName/:filmName')
    async getFilmsByName(@Param('filmName') filmName: string) {
        const film = await this.filmsService.getFilmsByName(filmName)
        return film;
    }

    @Get('/filmType/:filmType')
    async getFilmsByType(@Param('filmType') filmType: string) {
        const film = await this.filmsService.getFilmsByType(filmType)
        return film;
    }

    @Get('/id/:id')
    async getFilmsById(@Param('id')  id: number) {
        const film = await this.filmsService.getFilmsById(id);
        return film;
    }

    // @Get('/country/:country')
    // async getFilmsByCountry(@Param('country')  films_list_country: Object) {
    //     const film = await this.filmsService.getFilmsByCountry(films_list_country);
    //     return film;
    // }

    @Get('/genres/:genres')
    async getFilmsByGenres(@Param('genres')  name: string) {
        const films = await this.filmsService.getFilmsByGenres(name);
        return films;
    }

    @Get('/year/:year')
    async getFilmsByDate(@Param('year')  filmYear: number) {
        const film = await this.filmsService.getFilmsByYear(filmYear);
        return film;
    }

    @Delete(':id')
    async deleteFilm(@Param('id') id: number) {
       return await this.filmsService.deleteFilm(id);
    }

    
    /*@MessagePattern({ cmd: 'get-Films'})
    async getFilms(@Ctx() context: RmqContext) {
        const channel = context.getChannelRef();
        const message = context.getMessage();
        channel.ack(message)
        return {Films: 'Films'}
    }*/
}   


