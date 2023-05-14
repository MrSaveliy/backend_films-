import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import { FilmMain } from "./films.model";
import { DirectorsFilms } from "./directors-films.model";

@Table({tableName: 'directors', timestamps: false})
export class Director extends Model<Director> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    lang: string;

    @Column({type: DataType.STRING, unique: true})
    fullName: string;

    /*@BelongsToMany(() => FilmMain, () => DirectorsFilms)
    films: FilmMain[];*/

}