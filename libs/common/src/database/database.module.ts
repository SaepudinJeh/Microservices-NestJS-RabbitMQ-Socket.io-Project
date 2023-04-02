// import { MongoClient } from 'mongodb';

// const url = 'mongodb://root:example@mongo1:27017,mongo2:27018,mongo3:27019/?replicaSet=rs0';

// const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = client.db('mydatabase');

// Use the db object to perform database operations

import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
