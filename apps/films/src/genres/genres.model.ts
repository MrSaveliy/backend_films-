import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import { GenresFilms } from "./genres-films.model";
import { Film } from "../films/films.model";


@Table({tableName: 'genres', timestamps: false})
export class Genre extends Model<Genre> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @Column({type: DataType.STRING(16)})
    lang: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @BelongsToMany(() => Film, () => GenresFilms)
    films: Film[];

}