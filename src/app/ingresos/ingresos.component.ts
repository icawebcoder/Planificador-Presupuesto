import { Component } from '@angular/core';
import { Ingresos } from './ingresos.model';
import { IngresoService } from './ingreso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {

  ingresos: Ingresos[] = []
  constructor(private ingresoService: IngresoService) {
    this.ingresos = this.ingresoService.ingresos
  }

  eliminarIngreso(ingreso: Ingresos) {
    this.ingresoService.eliminar(ingreso)
  }
}
