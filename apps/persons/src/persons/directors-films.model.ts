import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Person } from "./persons.model";
import { ApiProperty } from "@nestjs/swagger";

@Table({tableName: 'directors_films', timestamps: false, underscored: true})
export class DirectorsFilms extends Model<DirectorsFilms> {

    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER, primaryKey: true})
    directorId: number;

    @ApiProperty({example: '1', description: 'Id фильма'})
    @Column({type: DataType.INTEGER, primaryKey: true})
    filmId: number;

}   