import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateReviewsDto } from './dto/create-main-page.dto';
import { ReviewsService } from './reviews.service';


@Controller('reviews')
export class ReviewsController {
    constructor(private reviewsService: ReviewsService) {}

    @Post()
    create(@Body() dto: CreateReviewsDto) {
        return this.reviewsService.createReviews(dto); 
    }
    
    @Get()
    getAll() {
        return this.reviewsService.getAll();
    }

}
