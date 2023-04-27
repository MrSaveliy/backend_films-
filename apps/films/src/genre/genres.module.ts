import { SharedModule } from '@app/common';
import { GenresService } from './genres.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { GenresController } from './genres.controller';
import { Genres } from './genres.model';

@Module({
  controllers: [GenresController],
  providers: [GenresService],
  imports: [SequelizeModule.forFeature([Genres]),
  ConfigModule.forRoot({
    envFilePath: `.env`
 }), 
      SharedModule    
    ],
    exports:[GenresService]
})

export class GenresModule {}