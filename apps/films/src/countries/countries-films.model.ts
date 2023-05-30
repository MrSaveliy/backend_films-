import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { Film } from "../films/films.model";
import { Country } from "./countries.model";


@Table({tableName: 'countries_films', timestamps: false, underscored: true})
export class CountriesFilms extends Model<CountriesFilms> {

    @ForeignKey(() => Country)
    @Column({type: DataType.INTEGER, primaryKey: true})
    countryId: number;

    @ForeignKey(() => Film)
    @Column({type: DataType.INTEGER, primaryKey: true})
    filmId: number;

}