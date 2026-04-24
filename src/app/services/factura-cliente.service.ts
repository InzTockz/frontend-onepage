import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacturasPorCobrar } from '../models/factura-cliente/facturas-por-cobrar.model';

@Injectable({
  providedIn: 'root',
})
export class FacturaClienteService {

  private facturaClienteApi = "http://localhost:8080/api/v1/facturas-cliente";

  constructor(private http: HttpClient) { }

  getFacturasPorCobrar() {
    return this.http.get<FacturasPorCobrar[]>(`${this.facturaClienteApi}/facturas-por-cobrar`);
  }
}
