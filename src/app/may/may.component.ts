import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-may',
  templateUrl: './may.component.html',
  styleUrls: ['./may.component.css']
})
export class MayComponent implements OnInit {
  currentDate:any = new Date().toDateString(); //get current date
  constructor() { }

  ngOnInit(): void {
  }

}
