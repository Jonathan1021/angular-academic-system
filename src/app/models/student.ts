export class Student {
  constructor(
    public idEstudiante: number,
    public nombre: string,
    public apellidos: string,
    public correo: string,
    public fechaNacimiento: Date,
    public telefono: string,
    public longitud: number,
    public latitud: number,
    public kms?: number
  ) {}
}
