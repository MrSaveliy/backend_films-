import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    app.use(cookieParser())
    app.enableCors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
