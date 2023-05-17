import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { Country } from './country.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '@app/common';

@Module({
    controllers: [CountryController],
    providers: [CountryService],
    imports: [SequelizeModule.forFeature([Country]),
    ConfigModule.forRoot({
        envFilePath: `.env`
    }),
        SharedModule
    ],
    exports: [CountryService]
})

export class CountryModule {}
