import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGenresDto } from './dto/create-genres.dto';
import { Genres } from './genres.model';



@Injectable()
export class GenresService {

    constructor (@InjectModel(Genres) private genresRepository: typeof Genres) {}
    
    async createGenres(dto: CreateGenresDto) {
        const genres = await this.genresRepository.create(dto);
        return genres;
    }

    async getAll() {
        const users = await this.genresRepository.findAll({include: {all: true}});
        return users;
    }

    

}
