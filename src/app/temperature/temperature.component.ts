import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Temperature } from '../interfaces/temperature';
import { DataSet } from '../interfaces/charts';
import { catchError } from 'rxjs';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  constructor(private apiService: APIService){}

  ngOnInit(): void {
    this.getTemp()
  }

  temp!: Temperature[]
  tempData: any
  labels!: Array<number>
  dataSet!: DataSet[]

  mainChartColor = '#8400a1ff'

  chartOptions: ChartOptions = {
    responsive: true
  };

  errorMessage: Error | null = null

  getTemp(){
    this.apiService.getTemp()
    .pipe(
      catchError((error) => {
        this.errorMessage = error;
        return [];
      })
    )
    .subscribe(
      (data) => {
        this.tempData = data
        this.temp = this.tempData.result

        this.labels = this.temp.map((e: Temperature) => e.time)

        this.dataSet = [{data: this.temp.map((e: Temperature) => e.land), label: 'land',
        fill: false,
          backgroundColor: this.mainChartColor,
          borderColor: this.mainChartColor,
          pointBackgroundColor: this.mainChartColor,
      }]
        console.log(this.temp)
      }
    )
  }

}
