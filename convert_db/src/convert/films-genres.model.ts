import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { Genre } from "./genres.model";
import { FilmMain } from "./films.model";

@Table({tableName: 'genres_films', timestamps: false, underscored: true})
export class GenresFilms extends Model<GenresFilms> {

    @ForeignKey(() => Genre)
    @Column({type: DataType.INTEGER, primaryKey: true})
    genreId: number;

    @ForeignKey(() => FilmMain)
    @Column({type: DataType.INTEGER, primaryKey: true})
    filmId: number;

}