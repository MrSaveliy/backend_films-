import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../auth/auth.model";
import { ApiProperty } from "@nestjs/swagger";

interface TokenCreationAttrs {
    refreshToken: string;
    userId: number;
}

@Table({ tableName: 'token', underscored: true })
export class Token extends Model<Token, TokenCreationAttrs> {

    @ApiProperty({example: 'dksgjisr123j1n23jnfdusfo', description: 'Уникальный токен пользоватля'})
    @Column({ type: DataType.TEXT, primaryKey: true })
    refreshToken: string;

    @ApiProperty({example: '1', description: 'Уникальный модификатор, id пользователя'})
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @BelongsTo(() => User, { onDelete: 'CASCADE', hooks: true })
    user: User;

}