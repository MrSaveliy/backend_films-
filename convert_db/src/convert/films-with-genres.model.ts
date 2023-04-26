import {Column, DataType, Model, Table} from "sequelize-typescript";

/*interface RoleCreationAttrs {
    value: string;
    description: string;
}*/

@Table({tableName: 'films_with_genres', timestamps: false})
export class FilmWithGenres extends Model<FilmWithGenres> {

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

    @Column({type: DataType.ARRAY(DataType.STRING)})
    films_list_genre: string[];

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