import { ApiProperty } from "@nestjs/swagger";

export class CreateFilmsDto {

    @ApiProperty({example: 'FILM', description: 'Тип фильма(фильм или сериал)'})
    readonly filmType: string;

    @ApiProperty({example: 'https://www.kinopoisk.ru/film/298/', description: 'Ссылка на фильм'})
    readonly filmLink: string;

    @ApiProperty({example: 'https://widgets.kinopoisk.ru/discovery/trailer/648?onlyPlayer=1&autoplay=1&cover=1', description: 'Ссылка на трейлер фильмa'})
    readonly filmTrailer: string;

    @ApiProperty({example: '2003', description: 'Год выпуска фильма'})
    readonly filmYear: number;

    @ApiProperty({example: '134', description: 'Длительность фильма в минутах'})
    readonly filmTime: number;

    @ApiProperty({example: '7.8', description: 'Оценка фильма(рейтинг кинопоиска)'})
    readonly filmGrade: number;

    @ApiProperty({example: '1223', description: 'Количество оценок'})
    readonly filmTotalGrade: number;

    @ApiProperty({example: 'r', description: 'Рейтинг фильма MPPA'})
    readonly filmR: string;

    @ApiProperty({example: '16', description: 'Возрастное ограничение фильма'})
    readonly filmAge: string;

    @ApiProperty({example: 'https://kinopoiskapiunofficial.tech/images/posters/kp/298.jpg', description: 'Ссылка на картинку фильма'})
    readonly filmPoster: string;
}