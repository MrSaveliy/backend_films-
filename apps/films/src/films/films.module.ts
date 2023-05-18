import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { Films } from './films.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SharedModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { GenresFilms } from '../genre/genres-films.model';
import { GenresService } from '../genre/genres.service';
import { GenresModule } from '../genre/genres.module';
import { Genres } from '../genre/genres.model';
import { CountryModule } from '../country/country.module';
import { CountryService } from '../country/country.service';
import { CountriesFilms } from '../country/countries-films.model';
import { Country } from '../country/country.model';
import { FilmLang } from './films-lang.model';

@Module({
  controllers: [FilmsController],
  providers: [FilmsService],
  imports: [SequelizeModule.forFeature([Films, Genres, GenresFilms, Country, CountriesFilms, FilmLang]), 
  ClientsModule.register([
        {
          name: 'films_service',
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://localhost:5672`],
            queue: 'films_queue',
            queueOptions: {
              durable: false,
            },
          },
        },
      ]),
      SharedModule,
      GenresModule,
      CountryModule
    ],
    exports:[FilmsService]
})

export class FilmsModule {}
