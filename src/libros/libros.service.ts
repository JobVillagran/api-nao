import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libro.entity';

@Injectable()
export class LibrosService {
  eliminar(id: number): void | PromiseLike<void> {
      throw new Error('Method not implemented.');
  }
  actualizar(id: number, libro: Libro): Libro | PromiseLike<Libro> {
      throw new Error('Method not implemented.');
  }
  obtenerPorId(id: number): Libro | PromiseLike<Libro> {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,
  ) {}

  async obtenerTodos(): Promise<Libro[]> {
    return this.libroRepository.find();
  }

  async crear(libro: Libro): Promise<Libro> {
    return this.libroRepository.save(libro);
  }
}
