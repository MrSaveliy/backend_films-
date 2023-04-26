import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { Genre } from "./genres.model";
import { Film } from "./films.model";

@Table({tableName: 'genres_films', timestamps: false, underscored: true})
export class GenresFilms extends Model<GenresFilms> {

    @ForeignKey(() => Genre)
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    genreId: number;

    @ForeignKey(() => Film)
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    filmId: number;

}