import { chartData } from './chartData';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from "./share/data.service";

@Component({
    selector: "my-app",
    template: `<h1>Hello world!</h1>
    <ul>
      <div>
        <nvd3 [options]="options" [data]="data"></nvd3>
      </div>
    </ul>
    `,
    // styleUrls: ['../../node_modules/nvd3/build/nv.d3.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
    options: any;
    data: any;

    constructor(private dataService: DataService){}

    ngOnInit() {
      this.options = {
        chart: {
          // type: 'discreteBarChart',
          type: 'multiBarChart',
          height: 285,
          width: 485,
          margin : {
            top: 20,
            right: 20,
            bottom: 50,
            left: 55
          },
          x: function(d:any){return d.time;},
          y: function(d:any){return d.value;},
          showValues: false,
          valueFormat: function(d:any){
            return d3.format(',.4f')(d);
          },
          duration: 350,
          reduceXTicks: true,
          rotateLabels: 0,
          showControls: false,
          groupSpacing: 0.1,
          xAxis: {
            axisLabel: ''
          },
          yAxis: {
            axisLabel: '',
            axisLabelDistance: -10
          }
        }
      }    
      
      this.dataService.getData().then( r => {
        this.data = 
          [
            {
              "key":"Cumulative Return", 
              "values" : r.values
            }
          ];
      });
    }
}