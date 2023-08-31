import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { Libro } from './libro.entity';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Get()
  async obtenerLibros(): Promise<Libro[]> {
    return this.librosService.obtenerTodos();
  }

  @Get(':id')
  async obtenerLibroPorId(@Param('id') id: number): Promise<Libro> {
    return this.librosService.obtenerPorId(id);
  }

  @Post()
  async crearLibro(@Body() libro: Libro): Promise<Libro> {
    return this.librosService.crear(libro);
  }

  @Put(':id')
  async actualizarLibro(@Param('id') id: number, @Body() libro: Libro): Promise<Libro> {
    return this.librosService.actualizar(id, libro);
  }

  @Delete(':id')
  async eliminarLibro(@Param('id') id: number): Promise<void> {
    return this.librosService.eliminar(id);
  }
}