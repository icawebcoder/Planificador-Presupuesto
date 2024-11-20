import { Component, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { InsertarComponent } from "./insertar/insertar.component";
import { MovimientosComponent } from "./movimientos/movimientos.component";
import { IngresosComponent } from "./ingresos/ingresos.component";
import { GastosComponent } from "./gastos/gastos.component";
import { Ingresos } from './ingresos/ingresos.model';
import { Gastos } from './gastos/gastos.model';
import { GastoService } from './gastos/gasto.service';
import { IngresoService } from './ingresos/ingreso.service';

registerLocaleData(localeEs, 'es')

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InsertarComponent, MovimientosComponent, IngresosComponent, GastosComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ingresos: Ingresos[] = []
  gastos: Gastos[] = []

  constructor(
    private ingresosService: IngresoService,
    private gastosService: GastoService
  ) {
    this.ingresos = this.ingresosService.ingresos;
    this.gastos = this.gastosService.gastos;
  }

  getIngresoTotal() {
    let ingresosTotal: number = 0
    this.ingresos.forEach(ingreso => {
      ingresosTotal += ingreso.valor
    })
    return ingresosTotal
  }

  getGastoTotal() {
    let gastoTotal: number = 0
    this.gastos.forEach(gasto => {
      gastoTotal += gasto.valor
    })
    return gastoTotal
  }

  getPorcentaje() {
    return this.getGastoTotal() / this.getIngresoTotal()
  }

  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getGastoTotal()
  }
}
