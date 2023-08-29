import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity'; // Asegúrate de importar la entidad Usuario correctamente

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @ManyToOne(() => Usuario, usuario => usuario.libros) // Definición de la relación muchos a uno
  autor: Usuario;

  @Column()
  anioPublicacion: number;
}
