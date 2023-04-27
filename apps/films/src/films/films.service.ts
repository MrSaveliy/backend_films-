import { InjectModel } from "@nestjs/sequelize";
import { Films } from "./films.model";
import { Injectable } from "@nestjs/common";
import { CreateFilmsDto } from "./dto/create-films.dto";
import { GenresFilms } from "./genres-films.model";



@Injectable()
export class FilmsService {
    constructor (@InjectModel(Films) private filmsRepository: typeof Films,
    @InjectModel(GenresFilms) private genresfilmsRepository: typeof GenresFilms) {}
    
    async createFilms(dto: CreateFilmsDto) {
        const films = await this.filmsRepository.create(dto);
        return films;
    }

    async getAll() {
        const films = await this.filmsRepository.findAll({include: {all: true}});
        return films;
    }

    async getFilmsByName(films_name: string) {
        const film = await this.filmsRepository.findOne({
            where: { films_name }, include: {all: true}});
        return film;
    }
   
    async getFilmsById(id: number) {
        const film = await this.filmsRepository.findByPk(id);
        if (!film) {
          throw new Error('Films not found');
        }
        return film;
      }
    
    async getFilmsByCountry(films_list_country: Object ) {
        const film = await this.filmsRepository.findAll({
            where: { films_list_country }, include: {all: true}});
        return film;
    }

    async getFilmsByGenres(films_list_country: Object ) {
        const film = await this.filmsRepository.findAll({
            where: { films_list_country }, include: {all: true}});
        return film;
    }

    async getFilmsByDate(films_date: string ) {
        const film = await this.filmsRepository.findAll({
            where: { films_date }, include: {all: true}});
        return film;
    }

    async deleteFilm(id: number) {
        const film = await this.filmsRepository.findByPk(id);
        if (!film) {
          throw new Error('Films not found');
        }
        await film.destroy()
        return film;
    }

}
