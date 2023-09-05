import { Component } from '@angular/core';
import { AgenciesService } from 'src/app/services/agencies.service';
import { CarsService } from 'src/app/services/cars.service';
import { TransfersService } from 'src/app/services/transfers.service';
import {Chart} from 'chart.js';
import { Router } from '@angular/router';
import { registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

// Register the required Chart.js components
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  dates: any[] | undefined ;
  transferCounts: any[] | undefined ;


  constructor(private transfersService:TransfersService,private agenciesService: AgenciesService,private carsService:CarsService,private route:Router) {
   }

  ngOnInit(): void {
    this.transfersService.getAlltransfers().subscribe((transfers: any) => {
      // Prepare the data from the response
      this.prepareTransfersData(transfers);
      console.log(this.prepareTransfersData(transfers))

      // Create and configure the line chart
      this.createLineChart();
  });
  }

  private prepareTransfersData(transfers: any[]): void {
    // Create an object to store the count of transfers for each date
    const transfersByDate: { [date: string]: number } = {};
  
    // Loop through the transfers and count them for each date
    transfers.forEach((transfer) => {
        const transferDate = new Date(transfer.transfer_date).toLocaleDateString(); // Convert to a date string
        if (transfersByDate[transferDate]) {
            transfersByDate[transferDate]++;
        } else {
            transfersByDate[transferDate] = 1;
        }
    });
  
    // Extract dates and transfer counts from the object
    this.dates = Object.keys(transfersByDate);
    this.transferCounts = Object.values(transfersByDate);
  }
  
  private createLineChart(): void {
    // Create a canvas element and get its 2D context
    const transfersCanvas = document.getElementById('transfersChart') as HTMLCanvasElement;
  
    if (transfersCanvas) {
        const ctx = transfersCanvas.getContext('2d');
  
        if (ctx) {
            // Create the line chart
            const transfersChart = new Chart(ctx, {
              type: 'line',
              data: {
                  labels: this.dates,
                  datasets: [{
                      label: 'Transfers Over Time',
                      data: this.transferCounts,
                      borderColor: 'black',
                      borderWidth: 1,
                      fill: true, // This makes the area below the line filled
                      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the fill color as needed
                  }],
              },
              options: {
                  scales: {
                      x: {
                          type: 'time',
                          time: {
                              unit: 'day',
                          },
                      },
                      y: {
                          beginAtZero: true,
                      },
                  },
              },
          });
        } else {
            console.error('Failed to get 2D rendering context for the canvas.');
        }
    } else {
        console.error('Canvas element with ID "transfersChart" not found.');
    }
  }
}
