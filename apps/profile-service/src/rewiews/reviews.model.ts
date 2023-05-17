import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";


interface ReviewsCreationAttrs {
    reviews: string;
};

@Table( {tableName: 'reviews', underscored: true, timestamps: false })
export class Reviews extends Model<Reviews, ReviewsCreationAttrs > {

    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'Хороший фильм', description: 'Коментарий к фильму'})
    @Column({type: DataType.INTEGER, allowNull: false})
    reviews: string;
}