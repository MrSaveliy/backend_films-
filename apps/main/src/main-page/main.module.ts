import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SharedModule } from '@app/common';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import { Main } from './main.model';

@Module({
  controllers: [MainController],
  providers: [MainService],
  imports: [SequelizeModule.forFeature([Main]), 
  ClientsModule.register([
        {
          name: 'main_service',
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://localhost:5672`],
            queue: 'main_queue',
            queueOptions: {
              durable: false,
            },
          },
        },
      ]),
      SharedModule,
    ],
  exports:[MainService]
})
export class MainModule {}
