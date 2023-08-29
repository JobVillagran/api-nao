import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsuariosService {
  private readonly saltRounds = 10;
  private readonly jwtSecret = 'miSecretoSuperSeguro';

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async registrar(usuario: Usuario): Promise<Usuario> {
    const hash = await bcrypt.hash(usuario.contraseña, this.saltRounds);
    usuario.contraseña = hash;
    return this.usuarioRepository.save(usuario);
  }

  async login(usuario: Usuario): Promise<string> {
    const usuarioRegistrado = await this.usuarioRepository.findOne({
      where: { nombreUsuario: usuario.nombreUsuario },
    });
    if (!usuarioRegistrado) {
      throw new Error('Usuario no encontrado');
    }

    const contraseñaCoincide = await bcrypt.compare(
      usuario.contraseña,
      usuarioRegistrado.contraseña,
    );

    if (!contraseñaCoincide) {
      throw new Error('Contraseña incorrecta');
    }

    const token = jwt.sign({ sub: usuarioRegistrado.id }, this.jwtSecret);
    return token;
  }
}
