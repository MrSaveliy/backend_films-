import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { FilmsModule } from "./films/films.module";
import { Films } from "./films/films.model";
import { GenresModule } from "./genre/genres.module";
import { GenresFilms } from "./films/genres-films.model";
import { Genres } from "./genre/genres.model";

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
            username: 'postgres',
            password: '12345678',
            database: 'films',
            models: [Films, Genres, GenresFilms],
            autoLoadModels: true
        }),
        FilmsModule,
        GenresModule
    ]
})
export class AppModule {};