import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Persons } from "./persons/persons.model";
import { PersonsModule } from "./persons/persons.module";
import { Directors } from "./persons/directors.model";
import { PersonLang } from "./persons/persons-lang.model";
import { FilmsActors } from "./persons/films-actors.model";
import { DirectorsFilms } from "./persons/directors-films.model";


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
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [Persons, Directors, PersonLang, 
                Directors, FilmsActors, DirectorsFilms],
            autoLoadModels: true
        }),
        PersonsModule

    ]
})
export class AppModule {};