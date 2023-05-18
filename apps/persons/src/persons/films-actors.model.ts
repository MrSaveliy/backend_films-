import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Persons } from "./persons.model";

@Table({tableName: 'films_actors', timestamps: false, underscored: true})
export class FilmsActors extends Model<FilmsActors> {

    @ForeignKey(() => Persons)
    @Column({type: DataType.INTEGER, primaryKey: true})
    actorId: number;

    @Column({type: DataType.INTEGER, primaryKey: true})
    filmId: number;

}