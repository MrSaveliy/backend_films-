import { InjectModel } from "@nestjs/sequelize";
import { Films } from "./films.model";
import { Injectable } from "@nestjs/common";
import { CreateFilmsDto } from "./dto/create-films.dto";
import { GenresFilms } from "./genres-films.model";
import { Genres } from "../genre/genres.model";
import { Country } from "../country/country.model";
import { CountriesFilms } from "./countries-films.model";
import { FilmLang } from "./films-lang.model";


@Injectable()
export class FilmsService {
    constructor (@InjectModel(Films) private filmsRepository: typeof Films,
    @InjectModel(Genres) private genresRepository: typeof Genres,
    @InjectModel(GenresFilms) private genresfilmsRepository: typeof GenresFilms,
    @InjectModel(Country) private countryRepository: typeof Country,
    @InjectModel(CountriesFilms) private countriesfilmsRepository: typeof CountriesFilms,
    @InjectModel(FilmLang) private filmlangRepository: typeof FilmLang) {}
    
    async createFilms(dto: CreateFilmsDto) {
        const films = await this.filmsRepository.create(dto);
        return films;
    }

    async getAll() {
        const films = await this.filmsRepository.findAll({include: {all: true}});
        return films;
    }

    async getFilmsByName(filmName: string) {
        const film = await this.filmlangRepository.findOne({
            where: { filmName }, 
            include: {all: true}
        });
        return film;
    }

    async getFilmsByType(filmType: string) {
        const film = await this.filmsRepository.findOne({
           where: {filmType}, 
           include: {all: true}
       });
       return film;
    }
   
    async getFilmsById(id: number) {
        const film = await this.filmsRepository.findByPk(id);
        if (!film) {
          throw new Error('Films not found');
        }
        return film;
      }
    
    // async getFilmsByCountry(films_list_country: Object ) {
    //     const film = await this.filmsRepository.findAll({
    //         where: { films_list_country }, include: {all: true}});
    //     return film;
    // }

    async getFilmsByGenres(name: string ) {
        const genre = await this.genresRepository.findOne({
            where: {name}
        });
        if (!name) {
            throw new Error('Invalid name parameter');
          }
        const filmsId = await this.genresfilmsRepository.findAll({
            where: { genreId: genre.id }, 
            include: {model: Films, required: true},
            attributes: [],
        });
        return filmsId;
    }

    async getFilmsByYear(filmYear: number ) {
        const film = await this.filmsRepository.findAll({
            where: { filmYear }, 
            include: {all: true}
        });
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
