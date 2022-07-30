import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ficha } from '../models/formulario.model';

@Injectable({
  providedIn: 'root'
})
export class FormuService {

  public url : String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }

  solicitudFicha(modeloFormulario: Ficha) : Observable<any> {

    let parametros = JSON.stringify(modeloFormulario);

    return this._http.post(this.url + '/solicitudFicha', parametros);
  }

  verFicha() : Observable<any> {

    return this._http.get(this.url + '/verFichas');
  }
}
