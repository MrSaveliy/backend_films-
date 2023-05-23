import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Film } from "./films.model";
import { ApiProperty } from "@nestjs/swagger";

@Table({tableName: 'films_lang', timestamps: false, underscored: true})
export class FilmLang extends Model<FilmLang> {

    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '298', description: 'Уникальный индентификатор, id фильма'})
    @ForeignKey(() => Film)
    @Column({type: DataType.INTEGER})
    filmId: number;

    @BelongsTo(() => Film, {onDelete: 'CASCADE',  hooks:true})
    film: Film;

    @ApiProperty({example: 'ru', description: 'Язык'})
    @Column({type: DataType.STRING(16)})
    lang: string;

    @ApiProperty({example: 'Люди Икс', description: 'Название фильма'})
    @Column({type: DataType.STRING})
    filmName: string;

    @ApiProperty({example: 'Супергерои в опале...', description: 'Описание фильма'})
    @Column({type: DataType.TEXT})
    filmDescription: string;

}