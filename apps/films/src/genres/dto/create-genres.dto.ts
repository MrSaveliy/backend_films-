import { ApiProperty } from "@nestjs/swagger";

export class CreateGenresDto {
    @ApiProperty({example: 'ru', description: 'Язык'})
    readonly lang: string;
    @ApiProperty({example: 'триллер', description: 'Название жанра'})
    readonly name: string;
}
   