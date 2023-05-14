import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { FilmMain } from "./films.model";
import { Country } from "./countries.model";

@Table({tableName: 'countries_films', timestamps: false, underscored: true})
export class CountriesFilms extends Model<CountriesFilms> {

    @ForeignKey(() => Country)
    @Column({type: DataType.INTEGER, primaryKey: true})
    countryId: number;

    @ForeignKey(() => FilmMain)
    @Column({type: DataType.INTEGER, primaryKey: true})
    filmId: number;

}