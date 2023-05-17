import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Genres } from "../genre/genres.model";
import { GenresFilms } from "./genres-films.model";
import { Country } from "../country/country.model";
import { CountriesFilms } from "./countries-films.model";
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
export class Films extends Model<Films> {

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

    @BelongsToMany(() => Genres, () => GenresFilms)
    genres: Genres[];

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

    @BelongsToMany(() => Genres, () => GenresFilms)
    genre: Genres[];

}