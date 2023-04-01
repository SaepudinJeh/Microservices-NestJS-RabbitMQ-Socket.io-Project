import { NestFactory } from '@nestjs/core';
import { MessagesServiceModule } from './messages-service.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesServiceModule);
  await app.listen(3000);
}
bootstrap();
