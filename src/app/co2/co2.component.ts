import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { ChartDataset } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { Co2 } from '../interfaces/co2';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-co2',
  templateUrl: './co2.component.html',
  styleUrls: ['./co2.component.css']
})
export class Co2Component implements OnInit {

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.getCo2()
  }

 co2!: Co2[]
 co2Data: any

  dataSet!: ChartDataset[]
  labels!: number[]

  mainChartColor = '#012239ff'


  errorMessage: Error | null = null

  chartOptions: ChartOptions = {
    responsive: true
  };

  getCo2(){
    this.apiService.getCo2()
    .pipe(
      catchError((error) => {
        this.errorMessage = error;
        return [];
      })
    )
    .subscribe(
      (data) => {
        this.co2Data = data
        this.co2 = this.co2Data.co2

        this.labels = this.co2.map((e: Co2) => e.year)

        this.dataSet = [
          {data: this.co2.map((e: Co2) => e.trend),
            label: 'trend',
            fill:true,
            backgroundColor: this.mainChartColor,
            borderColor: this.mainChartColor,
            pointBackgroundColor: this.mainChartColor,}
        ]
        console.log(this.co2)
      }
    )
  }
}
