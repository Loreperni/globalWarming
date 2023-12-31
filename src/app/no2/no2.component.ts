import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { No2 } from '../interfaces/no2';
import { DataSet } from '../interfaces/charts';
import { catchError } from 'rxjs';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-no2',
  templateUrl: './no2.component.html',
  styleUrls: ['./no2.component.css']
})
export class No2Component implements OnInit {

  constructor(private apiService: APIService){}

  ngOnInit(): void {
    this.getNo2()
  }

  no2!: No2[]
  no2Data: any

  labels!: Array<number>
  dataSet!: DataSet[]

  mainChartColor = '#ff6f22ff'

  chartOptions: ChartOptions = {
    responsive: true
  };

  errorMessage: Error | null = null

  getNo2(){
    this.apiService.getNo2()
    .pipe(
      catchError((error) => {
        this.errorMessage = error;
        return [];
      })
    )
    .subscribe(
      (data) => {
        this.no2Data = data
        this.no2 = this.no2Data.nitrous

        this.labels = this.no2.map((e: No2) => e.date)

        this.dataSet = [
          {data: this.no2.map((e: No2) => e.average), label: 'average',
          fill: true,
          backgroundColor: this.mainChartColor,
          borderColor: this.mainChartColor,
          pointBackgroundColor: this.mainChartColor,
        }]
        console.log(this.no2)
      }
    )
  }

}
