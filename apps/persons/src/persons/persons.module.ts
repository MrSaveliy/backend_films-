import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SharedModule } from '@app/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { Persons } from './persons.model';
import { Directors } from './directors.model';
import { PersonLang } from './persons-lang.model';
import { FilmsActors } from './films-actors.model';
import { DirectorsFilms } from './directors-films.model';



@Module({
  controllers: [PersonsController],
  providers: [PersonsService],
  imports: [SequelizeModule.forFeature([Persons, Directors, PersonLang, 
    Directors, FilmsActors, DirectorsFilms]), 
  ClientsModule.register([
        {
          name: 'persons_service',
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://localhost:5672`],
            queue: 'persons_queue',
            queueOptions: {
              durable: false,
            },
          },
        },
      ]),
      SharedModule,
    ],
  exports:[]
})
export class PersonsModule {}