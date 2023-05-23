import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CreateGenresDto } from './dto/create-genres.dto';
import { GenresService } from './genres.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Genre } from './genres.model';

@ApiTags('genres')
@Controller('genres')
export class GenresController {
    constructor(private genresService: GenresService) {}

    @ApiOperation({summary: "Создание жанра"})
    @ApiResponse({status: 200, type: Genre})
    @Post()
    async create(@Body() dto: CreateGenresDto) {
        return await this.genresService.createGenres(dto); 
    }
    
    @ApiOperation({summary: "Получение всех жанров"})
    @ApiResponse({status: 200, type: Genre})
    @Get()
    async getAll() {
        return await this.genresService.getAll();
    }

    @ApiOperation({summary: "Получение жанра по id"})
    @ApiResponse({status: 200, type: Genre})
    @Get('/:id')
    async getGenreById(@Param('id') id: number) {
        const genre = await this.genresService.getGenreById(id);
        if (!genre) {
            throw new NotFoundException(`Film with id ${id} not found`);
          }
        return genre;
    }

    @ApiOperation({summary: "Изменение жанра по id"})
    @ApiResponse({status: 200, type: Genre})
    @Put(':id/name')
    async updateGenreName(@Param('id') id: number, @Body('name') newName: string) {
        const genre = await this.genresService.updateGenreName(id, newName);
        if (!genre) {
        throw new NotFoundException(`Film with id ${id} not found`);
        }
        return genre;
    }

    @ApiOperation({summary: "Удаление жанра по id"})
    @ApiResponse({status: 200, type: Genre})
    @Delete(':id')
    async deleteFilm(@Param('id') id: number) {
       return await this.genresService.deleteGenre(id);
    }
    
}
