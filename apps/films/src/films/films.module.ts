import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { Films } from './films.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SharedModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';

import { GenresFilms } from './genres-films.model';

@Module({
  controllers: [FilmsController],
  providers: [FilmsService],
  imports: [SequelizeModule.forFeature([Films, GenresFilms]),
  ConfigModule.forRoot({
    envFilePath: `.env`
 }), 
  ClientsModule.register([
        {
          name: 'FILMS_SERVICE',
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
      SharedModule    
    ],
    exports:[FilmsService]
})

export class FilmsModule {}
