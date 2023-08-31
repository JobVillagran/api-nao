import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libro.entity';
import { Usuario } from 'src/usuarios/usuario.entity';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,
  ) {}

  async crear(libroDto: Libro): Promise<Libro> {
    const libro = new Libro();
    libro.titulo = libroDto.titulo;
    libro.anioPublicacion = libroDto.anioPublicacion;

    // Si el autor tiene un ID válido, asigna el autor al libro
    if (libroDto.autor && libroDto.autor.id) {
      libro.autor = { id: libroDto.autor.id } as Usuario; // Cambia 'Usuario' por el tipo real de la entidad de usuario
    }

    return this.libroRepository.save(libro);
  }
}