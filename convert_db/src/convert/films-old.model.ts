import {Column, DataType, Model, Table} from "sequelize-typescript";

/*interface RoleCreationAttrs {
    value: string;
    description: string;
}*/

@Table({tableName: 'films_old', timestamps: false})
export class FilmWithGenres extends Model<FilmWithGenres> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    film_name_ru: string;

    @Column({type: DataType.STRING})
    film_name_en: string;

    @Column({type: DataType.STRING})
    film_web_url: string;

    @Column({type: DataType.INTEGER})
    film_year: number;

    @Column({type: DataType.INTEGER})
    film_filmlength: number;

    @Column({type: DataType.STRING})
    film_type: string;

    @Column({type: DataType.ARRAY(DataType.STRING)})
    country_list: string[];

    @Column({type: DataType.ARRAY(DataType.STRING)})
    genre_list: string[];

    @Column({type: DataType.STRING})
    film_poster_url: string;

    @Column({type: DataType.TEXT})
    film_shortdescription: string;

    @Column({type: DataType.STRING})
    film_ratingagelimits: string;

    @Column({type: DataType.DOUBLE})
    film_ratingkinopoisk: number;

    @Column({type: DataType.INTEGER})
    film_ratingkinopoiskcount: number;

    @Column({type: DataType.STRING})
    film_ratingmpaa: string;

    @Column({type: DataType.STRING})
    films_trailer: string;    

    @Column({type: DataType.ARRAY(DataType.INTEGER)})
    actors_list: number[];

    @Column({type: DataType.ARRAY(DataType.INTEGER)})
    directors_list: number[];

}