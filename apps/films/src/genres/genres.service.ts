import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGenresDto } from './dto/create-genres.dto';
import { Genre } from './genres.model';



@Injectable()
export class GenresService {

    constructor (@InjectModel(Genre) private genresRepository: typeof Genre) {}
    
    async createGenres(dto: CreateGenresDto) {
        const genres = await this.genresRepository.create(dto);
        return genres;
    }

    async getAll() {
        const users = await this.genresRepository.findAll({include: {all: true}});
        return users;
    }
}
