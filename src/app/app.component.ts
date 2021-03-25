import { Component } from '@angular/core';
import { AppService } from './abs.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date:any = new Date();
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
  currentYear:any = this.date.getFullYear(); //get current year
  currentDate:any = new Date().toDateString(); //get current date
  dates:any;
  title:any;
  eventTitle:any;
  event:any = false;
  eventList:any = [];
  constructor(
    private api: AppService
  ) {
    // this.load();
    // console.log('Request sent');

  }
  getValue(event:any) {
    let value = event.target.innerHTML;
    console.log(value);
    this.event = true;
  }
  submit() {
    //  this.api.post('http://localhost/calendar/save.php', {
    //    name: this.eventTitle
    //  }).then((x) => {
    //    console.log('event Saved', x);
    //  }).catch((x) => {
    //    console.error('Error is', x);
    //  });
    //  this.load();
    this.eventList.push({name:this.eventTitle});
  }
   async load() {
    this.api.get('http://localhost/calendar/view.php').then((x) => {
      console.log('eventloaded', x);
    }).catch((x) => {
      console.error('Error is', x);
    });
  }
  
  

  
}
