import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormuService } from '../../services/formu.service';
import { Ficha } from '../../models/fichaSolicitud.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [FormuService]
})
export class FormularioComponent implements OnInit {
  public fichaModelPost: Ficha;

  constructor(public _formularioService: FormuService) {
    this.fichaModelPost = new Ficha(
      "",
      "",
      "",
      "",
      "",
      new Date,
      "",
      "",
    )
   }

    tipoGenero = [{genero:"M"},{genero:"F"}]
    GeneroPO =[{genero:"Lírico"},{genero:"Épico"},{genero:"Dramático"}]


  ngOnInit(): void {
  }

  solicitudFicha(){
   
    this._formularioService.RegistrarFicha(this.fichaModelPost).subscribe(
      (response)=>{
        this.fichaModelPost.nombre = "";



        Swal.fire({
          icon: 'success',
          title: 'Se Registro el Formulario',
          showConfirmButton: false,
          timer: 1500
        })
      },

      (error) => {
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }

    )
  }
}
