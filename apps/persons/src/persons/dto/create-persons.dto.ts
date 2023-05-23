import { ApiProperty } from "@nestjs/swagger";

export class CreatePersonsDto {

    @ApiProperty({example: 'https://www.kinopoisk.ru/name/3/', description: 'Ссылка на человека'})
    readonly personLink: string;

    @ApiProperty({example: 'https://kinopoiskapiunofficial.tech/images/actor_posters/kp/110.jpg', description: 'Ссылка на фото человека '})
    readonly personPicture: string;

    @ApiProperty({example: 'MALE', description: 'Пол человека'})
    readonly personGender: string;

    @ApiProperty({example: '185', description: 'Рост человека'})
    readonly height: number;

    @ApiProperty({example: '75', description: 'Возраст человека'})
    readonly age: number;

    @ApiProperty({example: '1946-06-28', description: 'Дата рождения'})
    readonly birthDate: string;
}