import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';

export type Movimiento = {
  id: number,
  concepto: string,
  importe: number
}

@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent {

  @Input() presupuestoTotal !: number
  @Input() ingresoTotal !: number
  @Input() gastoTotal !: number
  @Input() porcentajeTotal !: number
}
