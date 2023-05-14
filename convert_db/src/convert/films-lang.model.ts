import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { FilmMain } from "./films.model";

@Table({tableName: 'films_lang', timestamps: false, underscored: true})
export class FilmLang extends Model<FilmLang> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => FilmMain)
    @Column({type: DataType.INTEGER})
    filmId: number;

    @BelongsTo(() => FilmMain, {onDelete: 'CASCADE',  hooks:true})
    film: FilmMain;

    @Column({type: DataType.STRING(16)})
    lang: string;

    @Column({type: DataType.STRING})
    filmName: string;

    @Column({type: DataType.TEXT})
    filmDescription: string;

}