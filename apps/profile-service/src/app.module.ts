import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Profile } from "./profiles/profiles.model";
import { ProfilesModule } from "./profiles/profiles.module";
import { Reviews } from "./rewiews/reviews.model";
import { ReviewsModule } from "./rewiews/reviews.module";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
           envFilePath: `.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: 5432,
            username: 'postgres',
            password: '12345678',
            database: 'profile',
            models: [Profile, Reviews],
            autoLoadModels: true
        }),
        ProfilesModule,
        ReviewsModule
    ]
})
export class AppModule {};