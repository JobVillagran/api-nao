import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libro.entity';

@Injectable()
export class LibrosService {
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
