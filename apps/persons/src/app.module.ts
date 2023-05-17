import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Persons } from "./persons/persons.model";
import { PersonsModule } from "./persons/persons.module";
import { Directors } from "./persons/directors.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
           envFilePath: `.env`
        }),
        SequelizeModule.forRoot({
            //dialectModule: require('pg'),
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '12345678',
            database: 'persons_v2',
            models: [Persons, Directors],
            autoLoadModels: true
        }),
        PersonsModule

    ]
})
export class AppModule {};