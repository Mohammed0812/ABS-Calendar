import { Component } from '@angular/core';
import { AppService } from './abs.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: any = new Date();
  months: any = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  currentMonth: any = this.months[this.date.getMonth()]; //get current month
  currentYear: any = this.date.getFullYear(); //get current year
  currentDate: any = new Date().toDateString(); //get current date
  
  title: any;
  eventTitle: any;
  event: any = false;
  list: any = true;
  saveEventList:any = [];
  eventList: any = [];
  constructor(
    private api: AppService
  ) {
    this.load();
  }
  dates: any = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
  getValue(event: any) {
    let value = event.target.innerHTML;
    console.log(value);
    this.event = true;
    console.log(this.dates);
  }
  
  submit() {
    this.api.post('http://localhost/calendar/save.php', {
    dates: this.dates,
    title: this.eventTitle
    });
    this.load();
    // this.dates = '';
    // this.eventTitle = '';
  }
  async load() {
      let result:any = await this.api.get('http://localhost/calendar/view.php');
      this.saveEventList = result.data;
    
      this.eventList = this.saveEventList;
      
  }
  cancel() {
    this.event = false;
  }
  delete(i: any) {
    this.api.post('http://localhost/calendar/delete.php', i);
    this.load();
  }
}
