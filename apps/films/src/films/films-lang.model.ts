import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Film } from "./films.model";

@Table({tableName: 'films_lang', timestamps: false, underscored: true})
export class FilmLang extends Model<FilmLang> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Film)
    @Column({type: DataType.INTEGER})
    filmId: number;

    @BelongsTo(() => Film, {onDelete: 'CASCADE',  hooks:true})
    film: Film;

    @Column({type: DataType.STRING(16)})
    lang: string;

    @Column({type: DataType.STRING})
    filmName: string;

    @Column({type: DataType.TEXT})
    filmDescription: string;

}