import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-february',
  templateUrl: './february.component.html',
  styleUrls: ['./february.component.css']
})
export class FebruaryComponent implements OnInit {
  currentDate:any = new Date().toDateString(); //get current date
  constructor() { }

  ngOnInit(): void {
  }

}
