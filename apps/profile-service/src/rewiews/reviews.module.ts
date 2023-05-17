import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SharedModule } from '@app/common';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { Reviews } from './reviews.model';

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService],
  imports: [SequelizeModule.forFeature([Reviews]), 
  ClientsModule.register([
        {
          name: 'reviews_service',
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://localhost:5672`],
            queue: 'review_queue',
            queueOptions: {
              durable: false,
            },
          },
        },
      ]),
      SharedModule,
    ],
  exports:[ReviewsService]
})
export class ReviewsModule {}
