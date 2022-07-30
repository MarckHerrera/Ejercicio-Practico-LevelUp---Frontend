import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormuService } from '../../services/formu.service';
import { Ficha } from '../../models/fichaSolicitud.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
  providers: [FormuService]
})
export class ReporteComponent implements OnInit {
  public fichaModelGet: Ficha;
  public fichaModelGetsss: Ficha;

  constructor(public _formularioService: FormuService) { 
  this.fichaModelGet = new Ficha(
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
    "",
    "",
    ""
  )

  this.fichaModelGetsss = new Ficha(
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
    "",
    "",
    ""
  )
 }

  ngOnInit(): void {
    this.getFichas();
  }

  
  getFichas(){
    this._formularioService.verFicha().subscribe(
      (response)=>{
        this.fichaModelGet = response.fichas;
        console.log(this.fichaModelGetsss)
      },
      (error) => {

      }
    )
  }
}
