import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../ingresos/ingreso.service';
import { GastoService } from '../gastos/gasto.service';
import { Ingresos } from '../ingresos/ingresos.model';
import { Gastos } from '../gastos/gastos.model';

@Component({
  selector: 'app-insertar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insertar.component.html',
  styleUrl: './insertar.component.css'
})
export class InsertarComponent {

  tipo: string = 'ingresos'

  descripcion: string | null = null
  valor: number | null = null

  constructor(private ingresoServicio: IngresoService, private gastoServicio: GastoService) { }

  tipoOperacion(evento: Event) {
    const target = evento.target as HTMLSelectElement
    this.tipo = target.value
  }

  agregarValor() {
    if (this.descripcion != null && this.valor != null) {
      if (this.tipo === 'ingresos') {
        this.ingresoServicio.ingresos.push(
          new Ingresos(this.descripcion, this.valor)
        )
      } else {
        this.gastoServicio.gastos.push(
          new Gastos(this.descripcion, this.valor)
        )
      }
    } else {
      alert('Debes llenar todos los campos')
    }
    this.descripcion = null
    this.valor = null
  }
}
