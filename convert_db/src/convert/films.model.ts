import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import { Genre } from "./genres.model";
import { GenresFilms } from "./films-genres.model";

interface FilmCreationAttrs {
    films_name: string;
    films_link: string;
    films_trailer: string;
    films_date: string;
    films_list_country: string[];
    films_list_director: string[];
    films_grade: string;
    films_total_grade: string;
    films_r: string;
    films_age: string;
    films_time: string;
    films_list_actor: string[];
    films_picture: string;
}

@Table({tableName: 'films', timestamps: false})
export class Film extends Model<Film, FilmCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    films_name: string;

    @Column({type: DataType.STRING})
    films_link: string;

    @Column({type: DataType.STRING})
    films_trailer: string;

    @Column({type: DataType.STRING})
    films_date: string;

    @Column({type: DataType.ARRAY(DataType.STRING)})
    films_list_country: string[];

    @BelongsToMany(() => Genre, () => GenresFilms)
    genres: Genre[];

    @Column({type: DataType.ARRAY(DataType.STRING)})
    films_list_director: string[];

    @Column({type: DataType.STRING})
    films_grade: string;

    @Column({type: DataType.STRING})
    films_total_grade: string;

    @Column({type: DataType.STRING})
    films_r: string;

    @Column({type: DataType.STRING})
    films_age: string;

    @Column({type: DataType.STRING})
    films_time: string;

    @Column({type: DataType.ARRAY(DataType.STRING)})
    films_list_actor: string[];

    @Column({type: DataType.TEXT})
    films_picture: string;

}