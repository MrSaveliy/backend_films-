import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import { PersonLang } from "./persons-lang.model";
import { FilmMain } from "./films.model";
import { FilmsActors } from "./films-actors.model";

/*interface FilmMainCreationAttrs {
    films_link: string;
    films_trailer: string;
    films_date: string;
    films_grade: string;
    films_total_grade: string;
    films_r: string;
    films_age: string;
    films_list_actor: string[];
    films_picture: string;
}*/

@Table({tableName: 'persons_main', timestamps: false, underscored: true})
export class PersonMain extends Model<PersonMain> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @HasMany(() => PersonLang)
    personLang: PersonLang[];

    @Column({type: DataType.STRING})
    personLink: string;

    @Column({type: DataType.STRING})
    personPicture: string;

    @Column({type: DataType.STRING(16)})
    personGender: string;

    @Column({type: DataType.INTEGER})
    height: number;

    @Column({type: DataType.INTEGER})
    age: number;

    @Column({type: DataType.STRING})
    birthDate: string;

    @BelongsToMany(() => FilmMain, () => FilmsActors)
    films: FilmMain[];

}