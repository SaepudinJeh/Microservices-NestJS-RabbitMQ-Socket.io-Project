import { RmqService } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { NotificationServiceModule } from './notification-service.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(NotificationServiceModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('MESSAGE'));
  await app.startAllMicroservices();

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

  await app.listen(3000);
}
bootstrap();
