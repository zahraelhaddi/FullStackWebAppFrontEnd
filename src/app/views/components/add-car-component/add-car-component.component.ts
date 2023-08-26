import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-add-car-component',
  templateUrl: './add-car-component.component.html',
  styleUrls: ['./add-car-component.component.sass']
})
export class AddCarComponentComponent implements OnInit {

  
  
  constructor(private carsService:CarsService,private route:Router) { }

  ngOnInit(): void {
  }

    


}
