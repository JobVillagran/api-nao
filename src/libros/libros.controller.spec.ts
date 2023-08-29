import { Controller, Get, Post, Body } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { Libro } from './libro.entity';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Get()
  async obtenerLibros(): Promise<Libro[]> {
    return this.librosService.obtenerTodos();
  }

  @Post()
  async crearLibro(@Body() libro: Libro): Promise<Libro> {
    return this.librosService.crear(libro);
  }
}
