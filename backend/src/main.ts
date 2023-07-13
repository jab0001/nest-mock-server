import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as packageJson from '../package.json';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = await app.get(ConfigService)
  const port = config.get<number>('API_PORT');
  const configSwagger = new DocumentBuilder()
    .setTitle('Описание API')
    .setDescription('API test mock server')
    .setVersion(packageJson.version)
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);

  SwaggerModule.setup('api', app, document);

  await app.listen(port || 3000);
}
bootstrap().then(() => Logger.log(`APP IS STARTED`));
