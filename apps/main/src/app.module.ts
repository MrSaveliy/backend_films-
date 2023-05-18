import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { MainModule } from "./main-page/main.module";
import { Main } from "./main-page/main.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
           envFilePath: `C:\Users\Савелий\Desktop\JS\kino\apps\films\.env`
        }),
        SequelizeModule.forRoot({
            //dialectModule: require('pg'),
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [Main],
            autoLoadModels: true
        }),
        MainModule,
    ]
})
export class AppModule {};