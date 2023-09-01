import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LibrosController } from '../libros/libros.controller';
import { LibrosService } from '../libros/libros.service';
import { Libro } from '../libros/libro.entity';
import { Repository } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

describe('LibrosController', () => {
  let librosController: LibrosController;
  let librosService: LibrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibrosController],
      providers: [
        LibrosService,
        {
          provide: getRepositoryToken(Libro),
          useClass: Repository,
        },
      ],
    }).compile();

    librosController = module.get<LibrosController>(LibrosController);
    librosService = module.get<LibrosService>(LibrosService);
  });

  describe('crear', () => {
    it('should create a libro', async () => {
      const libro = { titulo: 'El libro', anioPublicacion: 2023, autor: { id: 1 } as Usuario, id: 1 };
      const createdLibro = { ...libro } as Libro;

    });
  });
});