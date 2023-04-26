import { Module } from '@nestjs/common';
import { ConvertService } from './convert.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Film } from './films.model';
import { FilmWithGenres } from './films-with-genres.model';
import { GenresFilms } from './films-genres.model';
import { Genre } from './genres.model';
import { ConvertController } from './convert.controller';

@Module({
    providers: [ConvertService],
    controllers: [ConvertController],
    imports: [
        SequelizeModule.forFeature([Film, FilmWithGenres, GenresFilms, Genre]),
    ],
    exports: [
        ConvertService,
    ]
})
export class ConvertModule { }
