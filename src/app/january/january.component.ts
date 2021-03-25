import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-january',
  templateUrl: './january.component.html',
  styleUrls: ['./january.component.css']
})
export class JanuaryComponent implements OnInit {
  currentDate:any = new Date().toDateString(); //get current date
  constructor() { }

  ngOnInit(): void {
  }

}
