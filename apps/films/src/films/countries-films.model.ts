import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { Films } from "./films.model";
import { Country } from "../country/country.model";


@Table({tableName: 'countries_films', timestamps: false, underscored: true})
export class CountriesFilms extends Model<CountriesFilms> {

    @ForeignKey(() => Country)
    @Column({type: DataType.INTEGER, primaryKey: true})
    countryId: number;

    @ForeignKey(() => Films)
    @Column({type: DataType.INTEGER, primaryKey: true})
    filmId: number;

}