import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ficha } from '../models/fichaSolicitud.model';

@Injectable({
  providedIn: 'root'
})
export class FormuService {

  public url : String = 'http://localhost:3000/api';

  constructor(public _http: HttpClient) { }
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')


  RegistrarFicha(modeloFicha: Ficha) : Observable<any>{


    let parametros = JSON.stringify(modeloFicha);

    console.log(parametros);
    return this._http.post(this.url + '/solicitudFicha', parametros, {headers: this.headersVariable})
  }


  verFicha() : Observable<any> {

    return this._http.get(this.url + '/verFichas');
  }
}