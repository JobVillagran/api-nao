import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosController } from './libros/libros.controller';
import { UsuariosController } from './usuarios/usuarios.controller';

@Module({
  imports: [],
  controllers: [AppController, LibrosController, UsuariosController],
  providers: [AppService],
})
export class AppModule {}
