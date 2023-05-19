import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Genre } from "../genres/genres.model";
import { GenresFilms } from "../genres/genres-films.model";
import { Country } from "../countries/countries.model";
import { CountriesFilms } from "../countries/countries-films.model";
import { FilmLang } from "./films-lang.model";

// interface FilmsCreationAttrs {
//     films_link: string;
//     films_name: string;
//     films_trailer: string;
//     films_date: string;
//     films_list_country: string;
//     films_list_genre: string;
//     films_list_director: string;
//     films_grade: string;
//     films_total_grade: string;
//     films_age: string;
//     films_r: string;
//     films_time: string;
//     films_list_actor: string;
//     films_picture: string;
//     filmType: string;
// }

@Table( {tableName: 'films', underscored: true, timestamps: false })
export class Film extends Model<Film> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @HasMany(() => FilmLang)
    filmLang: FilmLang[];

    @Column({type: DataType.STRING})
    filmType: string;

    @Column({type: DataType.STRING})
    filmLink: string;

    @Column({type: DataType.STRING})
    filmTrailer: string;

    @Column({type: DataType.INTEGER})
    filmYear: number;

    @Column({type: DataType.INTEGER})
    filmTime: number;

    @BelongsToMany(() => Country, () => CountriesFilms)
    countries: Country[];

    @BelongsToMany(() => Genre, () => GenresFilms)
    genres: Genre[];

    @Column({type: DataType.DOUBLE})
    filmGrade: number;

    @Column({type: DataType.INTEGER})
    filmTotalGrade: number;

    @Column({type: DataType.STRING(16)})
    filmR: string;

    @Column({type: DataType.STRING(16)})
    filmAge: string;

    @Column({type: DataType.STRING})
    filmPoster: string;

    //Считай, что это поля-плейсхолдеры
    //Их нет в самой таблице в бд, они нужны только чтобы в сервисе можно было удобно подцепить актеров и режиссеров,
    //полученных из сервиса с личностями
    //films.datavalues.actors и films.datavalues.directors - это вот эти строчки
    directors;

    actors;

    similarFilms;

}