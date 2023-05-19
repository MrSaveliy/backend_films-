import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Person } from "./persons.model";

@Table({tableName: 'directors_films', timestamps: false, underscored: true})
export class DirectorsFilms extends Model<DirectorsFilms> {

    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER, primaryKey: true})
    directorId: number;

    @Column({type: DataType.INTEGER, primaryKey: true})
    filmId: number;

}   