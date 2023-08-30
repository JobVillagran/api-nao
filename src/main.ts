import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const options = new DocumentBuilder()
    .setTitle('NAO API')
    .setDescription('API de ejemplo para NAO')
    .setVersion('1.0')
    .addTag('Libros')
    .addTag('Usuarios')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
