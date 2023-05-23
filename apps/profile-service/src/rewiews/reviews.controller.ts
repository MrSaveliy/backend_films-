import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateReviewsDto } from './dto/create-main-page.dto';
import { ReviewsService } from './reviews.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Reviews } from './reviews.model';


@Controller('reviews')
export class ReviewsController {
    constructor(private reviewsService: ReviewsService) {}

    @ApiOperation({summary: "Получение пользователя по типу фильма"})
    @ApiResponse({status: 200, type: Reviews})
    @Post()
    create(@Body() dto: CreateReviewsDto) {
        return this.reviewsService.createReviews(dto); 
    }
    
    @ApiOperation({summary: "Получение пользователя по типу фильма"})
    @ApiResponse({status: 200, type: Reviews})
    @Get()
    getAll() {
        return this.reviewsService.getAll();
    }

}
