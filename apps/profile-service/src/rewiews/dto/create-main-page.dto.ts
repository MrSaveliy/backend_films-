import { ApiProperty } from "@nestjs/swagger";

export class CreateReviewsDto {
    @ApiProperty({example: 'Хороший фильм', description: 'Коментарий к фильму'})
    readonly reviews: string;
}