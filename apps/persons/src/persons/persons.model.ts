import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { PersonLang } from "./persons-lang.model";
import { DirectorsFilms } from "./directors-films.model";
import { FilmsActors } from "./films-actors.model";


interface PersonsCreationAttrs {
    persons_link: string;
    persons_name: string;
    persons_picture: string;
    persons_list_careera: string;
    persons_grow: string;
    persons_date_birth: string;
    persons_place_birth: string;
    persons_list_films: string;
};

@Table({tableName: 'persons', timestamps: false, underscored: true})
export class Person extends Model<Person> {

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

    @HasMany(() => FilmsActors)
    actorFilms: FilmsActors[];

    @HasMany(() => DirectorsFilms)
    directorFilms: DirectorsFilms[];

    films;

}