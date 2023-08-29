import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrosModule } from './libros/libros.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Cambia esto a tu configuración de host
      port: 3306, // Cambia esto al puerto de tu base de datos
      username: 'root', // Cambia esto a tu usuario de base de datos
      password: 'password', // Cambia esto a tu contraseña de base de datos
      database: 'test', // Cambia esto a tu nombre de base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    LibrosModule,
    UsuariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
