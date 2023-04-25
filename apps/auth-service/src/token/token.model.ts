import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../auth/auth.model";

interface TokenCreationAttrs {
    refreshToken: string;
    userId: number;
}

@Table({ tableName: 'token' })
export class Token extends Model<Token, TokenCreationAttrs> {

    @Column({ type: DataType.TEXT, primaryKey: true })
    refreshToken: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @BelongsTo(() => User, { onDelete: 'CASCADE', hooks: true })
    user: User;

}