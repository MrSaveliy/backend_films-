import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {User} from "../auth/auth.model";
import {UserRoles} from "./user-roles.model";
import { ApiProperty } from "@nestjs/swagger";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'roles', timestamps: false})
export class Role extends Model<Role, RoleCreationAttrs> {
    
    @ApiProperty({example: '1', description: 'Уникальный модификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'USER', description: 'Значение роли'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Пользователь', description: 'Описание роли'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];

}