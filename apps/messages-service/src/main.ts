import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MessagesServiceModule } from './messages-service.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesServiceModule);
  app.useGlobalPipes(new ValidationPipe());

  const configSwagger = new DocumentBuilder()
    .setTitle('Specs Documentation API Message App')
    .setDescription('This Specs Documentation API Message App')
    .setVersion('1.0')
    .build();

  const documentSwagger = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api/v1', app, documentSwagger);

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
