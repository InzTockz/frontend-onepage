import { Component } from '@angular/core';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexFill,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  colors: string[];
}

@Component({
  selector: 'app-home',
  imports: [ChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  public chartOptions: Partial<ChartOptions> = {
    series: [2],  // 👈 el porcentaje
    chart: {
      type: 'radialBar',
      width: 120,
      height: 120,
      sparkline: {
        enabled: true  // 👈 elimina padding/margins extras
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: {
          background: '#e9ecef',
          strokeWidth: '97%',
        },
        dataLabels: {
          name: {
            show: false  // 👈 oculta label de nombre
          },
          value: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
            offsetY: 8,
            formatter: (val: number) => val + '%'
          }
        },
        hollow: {
          size: '55%'
        }
      }
    },
    fill: {
      colors: ['#e91e8c']  // 👈 color rosa/rojo como en la imagen
    },
    stroke: {
      lineCap: 'round'
    },
    colors: ['#e91e8c']
  }
}