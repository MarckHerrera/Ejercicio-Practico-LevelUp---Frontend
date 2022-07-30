export class Ficha {
    constructor(
        public _id: String,
        public nombre: String,
        public carnet: String,
        public direccion: String,
        public genero: String,
        public telefono: String,
        public fechaNacimiento: Date,
        public carrera: String,
        public generoDePoesia: String,
        public fechaDeInscripción: Date,
        public fechaDeDeclamacion: Date,
    ) { }
}