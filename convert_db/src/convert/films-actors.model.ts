import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { FilmMain } from "./films.model";
import { PersonMain } from "./persons-main.model";

@Table({tableName: 'films_actors', timestamps: false, underscored: true})
export class FilmsActors extends Model<FilmsActors> {

    @ForeignKey(() => PersonMain)
    @Column({type: DataType.INTEGER, primaryKey: true})
    actorId: number;

    @ForeignKey(() => FilmMain)
    @Column({type: DataType.INTEGER, primaryKey: true})
    filmId: number;

}