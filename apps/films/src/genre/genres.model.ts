import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import { GenresFilms } from "../films/genres-films.model";
import { Films } from "../films/films.model";


@Table({tableName: 'genres', timestamps: false})
export class Genres extends Model<Genres> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @Column({type: DataType.STRING(16)})
    lang: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @BelongsToMany(() => Films, () => GenresFilms)
    films: Films[];

}