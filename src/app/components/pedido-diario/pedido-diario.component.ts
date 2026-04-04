import { Component, OnInit } from '@angular/core';
import { PedidosDiarios } from '../../models/pedidos-diarios.model';
import { BorradoresService } from '../../services/borradores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedido-diario',
  imports: [CommonModule],
  templateUrl: './pedido-diario.component.html',
  styleUrl: './pedido-diario.component.css',
})
export class PedidoDiarioComponent implements OnInit{

  pedidoDiario:PedidosDiarios[] = [];

  constructor(private borradoresService:BorradoresService){}

  ngOnInit(): void {
    this.showPedidosDiarios();
  }

  showPedidosDiarios(){
    return this.borradoresService.getPedidoDiario().subscribe(
      data => this.pedidoDiario = data
    )
  }
}
