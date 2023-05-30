import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import { GenresFilms } from "./films-genres.model";
import { FilmMain } from "./films.model";

@Table({tableName: 'genres', timestamps: false})
export class Genre extends Model<Genre> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING(16)})
    lang: string;

    @Column({type: DataType.STRING, unique: true})
    name: string;

    @BelongsToMany(() => FilmMain, () => GenresFilms)
    films: FilmMain[];

}