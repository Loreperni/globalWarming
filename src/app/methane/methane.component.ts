import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { DataSet } from '../interfaces/charts';
import { Methane } from '../interfaces/methane';
import { catchError } from 'rxjs';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-methane',
  templateUrl: './methane.component.html',
  styleUrls: ['./methane.component.css']
})
export class MethaneComponent implements OnInit {
  constructor(private apiService: APIService){}

  ngOnInit(): void {
    this.getMethane()
  }

  methane!: Methane[]
  methaneData: any

  dataSet!: DataSet[]
  labels!: Array<any>

  mainChartColor = '#23ad7aff'

  errorMessage: Error | null = null

  chartOptions: ChartOptions = {
    responsive: true
  };

  getMethane(){
    this.apiService.getMethane()
    .pipe(
      catchError((error) => {
        this.errorMessage = error;
        return [];
      })
    )
    .subscribe(
      (data) => {
        this.methaneData = data
        this.methane = this.methaneData.methane

        this.labels = this.methane.map((e: Methane) => e.date)

        this.dataSet = [
          {data: this.methane.map((e: Methane) => e.average), label: 'average',
          fill: true,
          backgroundColor: this.mainChartColor,
          borderColor: this.mainChartColor,
          pointBackgroundColor: this.mainChartColor}
        ]
        console.log(this.methane)
      }
    )
  }

}
