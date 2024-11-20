import { Injectable } from '@angular/core';
import { Gastos } from './gastos.model';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  gastos: Gastos[] = [
    new Gastos('Alquiler', 1000),
    new Gastos('Comida', 150)
  ]

  eliminar(gasto: Gastos) {
    const indice: number = this.gastos.indexOf(gasto)
    this.gastos.splice(indice, 1)
  }

}
