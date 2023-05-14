import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { FilmMain } from './films.model';
import { FilmWithGenres } from './films-old.model';
import { Genre } from './genres.model';
import { GenresFilms } from './films-genres.model';
import { Op, Sequelize } from 'sequelize';
import { FilmLang } from './films-lang.model';
import { Director } from './directors.model';
import { DirectorsFilms } from './directors-films.model';
import { Country } from './countries.model';
import { CountriesFilms } from './countries-films.model';
import { PersonMain } from './persons-main.model';
import { PersonLang } from './persons-lang.model';
import { FilmsActors } from './films-actors.model';
import { PersonOld } from './persons-old.model';
import { IsNull } from 'sequelize-typescript';

@Injectable()
export class ConvertService {

    constructor(
        @InjectModel(FilmWithGenres) private filmWGenresRepository: typeof FilmWithGenres,
        @InjectModel(FilmMain) private filmRepository: typeof FilmMain,
        @InjectModel(FilmLang) private filmLangRepository: typeof FilmLang,
        @InjectModel(Director) private directorRepository: typeof Director,
        @InjectModel(DirectorsFilms) private directorFilmRepository: typeof DirectorsFilms,
        @InjectModel(Country) private countryRepository: typeof Country,
        @InjectModel(CountriesFilms) private countryFilmRepository: typeof CountriesFilms,
        @InjectModel(Genre) private genreRepository: typeof Genre,
        @InjectModel(GenresFilms) private genresFilmsRepository: typeof GenresFilms,
        @InjectModel(PersonOld) private personOldRepository: typeof PersonOld,
        @InjectModel(PersonMain) private personRepository: typeof PersonMain,
        @InjectModel(PersonLang) private personLangRepository: typeof PersonLang,
        @InjectModel(FilmsActors) private filmsActorsRepository: typeof FilmsActors,
        @InjectConnection() private sequelize: Sequelize) { }


    async convertFilmsDataBase() {
        let oldFilms = await this.filmWGenresRepository.findAll({ limit: 72, order: [['id', 'ASC']] });
        for (let film of oldFilms) {
            const newFilm = await this.filmRepository.create({
                id: film.id,
                filmType: film.film_type,
                filmLink: film.film_web_url,
                filmTrailer: film.films_trailer,
                filmYear: film.film_year,
                filmGrade: film.film_ratingkinopoisk,
                filmTotalGrade: film.film_ratingkinopoiskcount,
                filmR: film.film_ratingmpaa,
                filmAge: film.film_ratingagelimits,
                filmPoster: film.film_poster_url,
                filmTime: film.film_filmlength,
            });
            const newFilmLangRu = await this.filmLangRepository.create({
                filmId: newFilm.id,
                lang: 'ru',
                filmName: film.film_name_ru,
                filmDescription: film.film_shortdescription,
            });
            const newFilmLangEn = await this.filmLangRepository.create({
                filmId: newFilm.id,
                lang: 'en',
                filmName: film.film_name_en,
            });
            const genres = film.genre_list;
            for (let genre of genres) {
                await this.convertGenres(genre, newFilm)
            }
            const countries = film.country_list;
            for (let country of countries) {
                await this.convertCountries(country, newFilm);
            }
        }
    }

    async convertActorsDataBase() {
        let oldPersons = await this.personOldRepository.findAll({ order: [['id', 'ASC']] });
        for (let person of oldPersons) {
            const newActor = await this.personRepository.create({
                id: person.id,
                personLink: person.person_webUrl,
                personPicture: person.person_posterUrl,
                personGender: person.person_sex,
                height: person.person_growth,
                age: person.person_age,
                birthDate: person.person_birthday,
            });
            const newActorLang = await this.personLangRepository.create({
                personId: newActor.id,
                lang: 'ru',
                personName: person.person_nameRu,
                career: person.person_profession,
                birthPlace: person.person_birthplace,
            });
            const newActorLangEn = await this.personLangRepository.create({
                personId: newActor.id,
                lang: 'en',
                personName: person.person_nameEn,
            });
        }
    }

