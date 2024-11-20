import { Component, Input } from '@angular/core';
import { Gastos } from './gastos.model';
import { GastoService } from './gasto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {

  gastos: Gastos[] = []
  @Input() ingresoTotal !: number;

  constructor(private gastoService: GastoService) {
    this.gastos = this.gastoService.gastos

  }

  eliminarGasto(gasto: Gastos) {
    this.gastoService.eliminar(gasto)
  }

  
  calcularPorcentaje(gasto : Gastos){
    return gasto.valor/this.ingresoTotal
  }
}
