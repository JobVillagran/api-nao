import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import createRedocMiddleware from 'redoc-express'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const swaggerOptions = new DocumentBuilder()
    .setTitle('NAO API')
    .setDescription('API de ejemplo para NAO')
    .setVersion('1.0')
    .addTag('Libros')
    .addTag('Usuarios')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);

  // Configuración de ReDoc
  const redocOptions = {
    title: 'NAO API Documentation',
    specUrl: '/api-docs/json', // URL de la especificación OpenAPI generada por Swagger
  };
  const redocApp = express();
  const redocMiddleware = createRedocMiddleware(redocOptions); // Usar createRedocMiddleware
  redocApp.use(redocMiddleware);
  app.use('/redoc', redocApp);

  // Habilitar CORS para ReDoc
  app.enableCors();

  // Configurar Swagger
  SwaggerModule.setup('api-docs', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
