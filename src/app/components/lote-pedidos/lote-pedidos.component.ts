import { Component, OnInit } from '@angular/core';
import { PedidosDiarios } from '../../models/pedidos-diarios.model';
import { BorradoresService } from '../../services/borradores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lote-pedidos',
  imports: [CommonModule],
  templateUrl: './lote-pedidos.component.html',
  styleUrl: './lote-pedidos.component.css',
})
export class LotePedidosComponent implements OnInit {

  fechaHoy: string = new Date().toLocaleDateString('es-PE');
  pedidoDiario: PedidosDiarios[] = [];

  constructor(private borradoresService: BorradoresService) { }

  ngOnInit(): void {
    this.showPedidosDiarios();
  }

  showPedidosDiarios() {
    return this.borradoresService.getPedidoDiario().subscribe(
      data => this.pedidoDiario = data
    )
  }
}
