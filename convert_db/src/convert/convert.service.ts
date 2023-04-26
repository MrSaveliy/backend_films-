import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Film } from './films.model';
import { FilmWithGenres } from './films-with-genres.model';
import { Genre } from './genres.model';
import { GenresFilms } from './films-genres.model';

@Injectable()
export class ConvertService {

    constructor(
        @InjectModel(FilmWithGenres) private filmWGenresRepository: typeof FilmWithGenres,
        @InjectModel(Film) private filmRepository: typeof Film,
        @InjectModel(Genre) private genreRepository: typeof Genre,
        @InjectModel(GenresFilms) private genresFilmsRepository: typeof GenresFilms) { }


    async convertDataBase() {
        const oldFilms = await this.filmWGenresRepository.findAll();
        for (let film of oldFilms) {
            [film.films_age, film.films_r] = [film.films_r, film.films_age];
            const newFilm = await this.filmRepository.create({
                films_name: film.films_name,
                films_link: film.films_link,
                films_trailer: film.films_trailer,
                films_date: film.films_date,
                films_list_country: film.films_list_country,
                films_list_director: film.films_list_director,
                films_grade: film.films_grade,
                films_total_grade: film.films_total_grade,
                films_r: film.films_r,
                films_age: film.films_age,
                films_time: film.films_time,
                films_list_actor: film.films_list_actor,
                films_picture: film.films_picture,
            });
            const genres = film.films_list_genre;
            for (let genre of genres) {
                await this.convert(genre, newFilm)
            }
        }
    }

    private async convert(genre, film) {
        const genreBd = await this.genreRepository.findOne({ where: { name: genre } });
        if (genreBd) {
            await this.genresFilmsRepository.create({ genreId: genreBd.id, filmId: film.id });
        } else {
            const newGenre = await this.genreRepository.create({ name: genre });
            await this.genresFilmsRepository.create({ genreId: newGenre.id, filmId: film.id });
        }
    }

    async getOneFilm(name: string) {
        let film = await this.filmRepository.findOne({ where: { films_name: name },
    include: [{ model: Genre, attributes: ['name'] }] });
        return film;
    }
}
