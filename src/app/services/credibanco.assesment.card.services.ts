import {HttpClient}from"@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import 'rxjs';
import { Observable } from 'rxjs';
import { Tarjeta } from "../model/tarjeta";
import { Transacciones } from "../model/transacciones";
@Injectable({
    providedIn:'root'
})
export class CreadibancoService{
    constructor(private httpClient:HttpClient,private router:Router){}

    url="http://localhost:8080/";

    getTransacciones(numTarjeta:any):Observable<Transacciones[]>{
        return this.httpClient.get<Transacciones[]>(this.url+"transacciones?numTarjeta="+numTarjeta);
    }
    
    getTarjeta(numTarjeta:any):Observable<Tarjeta>{
        return this.httpClient.get<Tarjeta>(this.url+"tarjeta?numTarjeta="+numTarjeta);
    }
}