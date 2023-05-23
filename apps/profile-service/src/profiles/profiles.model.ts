import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ProfileCreationAttrs {
    userId: number;
    name: string;
    middleName: string;
    lastName: string;
    description: string;
    phoneNumber: string;
}

@Table({tableName: 'profiles'})
export class Profile extends Model<Profile, ProfileCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '1', description: 'Уникальный индентификатор, id пользователся'})
    @Column({type: DataType.INTEGER, unique: true})
    userId: number;

    @ApiProperty({example: 'Анатолий', description: 'Имя пользователя'})
    @Column({type: DataType.STRING})
    name: string;

    @ApiProperty({example: 'Максимович', description: 'Отчество пользователя'})
    @Column({type: DataType.STRING})
    middleName: string;

    @ApiProperty({example: 'Пушкин', description: 'Фамилия пользователя'})
    @Column({type: DataType.STRING})
    lastName: string;

    @ApiProperty({example: 'О себе:', description: 'Описание пользователя'})
    @Column({type: DataType.STRING})
    description: string;

    @ApiProperty({example: '+79999999999', description: 'Телефон пользователя'})
    @Column({type: DataType.STRING})
    phoneNumber: string;
}