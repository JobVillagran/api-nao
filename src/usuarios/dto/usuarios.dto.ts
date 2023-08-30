// usuarios.dto.ts
export class CreateUsuarioDto {
    readonly nombre: string;
    readonly email: string;
    readonly contraseña: string;
  }
  
  export class UpdateUsuarioDto {
    readonly nombre?: string;
    readonly email?: string;
  }
  