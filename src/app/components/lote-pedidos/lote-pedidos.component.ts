import { Component, OnInit } from '@angular/core';
import { PedidosDiarios } from '../../models/pedidos-diarios.model';
import { BorradoresService } from '../../services/borradores.service';
import { CommonModule } from '@angular/common';
import { LotePedidoService } from '../../services/lote-pedido.service';
import { LotePedido } from '../../models/borrador/lote-pedido.model';

@Component({
  selector: 'app-lote-pedidos',
  imports: [CommonModule],
  templateUrl: './lote-pedidos.component.html',
  styleUrl: './lote-pedidos.component.css',
})
export class LotePedidosComponent implements OnInit {


  fechaHoy: string = new Date().toLocaleDateString('es-PE');
  lotePedidos: LotePedido[] = [];

  constructor(private lotePedidosService: LotePedidoService) { }

  ngOnInit(): void {
    this.showPedidosDiarios();
  }

  showPedidosDiarios() {
    return this.lotePedidosService.getLotePedidos().subscribe(
      data => this.lotePedidos = data
    )
  };

  // postPedidoDiario() {
  //   return this.lotePedidosService.postLotePedidos().subscribe(
  //     () => console.log("Pedido registrado con exito")
  //   )
  // }
}
