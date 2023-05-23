import { Injectable, NotFoundException } from '@nestjs/common';
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

    async getGenreById(id: number) {
        const genre = await this.genresRepository.findByPk(id);
        if (!genre) {
            throw new NotFoundException(`Genre with id ${id} not found`);
        }
        return genre;
    }

    async updateGenreName(id: number, newgenreName: string) {
        const genre = await this.genresRepository.findByPk(id);
        if (!genre) {
            throw new NotFoundException(`Genre with id ${id} not found`);
        }
        genre.name = newgenreName;
        await genre.save();
        return genre;
    }

    async deleteGenre(id: number) {
        const genre = await this.genresRepository.findByPk(id);
        if (!genre) {
            throw new NotFoundException(`Genre with id ${id} not found`);
        }
        await genre.destroy()
        return genre;
    }

}
