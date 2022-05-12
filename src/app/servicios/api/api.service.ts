import { Injectable } from '@angular/core';
import { LoginI } from  '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { ListaEmpleadosI } from '../../modelos/listaempleados.interface';
import { EmpleadoI } from '../../modelos//empleado.interface';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url:string = "http://localhost/API/Api_Rest/";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseI>(direccion,form);
  }

  getAllTracks(page:number):Observable<ListaEmpleadosI[]>{
    let direccion = this.url + "pista?page=" + page;
    return this.http.get<ListaEmpleadosI[]>(direccion);
  }
/*
  getSingleTrack(id):Observable<EmpleadoI>{
    let direccion = this.url + "pista?id=" + id;
    return this.http.get<EmpleadoI>(direccion);
  }
*/
  putTrack(form:EmpleadoI):Observable<ResponseI>{
    let direccion = this.url + "pista";
    return this.http.put<ResponseI>(direccion, form);
  }

  deleteTrack(from:EmpleadoI):Observable<ResponseI>{
    let direccion = this.url + "pista";
    let Options = {
      headers: new HttpHeaders({
         'Conten-type': 'application/json'
      }),
      body:from
    }
    return this.http.delete<ResponseI>(direccion, Options);
  }

  postTrack(form:EmpleadoI):Observable<ResponseI>{
    let direccion = this.url+ "pista";
    return this.http.post<ResponseI>(direccion,form);
  }


}
