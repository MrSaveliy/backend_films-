import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Profile } from "../profiles/profiles.model";


interface ReviewsCreationAttrs {
    reviews: string;
};

@Table( {tableName: 'reviews', underscored: true, timestamps: true })
export class Reviews extends Model<Reviews, ReviewsCreationAttrs > {

    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'Хороший фильм', description: 'Коментарий к фильму'})
    @Column({type: DataType.INTEGER, allowNull: false})
    reviews: string;

    @BelongsTo(() => Profile, {onDelete: 'CASCADE',  hooks:true})
    profile: Profile;

    @ApiProperty({example: '1', description: 'Уникальный индентификатор, id пользователя'})
    @ForeignKey(() => Profile)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ApiProperty({example: '1', description: 'Уникальный индентификатор, id фильма'})
    @Column({type: DataType.INTEGER, unique: true,})
    filmId: number;

    @ForeignKey(() => Reviews)
    @Column({type: DataType.INTEGER, allowNull: false})
    reviewId;

    @HasMany(() => Reviews)
    childReviews: Reviews[];
    
}