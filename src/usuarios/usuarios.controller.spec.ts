import { Controller, Post, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('registro')
  async registrarUsuario(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuariosService.registrar(usuario);
  }

  @Post('login')
  async login(@Body() usuario: Usuario): Promise<string> {
    return this.usuariosService.login(usuario);
  }
}
