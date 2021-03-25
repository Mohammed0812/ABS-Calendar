import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-april',
  templateUrl: './april.component.html',
  styleUrls: ['./april.component.css']
})
export class AprilComponent implements OnInit {
  currentDate:any = new Date().toDateString(); //get current date
  constructor() { }

  ngOnInit(): void {
  }

}