    async connectActorsToFilms() {
        let oldFilms = await this.filmWGenresRepository.findAll({ limit: 72, order: [['id', 'ASC']] });
        for (let film of oldFilms) {
            const actors = film.actors_list;
            for (let actor of actors) {
                const actorBd = await this.personOldRepository.findByPk(actor);
                if (actorBd) {
                    await this.filmsActorsRepository.create({ actorId: actorBd.id, filmId: film.id });
                }
            }
            const directors = film.directors_list;
            for (let director of directors) {
                const directorBd = await this.personOldRepository.findByPk(director);
                if (directorBd) {
                    await this.directorFilmRepository.create({ directorId: directorBd.id, filmId: film.id });
                }
            }
        }
    }

    private async convertGenres(genre, film) {
        const genreBd = await this.genreRepository.findOne({ where: { name: genre } });
        if (genreBd) {
            await this.genresFilmsRepository.create({ genreId: genreBd.id, filmId: film.id });
        } else {
            const newGenre = await this.genreRepository.create({ lang: 'ru', name: genre });
            await this.genresFilmsRepository.create({ genreId: newGenre.id, filmId: film.id });
        }
    }

    private async convertCountries(country, film) {
        const countryBd = await this.countryRepository.findOne({ where: { name: country } });
        if (countryBd) {
            await this.countryFilmRepository.create({ countryId: countryBd.id, filmId: film.id });
        } else {
            const newCountry = await this.countryRepository.create({ lang: 'ru', name: country });
            await this.countryFilmRepository.create({ countryId: newCountry.id, filmId: film.id });
        }
    }

    async getOneFilm(name: string, lang: string) {
        let film = await this.filmLangRepository.findOne({
            where: { filmName: name, lang: lang },
            include: [
                {
                    model: FilmMain,
                    include: [
                        {
                            model: PersonMain,
                            as: 'actors',
                            attributes: ['id'],
                            through: { attributes: [] },
                            include: [{
                                model: PersonLang,
                                where: { lang: 'ru' },
                                attributes: ["personName"],
                            }]
                        },
                        {
                            model: Country,
                            where: { lang: 'ru' },
                            attributes: ['id', 'name'],
                            through: { attributes: [] },
                        },
                        {
                            model: PersonMain,
                            as: 'directors',
                            attributes: ['id'],
                            through: { attributes: [] },
                            include: [{
                                model: PersonLang,
                                where: { lang: 'ru' },
                                attributes: ["personName"],
                            }]
                        },
                        {
                            model: Genre,
                            where: { lang: 'ru' },
                            attributes: ['id', 'name'],
                            through: { attributes: [] },
                        },
                    ],
                },
            ]
        });
        return film;
    }

    async filterByGenres(genre: string) {
        const genres = ['драма'];
        const countries = ['США'];
        const filmsId = await this.filterByGenreAndCountry(genres, countries);

        let films = await this.filmRepository.findAll({
            where: {
                id: {
                    [Op.in]: [...filmsId]
                }
            },
            include: [
                {
                    model: FilmLang,
                    attributes: ['lang', 'filmName', 'filmDescription'],
                },
                {
                    model: Genre,
                    where: { lang: 'ru' },
                    attributes: ['id', 'name'],
                    through: { attributes: [] }
                },
                {
                    model: Country,
                    where: { lang: 'ru' },
                    attributes: ['id', 'name'],
                    through: { attributes: [] },
                },
                {
                    model: PersonMain,
                    as: 'directors',
                    attributes: ['id', 'personPicture'],
                    through: { attributes: [] },
                    include: [{
                        model: PersonLang,
                        where: { lang: 'ru' },
                        attributes: ["personName"],
                    }]
                },
                {
                    model: PersonMain,
                    as: 'actors',
                    attributes: ['id', 'personPicture'],
                    through: { attributes: [] },
                    include: [{
                        model: PersonLang,
                        where: { lang: 'ru' },
                        attributes: ["personName"],
                    }]
                },
            ]
        });
        return films;
    }

    private async filterByGenreAndCountry(genres, countries) {
        let genreClause = {};
        if (genres && genres.length > 0) {
            genreClause['name'] = { [Op.in]: [...genres] };
        }
        let countryClause = {};
        if (countries && countries.length > 0) {
            countryClause['name'] = { [Op.in]: [...countries] };
        }
        const filmsId = await this.filmRepository.findAll({
            attributes: ['id'],
            include: [
                {
                    model: Genre,
                    attributes: [],
                    through: { attributes: [] },
                    where: genreClause,
                },
                {
                    model: Country,
                    attributes: [],
                    through: { attributes: [] },
                    where: countryClause,
                }
            ],
            group: ['FilmMain.id'],
        });
        return filmsId.map(item => item.id);
    }

}
