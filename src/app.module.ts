import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrosModule } from './libros/libros.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'nao-final.mysql.database.azure.com', // Cambia esto a tu configuración de host
      port: 3306, // Cambia esto al puerto de tu base de datos
      username: 'naoroot', // Cambia esto a tu usuario de base de datos
      password: 'Seguridad2025*', // Cambia esto a tu contraseña de base de datos
      database: 'testnao', // Cambia esto a tu nombre de base de datos
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