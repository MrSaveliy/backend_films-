import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Reviews } from "./reviews.model";
import { CreateReviewsDto } from "./dto/create-main-page.dto";

@Injectable()
export class ReviewsService {

    constructor (@InjectModel(Reviews) private reviewsRepository: typeof Reviews) {}
    
    async createReviews(dto: CreateReviewsDto) {
        const reviews = await this.reviewsRepository.create(dto);
        return reviews;
    }

    async getAll() {
        const reviews = await this.reviewsRepository.findAll({include: {all: true}});
        return reviews;
    }
}