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

    @Get('/films_name/:films_name')
    async getFilmsByName(@Param('films_name') films_name: string) {
        const film = await this.filmsService.getFilmsByName(films_name)
        return film;
    }

    @Get('/id/:id')
    async getFilmsById(@Param('id')  id: number) {
        const film = await this.filmsService.getFilmsById(id);
        return film;
    }

    @Get('/country/:country')
    async getFilmsByCountry(@Param('country')  films_list_country: Object) {
        const film = await this.filmsService.getFilmsByCountry(films_list_country);
        return film;
    }

    @Get('/genres/:genres')
    async getFilmsByGenres(@Param('genres')  genres: string) {
        const film = await this.filmsService.getFilmsByCountry(genres);
        return film;
    }

    @Get('/date/:date')
    async getFilmsByDate(@Param('date')  films_date: string) {
        const film = await this.filmsService.getFilmsByDate(films_date);
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


