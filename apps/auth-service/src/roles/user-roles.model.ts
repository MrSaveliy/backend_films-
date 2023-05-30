import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../auth/auth.model";
import {Role} from "./roles.model";


@Table({tableName: 'user_roles', timestamps: false, underscored: true})
export class UserRoles extends Model<UserRoles> {

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER, primaryKey: true})
    roleId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, primaryKey: true})
    userId: number;

}