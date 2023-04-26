import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConvertModule } from './convert/convert.module';
import { Film } from './convert/films.model';
import { FilmWithGenres } from './convert/films-with-genres.model';
import { GenresFilms } from './convert/films-genres.model';
import { Genre } from './convert/genres.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Film, FilmWithGenres, GenresFilms, Genre],
      autoLoadModels: true
    }),
    ConvertModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule { }
