import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Profile } from './profiles.model';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SharedModule } from '@app/common';

@Module({
    controllers: [ProfilesController],
    providers: [ProfilesService],
    imports: [
        ClientsModule.register([{
            name: 'auth_service',
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://rabbitmq:5672'],
                queue: 'auth-queue',
                queueOptions: {
                    durable: false
                }
            }
        }]),
        SequelizeModule.forFeature([Profile]),
        SharedModule,
    ],
    exports: [
        ProfilesService,
    ]
})
export class ProfilesModule { };