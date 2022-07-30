export class Ficha {
    constructor(
        public nombre: string,
        public carnet: string,
        public direccion: string,
        public genero: string,
        public telefono: string,
        public fechaNacimiento: Date,
        public carrera: string,
        public generoDePoesia: string,
        public fechaDeInscripcion: Date,
        public fechaDeDeclamacion: Date,
        public fechaNacimientoTxt: string,
        public fechaDeInscripcionTxt: string,
        public fechaDeDeclamacionTxt: string,
    ){}
}