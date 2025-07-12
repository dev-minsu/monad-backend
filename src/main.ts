import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn'],
  });
  await app.listen(3005);
  app.enableCors({ origin: '*' });
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
