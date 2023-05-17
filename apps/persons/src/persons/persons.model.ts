import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";


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

@Table({tableName: 'persons_main', timestamps: false, underscored: true})
export class PersonMain extends Model<PersonMain> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

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

}