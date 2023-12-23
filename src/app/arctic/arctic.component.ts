import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { arctic } from '../interfaces/arctic';
import { DataSet } from '../interfaces/charts';
import { ChartOptions } from 'chart.js';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-arctic',
  templateUrl: './arctic.component.html',
  styleUrls: ['./arctic.component.css']
})
export class ArcticComponent implements OnInit {
  constructor(private apiService: APIService){}

  ngOnInit(): void {
    this.getArcticData()
  }

  arctic: any
  arcticData!: arctic[]

  datasets!: DataSet[]
  lables!: number[]

  mainChartColor: string = '#1426adff'

  chartOptions: ChartOptions = {
    responsive: true
  };

  errorMessage: Error | null = null

  getArcticData(){
    this.apiService.getArctic()
    .pipe(
      catchError((error) => {
        this.errorMessage = error;
        return [];
      })
    )
    .subscribe(
      (data) => {
        this.arctic = data
        this.arcticData = this.arctic.arcticData

        this.lables = this.arcticData.map((e:arctic) => e.year)

        this.datasets = [
          {data: this.arcticData.map((e:arctic) => e.area),
          label: 'area',
          fill: true,
          backgroundColor: this.mainChartColor,
          borderColor: this.mainChartColor,
          pointBackgroundColor: this.mainChartColor,
        }
        ]
        console.log(this.arcticData)
      }
    )
  }

}
