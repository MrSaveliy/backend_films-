import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";

import { Films } from "./films.model";
import { Genres } from "../genre/genres.model";

@Table({tableName: 'genres_films', timestamps: false, underscored: true})
export class GenresFilms extends Model<GenresFilms> {

    @ForeignKey(() => Genres)
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    genreId: number;

    @ForeignKey(() => Films)
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    filmId: number;

    @BelongsTo(() => Genres)
    genres: Genres;

    @BelongsTo(() => Films)
    films: Films;

}