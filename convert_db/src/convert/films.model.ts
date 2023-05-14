import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import { Genre } from "./genres.model";
import { GenresFilms } from "./films-genres.model";
import { Country } from "./countries.model";
import { CountriesFilms } from "./countries-films.model";
import { Director } from "./directors.model";
import { DirectorsFilms } from "./directors-films.model";
import { FilmLang } from "./films-lang.model";
import { PersonMain } from "./persons-main.model";
import { FilmsActors } from "./films-actors.model";

/*interface FilmMainCreationAttrs {
    films_link: string;
    films_trailer: string;
    films_date: string;
    films_grade: string;
    films_total_grade: string;
    films_r: string;
    films_age: string;
    films_picture: string;
}*/

@Table({tableName: 'films_main', timestamps: false, underscored: true})
export class FilmMain extends Model<FilmMain> {

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

    @BelongsToMany(() => PersonMain, () => DirectorsFilms)
    directors: PersonMain[];

    @Column({type: DataType.DOUBLE})
    filmGrade: number;

    @Column({type: DataType.INTEGER})
    filmTotalGrade: number;

    @Column({type: DataType.STRING(16)})
    filmR: string;

    @Column({type: DataType.STRING(16)})
    filmAge: string;

    @BelongsToMany(() => PersonMain, () => FilmsActors)
    actors: PersonMain[];

    @Column({type: DataType.STRING})
    filmPoster: string;

}