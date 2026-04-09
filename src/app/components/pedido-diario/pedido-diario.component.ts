import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PedidosDiarios } from '../../models/pedidos-diarios.model';
import { BorradoresService } from '../../services/borradores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedido-diario',
  imports: [CommonModule],
  templateUrl: './pedido-diario.component.html',
  styleUrl: './pedido-diario.component.css',
})
export class PedidoDiarioComponent implements OnInit, AfterViewInit, OnDestroy {

  /*LOGICA PARA LA TABLA*/
  @ViewChild('tableContainer') tableContainer!: ElementRef;
  /* */

  pedidoDiario: PedidosDiarios[] = [];
  page = 1;
  pageSize = 10;

  constructor(private borradoresService: BorradoresService) { }

  ngOnInit(): void {
    this.showPedidosDiarios();
    this.paginatedData();
  }

  ngAfterViewInit(): void {
    const el = this.tableContainer.nativeElement;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    el.onmousedown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    el.onmouseleave = () => {
      isDown = false;
    };

    el.onmouseup = () => {
      isDown = false;
    };

    el.onmousemove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };
  }

  ngOnDestroy(): void {
  }

  showPedidosDiarios() {
    return this.borradoresService.getPedidoDiario().subscribe(
      data => this.pedidoDiario = data
    )
  }

  paginatedData() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.pedidoDiario.slice(start, end);
  }

  totalPages() {
    return Math.ceil(this.pedidoDiario.length / this.pageSize);
  }

  nextPage() {
    if (this.page < this.totalPages()) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }
}
