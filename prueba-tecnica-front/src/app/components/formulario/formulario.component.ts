import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormuService } from 'src/app/services/formu.service';
import { Ficha } from '../../models/formulario.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [FormuService]
})
export class FormularioComponent implements OnInit {
  public fichaModel: Ficha;
  public fichaModelPost: Ficha;

  constructor(private _formularioService: FormuService, private _router: Router) {
    this.fichaModel = new Ficha(
      "",
      "",
      "",
      "",
      "",
      "",
      new Date,
      "",
      "",
      new Date,
      new Date,
    )

    this.fichaModelPost = new Ficha(
      "",
      "",
      "",
      "",
      "",
      "",
      new Date,
      "",
      "",
      new Date,
      new Date,
    )
   }

   public Genero =[{genero:"F"},{genero:"M"}]
   public GeneroPO =[{genero:"Lírico"},{genero:"Épico"},{genero:"Dramático"}]


  ngOnInit(): void {
  }

  solicitudFicha(){
    this._formularioService.solicitudFicha(this.fichaModel).subscribe(
      
      (response)=>{

        this.fichaModelPost._id = '';
        this.fichaModelPost.nombre = '';
        this.fichaModelPost.carnet = '';
        this.fichaModelPost.carrera = '';
        this.fichaModelPost.direccion = '';
        this.fichaModelPost.genero = '';
        this.fichaModelPost.telefono = '';
        this.fichaModelPost.generoDePoesia = '';
        this.fichaModelPost.fechaNacimiento = new Date;
        this.fichaModelPost.fechaDeDeclamacion = new Date;
        this.fichaModelPost.fechaDeInscripción = new Date;
        Swal.fire({
          icon: 'success',
          title: 'Formulario Enviado',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error)=>{
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    );
  }
}
