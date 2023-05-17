import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";


interface MainCreationAttrs {
};

@Table( {tableName: 'main', underscored: true, timestamps: false })
export class Main extends Model<Main, MainCreationAttrs > {

    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    

}