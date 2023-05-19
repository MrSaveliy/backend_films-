import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Person } from "./persons.model";

@Table({tableName: 'films_actors', timestamps: false, underscored: true})
export class FilmsActors extends Model<FilmsActors> {

    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER, primaryKey: true})
    actorId: number;

    @Column({type: DataType.INTEGER, primaryKey: true})
    filmId: number;

}