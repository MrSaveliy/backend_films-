import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Film } from "../films/films.model";
import { CountriesFilms } from "./countries-films.model";



@Table({tableName: 'countries', timestamps: false})
export class Country extends Model<Country> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING(16)})
    lang: string;

    @Column({type: DataType.STRING, unique: true})
    name: string;

    @BelongsToMany(() => Film, () => CountriesFilms)
    films: Film[];

}