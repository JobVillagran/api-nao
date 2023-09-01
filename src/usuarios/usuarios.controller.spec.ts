import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsuariosController } from '../usuarios/usuarios.controller';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Usuario } from '../usuarios/usuario.entity';
import { Repository } from 'typeorm';

describe('UsuariosController', () => {
  let usuariosController: UsuariosController;
  let usuariosService: UsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [
        UsuariosService,
        {
          provide: getRepositoryToken(Usuario),
          useClass: Repository,
        },
      ],
    }).compile();

    usuariosController = module.get<UsuariosController>(UsuariosController);
    usuariosService = module.get<UsuariosService>(UsuariosService);
  });

  describe('registrarUsuario', () => {
    it('should register a new user', async () => {
      // Implement your test here
    });
  });

  describe('login', () => {
    it('should log in a user', async () => {
      // Implement your test here
    });
  });
});
