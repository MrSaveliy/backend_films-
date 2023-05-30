import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { FilmMain } from "./films.model";
import { PersonMain } from "./persons-main.model";

@Table({tableName: 'directors_films', timestamps: false, underscored: true})
export class DirectorsFilms extends Model<DirectorsFilms> {

    @ForeignKey(() => PersonMain)
    @Column({type: DataType.INTEGER, primaryKey: true})
    directorId: number;

    @ForeignKey(() => FilmMain)
    @Column({type: DataType.INTEGER, primaryKey: true})
    filmId: number;

}