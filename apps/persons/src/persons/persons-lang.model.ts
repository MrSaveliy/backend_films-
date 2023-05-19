import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Person } from "./persons.model";

@Table({tableName: 'persons_lang', timestamps: false, underscored: true})
export class PersonLang extends Model<PersonLang> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER})
    personId: number;

    @BelongsTo(() => Person, {onDelete: 'CASCADE',  hooks:true})
    person: Person;

    @Column({type: DataType.STRING(16)})
    lang: string;

    @Column({type: DataType.STRING})
    personName: string;

    @Column({type: DataType.STRING})
    career: string;

    @Column({type: DataType.STRING})
    birthPlace: string;

}