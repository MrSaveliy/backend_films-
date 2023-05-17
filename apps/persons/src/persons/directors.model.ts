import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'directors', timestamps: false})
export class Directors extends Model<Directors> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    lang: string;

    @Column({type: DataType.STRING, unique: true})
    fullName: string;

    /*@BelongsToMany(() => FilmMain, () => DirectorsFilms)
    films: FilmMain[];*/

}