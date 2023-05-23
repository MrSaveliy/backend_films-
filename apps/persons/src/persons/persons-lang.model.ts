import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Person } from "./persons.model";
import { ApiProperty } from "@nestjs/swagger";

@Table({tableName: 'persons_lang', timestamps: false, underscored: true})
export class PersonLang extends Model<PersonLang> {

    @ApiProperty({example: '1', description: 'Уникальный индентификатор, id актера'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '1', description: 'Уникальный индентификатор, id человека'})
    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER})
    personId: number;

    @BelongsTo(() => Person, {onDelete: 'CASCADE',  hooks:true})
    person: Person;

    @ApiProperty({example: 'ru', description: 'Язык'})
    @Column({type: DataType.STRING(16)})
    lang: string;

    @ApiProperty({example: 'Уэс Бентли', description: 'Имя человека'})
    @Column({type: DataType.STRING})
    personName: string;

    @ApiProperty({example: 'Актер, Продюсер', description: 'Профессия человека'})
    @Column({type: DataType.STRING})
    career: string;

    @ApiProperty({example: 'Джонсборо, Арканзас, США', description: 'Место рождения'})
    @Column({type: DataType.STRING})
    birthPlace: string;

}