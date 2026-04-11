import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LotePedido } from '../models/lote-pedido.model';

@Injectable({
  providedIn: 'root',
})
export class LotePedidoService {

  private apiLotePedido: string = "http://localhost:8080/api/v1/lote-pedidos";

  constructor(private http: HttpClient) { }

  getLotePedidos(): Observable<LotePedido[]> {
    return this.http.get<LotePedido[]>(`${this.apiLotePedido}/listar`);
  }

  postLotePedidos(): Observable<void> {
    return this.http.post<void>(`${this.apiLotePedido}/registrar`, null);
  }
}
