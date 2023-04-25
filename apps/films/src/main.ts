import { NestFactory } from '@nestjs/core';
import { FilmsModule } from './films.module';

async function bootstrap() {
  const app = await NestFactory.create(FilmsModule);
  await app.listen(3000);
}
bootstrap();
