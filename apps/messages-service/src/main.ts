import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { MessagesServiceModule } from './messages-service.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesServiceModule);

  app.use(helmet());

  const whitelist = [
    'http://localhost',
    'http://localhost:5500',
    '*',
    'http://localhost:3001',
    'http://localhost:3000',
  ];
  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  });
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
