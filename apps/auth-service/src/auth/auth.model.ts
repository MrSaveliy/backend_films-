import {BelongsToMany, Column, DataType, HasOne, Model, Table} from "sequelize-typescript";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import { Token } from "../token/token.model";
import { ApiProperty } from "@nestjs/swagger";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный модификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '123@gmail.com', description: 'Почта пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '213dds-3df.', description: 'Пароль пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    
    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasOne(() => Token)
    token: Token;

}