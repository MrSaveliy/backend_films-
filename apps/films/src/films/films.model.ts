import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface FilmsCreationAttrs {
    films_link: string;
    films_name: string;
    films_trailer: string;
    films_date: string;
    films_list_country: string;
    films_list_genre: string;
    films_list_director: string;
    films_grade: string;
    films_total_grade: string;
    films_age: string;
    films_r: string;
    films_time: string;
    films_list_actor: string;
    films_picture: string;
}

@Table( {tableName: 'films', underscored: true, timestamps: false })
export class Films extends Model<Films, FilmsCreationAttrs > {

    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: '1+1', description: 'Название фильма'})
    @Column({type: DataType.STRING, allowNull: false })
    films_name: string;

    @ApiProperty({example: 'https://www.kinopoisk.ru/film/435/', description: 'Ссылка на фильм'})
    @Column({type: DataType.STRING, unique: true, allowNull: false })
    films_link: string;

    @ApiProperty({example: 'https://www.kinopoisk.ru/film/435/', description: 'Ссылка на трейлер фильма'})
    @Column({type: DataType.STRING, allowNull: false })
    films_trailer: string;

    @ApiProperty({example: '2011', description: 'Год выпуска фильма'})
    @Column({type: DataType.STRING, allowNull: false })
    films_date: string;

    @ApiProperty({example: '[Великобритания, США]', description: 'Список стран производства фильма'})
    @Column({type: DataType.STRING, allowNull: false })
    films_list_country: string;

    @ApiProperty({example: '[драма, приключение]', description: 'Список жанров фильма'})
    @Column({type: DataType.STRING, allowNull: false })
    films_list_genre: string;

    @ApiProperty({example: '[]', description: 'Список актеров'})
    @Column({type: DataType.STRING, allowNull: false })
    films_list_director: string;

    @ApiProperty({example: '8.8', description: 'Средняя оценка фильма'})
    @Column({type: DataType.STRING, allowNull: false })
    films_grade: string;

    @ApiProperty({example: '1123', description: 'Количество оценок фильма'})
    @Column({type: DataType.STRING, allowNull: false })
    films_total_grade: string;

    @ApiProperty({example: '18+', description: 'Ограничение по возрасту'})
    @Column({type: DataType.STRING, allowNull: false })
    films_age: string;

    @ApiProperty({example: 'R', description: 'Рейтинг'})
    @Column({type: DataType.STRING, allowNull: false })
    films_r: string;

    @ApiProperty({example: '1+1', description: 'Длительность фильма'})
    @Column({type: DataType.STRING, allowNull: false })
    films_time: string;

    @ApiProperty({example: '1+1', description: 'Список актеров'})
    @Column({type: DataType.STRING, allowNull: false })
    films_list_actor: string;

    @ApiProperty({example: '1+1', description: 'Ссылка на фото фильма'})
    @Column({type: DataType.TEXT, allowNull: false })
    films_picture: string;
}