import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SharedModule } from '@app/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { Persons } from './persons.model';



@Module({
  controllers: [PersonsController],
  providers: [PersonsService],
  imports: [SequelizeModule.forFeature([Persons]), 
  ClientsModule.register([
        {
          name: 'personss_service',
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://localhost:5672`],
            queue: 'personss_queue',
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