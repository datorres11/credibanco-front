import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../model/tarjeta';
import { Transacciones } from '../model/transacciones';
import { CreadibancoService } from '../services/credibanco.assesment.card.services';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  tarjeta:Tarjeta= new Tarjeta();
  transacciones:Transacciones[]=[]
  numCedula?:number
  visible?:boolean=false
  ngOnInit(): void {
  }

  constructor(private creadibancoService: CreadibancoService){}

  obtenerCedula(event:Event){
    this.creadibancoService.getTarjeta(this.numCedula).subscribe(
      (tarjeta: any)=>{this.tarjeta=tarjeta.Data
        this.creadibancoService.getTransacciones(this.numCedula).subscribe(
          (list: any)=>{this.transacciones=list.Data
            this.visible=true
          }
        )
      }
    )
  }



}
